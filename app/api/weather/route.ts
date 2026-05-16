import { NextRequest, NextResponse } from "next/server";

const OPENWEATHER_BASE = "https://api.openweathermap.org/data/2.5";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");
  if (!city || city.trim() === "") {
    return NextResponse.json({ error: "City name is required." }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Weather API key not configured. Please add OPENWEATHER_API_KEY to your .env.local file." },
      { status: 503 }
    );
  }

  try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(`${OPENWEATHER_BASE}/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`),
      fetch(`${OPENWEATHER_BASE}/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`),
    ]);

    if (!weatherRes.ok) {
      if (weatherRes.status === 404) {
        return NextResponse.json({ error: `City "${city}" not found. Please check the spelling and try again.` }, { status: 404 });
      }
      if (weatherRes.status === 401) {
        return NextResponse.json({ error: "Invalid API key. Please check your OPENWEATHER_API_KEY." }, { status: 401 });
      }
      return NextResponse.json({ error: "Failed to fetch weather data." }, { status: weatherRes.status });
    }

    const weather = await weatherRes.json();
    const forecast = forecastRes.ok ? await forecastRes.json() : null;

    // Extract 5-day forecast (one per day at noon)
    const dailyForecast = forecast?.list
      ? forecast.list
          .filter((item: { dt_txt: string }) => item.dt_txt.includes("12:00:00"))
          .slice(0, 5)
          .map((item: {
            dt_txt: string;
            main: { temp: number; humidity: number };
            weather: { description: string; icon: string }[];
            wind: { speed: number };
          }) => ({
            date: item.dt_txt.split(" ")[0],
            temp: Math.round(item.main.temp),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
          }))
      : [];

    return NextResponse.json({
      city: weather.name,
      country: weather.sys.country,
      temp: Math.round(weather.main.temp),
      feelsLike: Math.round(weather.main.feels_like),
      humidity: weather.main.humidity,
      windSpeed: weather.wind.speed,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
      forecast: dailyForecast,
    });
  } catch (err) {
    console.error("Weather API error:", err);
    return NextResponse.json({ error: "Network error. Please try again." }, { status: 500 });
  }
}

"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Wind, Droplets, Thermometer, MapPin, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface WeatherData {
  city: string;
  country: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  forecast: {
    date: string;
    temp: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  }[];
}

function getWeatherEmoji(description: string): string {
  const desc = description.toLowerCase();
  if (desc.includes("clear") || desc.includes("sunny")) return "☀️";
  if (desc.includes("few clouds")) return "🌤️";
  if (desc.includes("scattered clouds")) return "⛅";
  if (desc.includes("broken clouds") || desc.includes("overcast")) return "☁️";
  if (desc.includes("shower") || desc.includes("drizzle")) return "🌦️";
  if (desc.includes("rain") || desc.includes("rainy")) return "🌧️";
  if (desc.includes("thunder") || desc.includes("storm")) return "⛈️";
  if (desc.includes("snow")) return "❄️";
  if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze")) return "🌫️";
  if (desc.includes("wind")) return "💨";
  return "🌡️";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { weekday: "short", month: "short", day: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="p-8 rounded-2xl border border-border bg-card space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="h-6 w-32 bg-muted rounded" />
            <div className="h-4 w-20 bg-muted rounded" />
          </div>
          <div className="h-16 w-16 bg-muted rounded-full" />
        </div>
        <div className="h-20 w-40 bg-muted rounded" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-muted rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (searchCity: string) => {
    if (!searchCity.trim()) {
      toast.error("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(searchCity.trim())}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Failed to fetch weather data.");
        setData(null);
      } else {
        setData(json);
      }
    } catch {
      setError("Network error. Please check your connection.");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const popularCities = ["London", "Accra", "New York", "Tokyo", "Dubai", "Lagos"];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="text-5xl">🌤️</div>
            <h1 className="text-3xl sm:text-4xl font-bold">Weather App</h1>
            <p className="text-muted-foreground">
              Search any city for real-time weather data and 5-day forecasts.
            </p>
          </div>

          {/* Search */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search city... (e.g. Accra, London, Tokyo)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-9"
                disabled={loading}
              />
            </div>
            <Button type="submit" disabled={loading} className="gap-2">
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              Search
            </Button>
          </form>

          {/* Quick city chips */}
          <div className="flex flex-wrap gap-2">
            {popularCities.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCity(c);
                  fetchWeather(c);
                }}
                className="px-3 py-1 text-sm rounded-full border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Loading skeleton */}
          {loading && <SkeletonCard />}

          {/* Error state */}
          {!loading && error && (
            <div className="p-6 rounded-2xl border border-destructive/30 bg-destructive/5 text-center space-y-2">
              <div className="text-4xl">😕</div>
              <p className="font-medium text-destructive">{error}</p>
              <p className="text-sm text-muted-foreground">
                Make sure you&apos;ve added OPENWEATHER_API_KEY to your .env.local file.
              </p>
            </div>
          )}

          {/* Weather data */}
          {!loading && data && (
            <div className="space-y-4">
              {/* Current weather card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card space-y-6 glow">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {data.city}, {data.country}
                    </div>
                    <p className="text-sm text-muted-foreground capitalize">{data.description}</p>
                  </div>
                  <div className="text-5xl" role="img" aria-label={data.description}>
                    {getWeatherEmoji(data.description)}
                  </div>
                </div>

                <div>
                  <div className="text-7xl font-bold tracking-tight">
                    {data.temp}°<span className="text-4xl text-muted-foreground">C</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Feels like {data.feelsLike}°C
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    <span className="text-lg font-semibold">{data.humidity}%</span>
                    <span className="text-xs text-muted-foreground">Humidity</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary">
                    <Wind className="w-4 h-4 text-cyan-400" />
                    <span className="text-lg font-semibold">{data.windSpeed}</span>
                    <span className="text-xs text-muted-foreground">m/s Wind</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary">
                    <Thermometer className="w-4 h-4 text-orange-400" />
                    <span className="text-lg font-semibold">{data.feelsLike}°</span>
                    <span className="text-xs text-muted-foreground">Feels Like</span>
                  </div>
                </div>
              </div>

              {/* 5-day forecast */}
              {data.forecast.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    5-Day Forecast
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {data.forecast.map((day) => (
                      <div
                        key={day.date}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                      >
                        <span className="text-xs font-medium text-muted-foreground">
                          {formatDate(day.date)}
                        </span>
                        <span className="text-2xl">{getWeatherEmoji(day.description)}</span>
                        <span className="font-bold">{day.temp}°C</span>
                        <span className="text-xs text-muted-foreground text-center capitalize leading-tight">
                          {day.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Empty state */}
          {!loading && !data && !error && (
            <div className="text-center py-16 text-muted-foreground space-y-3">
              <div className="text-6xl">🌍</div>
              <p className="text-lg font-medium">Search for a city to get started</p>
              <p className="text-sm">
                Requires{" "}
                <code className="px-1.5 py-0.5 bg-secondary rounded text-xs">OPENWEATHER_API_KEY</code>{" "}
                in your environment variables.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

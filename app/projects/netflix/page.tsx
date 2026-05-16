"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Tv, Download, Users, Smartphone, Home } from "lucide-react";
import { toast } from "sonner";

const faqs = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price.",
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from GHS 30 to GHS 90 a month. No extra costs, no contracts.",
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    q: "What can I watch on Netflix?",
    a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    q: "Is Netflix good for kids?",
    a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  },
];

const features = [
  {
    title: "Enjoy on your TV.",
    subtitle: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <Tv className="w-8 h-8 text-red-500" />,
    emoji: "📺",
    reverse: false,
  },
  {
    title: "Download your shows to watch offline.",
    subtitle: "Save your favourites easily and always have something to watch.",
    icon: <Download className="w-8 h-8 text-red-500" />,
    emoji: "⬇️",
    reverse: true,
  },
  {
    title: "Watch everywhere.",
    subtitle: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <Smartphone className="w-8 h-8 text-red-500" />,
    emoji: "📱",
    reverse: false,
  },
  {
    title: "Create profiles for kids.",
    subtitle: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: <Users className="w-8 h-8 text-red-500" />,
    emoji: "👶",
    reverse: true,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-700">
      <button
        className="w-full flex items-center justify-between py-5 px-6 text-left text-white text-lg font-medium bg-zinc-800 hover:bg-zinc-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {q}
        <span className="shrink-0 ml-4">
          {open ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6 rotate-45 transform" />}
        </span>
      </button>
      {open && (
        <div className="px-6 py-5 text-zinc-300 text-base leading-relaxed bg-zinc-800">
          {a}
        </div>
      )}
    </div>
  );
}

export default function NetflixClonePage() {
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list!", {
      description: "We'll notify you when your subscription is ready.",
    });
    setEmail("");
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4">
        <div className="flex items-center gap-4">
          <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors mr-2">
            <Home className="w-5 h-5" />
          </Link>
          <svg viewBox="0 0 111 30" className="h-7 md:h-9 fill-red-600" aria-label="Netflix">
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,27.9552981 93.9057081,27.7188059 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250161,26.3117443 L69.250161,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6251443 L64.2496954,15.3121172 L57.8442216,15.3121172 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6251443 L64.2496954,10.6251443 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561068,26.3117443 L40.6561068,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6875059 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9994645 C26.3126178,10.9994645 29.0625025,10.9994645 30.749836,11.0621796 L30.749836,15.5928391 Z M4.78114163,12.9684432 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315997 L10.562377,-5.68434189e-14 L15.2497543,-5.68434189e-14 L15.2497543,28.971703 C13.4983418,29.2155171 11.9357812,29.4064111 10.0041235,29.5313525 L4.78114163,12.9684432 Z" />
          </svg>
        </div>
        <button className="px-4 py-1.5 bg-red-600 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
          Sign In
        </button>
      </header>

      {/* Hero */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 80%, black 100%), linear-gradient(135deg, #1a0a0a 0%, #0f0f0f 30%, #1a0011 60%, #050505 100%)",
        }}
      >
        <div className="relative z-10 max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl text-zinc-200">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg text-zinc-300">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 bg-black/70 border border-zinc-600 rounded text-white placeholder-zinc-400 focus:outline-none focus:border-white text-base"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 rounded font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="h-2 bg-zinc-800" />

      {/* Feature sections */}
      {features.map((feature, i) => (
        <div key={i} className={`py-16 md:py-20 px-6 md:px-14 border-b-8 border-zinc-800 ${feature.reverse ? "bg-black" : "bg-black"}`}>
          <div className={`max-w-6xl mx-auto flex flex-col ${feature.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">{feature.title}</h2>
              <p className="text-lg md:text-xl text-zinc-300">{feature.subtitle}</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-[120px] md:text-[160px] leading-none drop-shadow-2xl">
                {feature.emoji}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="h-2 bg-zinc-800" />

      {/* FAQ */}
      <div className="py-16 md:py-24 px-6 md:px-14 border-b-8 border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-10 text-center space-y-4">
            <p className="text-lg text-zinc-300">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 bg-black/70 border border-zinc-600 rounded text-white placeholder-zinc-400 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 rounded font-semibold text-lg transition-colors"
              >
                Get Started <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-14 text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto space-y-6">
          <p>Questions? Call <a href="tel:0800-000-000" className="hover:underline">0800-000-000</a></p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              "FAQ", "Help Centre", "Account", "Media Centre",
              "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
              "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
              "Speed Test", "Legal Notices", "Only on Netflix",
            ].map((link) => (
              <a key={link} href="#" className="hover:underline">{link}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-black border border-zinc-600 text-zinc-400 px-3 py-1.5 rounded text-xs">
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
          <p className="text-xs">Netflix Ghana — <Link href="/" className="hover:underline text-red-500">Portfolio Demo</Link> by Edward Gemadzi</p>
        </div>
      </footer>
    </div>
  );
}

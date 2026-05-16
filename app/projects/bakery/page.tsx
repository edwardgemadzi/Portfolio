"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { bakeryProducts, bakeryCategories, type BakeryProduct } from "@/data/bakery";
import { toast } from "sonner";
import { ShoppingCart, Star, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function BakeryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [orderForm, setOrderForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [orderLoading, setOrderLoading] = useState(false);

  const filtered: BakeryProduct[] =
    activeCategory === "All"
      ? bakeryProducts
      : bakeryProducts.filter((p) => p.category === activeCategory);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name || !orderForm.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setOrderLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setOrderLoading(false);
    toast.success("Order enquiry received! 🎉", {
      description: "We'll contact you within 24 hours to confirm your order.",
    });
    setOrderForm({ name: "", email: "", phone: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-4 pt-16"
        style={{
          background: "linear-gradient(135deg, #78350f 0%, #92400e 30%, #b45309 60%, #d97706 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 text-white space-y-5 max-w-2xl">
          <div className="text-6xl">🥐</div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Golden Crust Bakery
          </h1>
          <p className="text-xl text-amber-100">
            Handcrafted with love, baked fresh daily in the heart of Accra
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-800 hover:bg-amber-50 font-semibold gap-2"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShoppingCart className="w-4 h-4" />
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Now
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-amber-100">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Open 7am – 8pm</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Accra Central</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-current" /> 4.9/5 rating</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-amber-50 dark:bg-amber-950/20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-400">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2015, Golden Crust Bakery was born from a simple belief: everyone deserves access to genuinely good bread. We use traditional baking methods combined with locally sourced ingredients to create products that nourish both body and soul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every loaf, every pastry, every cake is made with patience and care by our team of passionate bakers who start their day at 4am so you can enjoy fresh-baked goodness every morning.
            </p>
            <div className="flex gap-8">
              {[{ value: "10+", label: "Years of Baking" }, { value: "50+", label: "Menu Items" }, { value: "500+", label: "Happy Customers Daily" }].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            {[
              { emoji: "🌾", label: "Locally Sourced" },
              { emoji: "🚫", label: "No Preservatives" },
              { emoji: "🔥", label: "Stone Baked" },
              { emoji: "🌱", label: "Vegan Options" },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-xl bg-white dark:bg-card border border-amber-200 dark:border-amber-900">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Menu</h2>
            <p className="text-muted-foreground mt-2">Fresh daily — prices in GHS</p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {bakeryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-amber-100 dark:hover:bg-amber-900/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group p-5 rounded-xl border border-border bg-card hover:border-amber-400/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{product.emoji}</span>
                  {product.popular && (
                    <Badge className="text-xs bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/40 dark:text-amber-400">
                      Popular
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-700 dark:text-amber-400">
                    GHS {product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs border-amber-400 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20"
                    onClick={() => {
                      toast.success(`${product.name} added to order!`, {
                        description: "Fill in the order form below to complete your enquiry.",
                      });
                      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order / Contact form */}
      <section id="order" className="py-16 px-4 bg-amber-50 dark:bg-amber-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-400">Contact & Order</h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Ready to order? Fill in the form and we&apos;ll confirm your order within 24 hours.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "(+233) 30 234 5678" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "hello@goldencrust.gh" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Address", value: "14 Independence Ave, Accra Central" },
                  { icon: <Clock className="w-4 h-4" />, label: "Hours", value: "Mon – Sun, 7:00am – 8:00pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-card border border-amber-200 dark:border-amber-900">
                    <span className="text-amber-600 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleOrder} className="space-y-4 bg-white dark:bg-card p-6 rounded-xl border border-amber-200 dark:border-amber-900">
              <div className="space-y-1.5">
                <Label htmlFor="bname">Full Name *</Label>
                <Input id="bname" placeholder="Your name" value={orderForm.name} onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })} disabled={orderLoading} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bemail">Email *</Label>
                <Input id="bemail" type="email" placeholder="your@email.com" value={orderForm.email} onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} disabled={orderLoading} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bphone">Phone</Label>
                <Input id="bphone" placeholder="(+233) ..." value={orderForm.phone} onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })} disabled={orderLoading} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bnotes">Order Details / Special Requests</Label>
                <Textarea id="bnotes" placeholder="Tell us what you'd like to order, quantities, delivery date..." rows={4} value={orderForm.notes} onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })} disabled={orderLoading} />
              </div>
              <Button
                type="submit"
                disabled={orderLoading}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white gap-2"
              >
                {orderLoading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><ShoppingCart className="w-4 h-4" /> Send Order Enquiry</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

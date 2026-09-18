"use client";

import { useState } from "react";
import Link from "next/link";
import { ChefHat, Instagram, Facebook, Twitter, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-stone-900 text-cream-100 border-t border-navy-400/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="h-6 w-6 text-navy-100" />
              <span className="font-display text-xl">Gusteau&apos;s</span>
            </div>
            <p className="text-sm text-cream-100/70 leading-relaxed">
              96 Rue Louis-Armand, Paris. &ldquo;Anyone can cook&rdquo; — a
              philosophy served nightly since 1962.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="p-2 rounded-full border border-navy-400/30 hover:bg-navy-400/10 hover:border-navy-400 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base mb-4 text-navy-100">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/70">
              <li><Link href="/products" className="hover:text-navy-100 transition-colors">Menu</Link></li>
              <li><Link href="/services" className="hover:text-navy-100 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-navy-100 transition-colors">Our Story</Link></li>
              <li><Link href="/blogs" className="hover:text-navy-100 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-4 text-navy-100">
              Visit
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/70">
              <li>Tue – Sun, 6pm – 11pm</li>
              <li>Closed Mondays</li>
              <li>+33 1 42 60 30 30</li>
              <li>reservations@gusteaus.paris</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base mb-4 text-navy-100">
              The Weekly Ladle
            </h4>
            <p className="text-sm text-cream-100/70 mb-3">
              Recipes, stories, and a seat at the table — straight to your
              inbox.
            </p>
            {subscribed ? (
              <p className="text-sm text-navy-100">
                Merci! You&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 rounded-md bg-stone-800 border border-navy-400/20 px-3 py-2 text-sm placeholder:text-cream-100/40 focus:outline-none focus:ring-1 focus:ring-navy-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="rounded-md bg-navy-400 text-cream-50 px-3 py-2 hover:bg-navy-300 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="divider-navy my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream-100/50">
          <p>&copy; {new Date().getFullYear()} Gusteau&apos;s Bistro. All rights reserved.</p>
          <p>Crafted with love, garlic, and a very talented rat.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Sparkles, UtensilsCrossed } from "lucide-react";
import { useDishes } from "@/context/DishesContext";
import DishCard from "@/components/DishCard";
import SectionHeading from "@/components/SectionHeading";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function HomePage() {
  const { dishes } = useDishes();
  const featured = dishes.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=1920&q=80"
            alt="Confit Byaldi — the ratatouille dish that inspired it all"
            fill
            property
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/80 to-stone-900"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-100/30 bg-navy-100/10 px-4 py-1.5 text-sm text-navy-100 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              96 Rue Louis-Armand, Paris
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream-50 text-balance">
              Anyone can cook
            </h1>
            <p className="mt-6 text-lg text-cream-100/80 leading-relaxed max-w-xl">
              Gusteau&apos;s welcomes you to a table where every dish is cooked
              with total attention — from a humble ratatouille to a masterwork
              of French pastry. Taste the story behind every plate.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                className="group inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
                href={"/products"}
              >
                View the Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                className="inline-flex items-center gap-2 rounded-md border border-navy-100/40 hover:bg-navy-100/10 px-6 py-3.5 font-medium transition-colors"
                href={"/contact"}
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Steam accent */}
        <div className="pointer-events-none absolute bottom-0 right-10 hidden lg:flex gap-2 opacity-60">
          <span
            className="w-1 h-16 rounded-full bg-gradient-to-t from-transparent to-cream-100/40 animate-steam"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="w-1 h-20 rounded-full bg-gradient-to-t from-transparent to-cream-100/40 animate-steam"
            style={{ animationDelay: "0.6s" }}
          />
          <span
            className="w-1 h-12 rounded-full bg-gradient-to-t from-transparent to-cream-100/40 animate-steam"
            style={{ animationDelay: "1.2s" }}
          />
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-cream-100 dark:bg-night-800 border-y border-stone-300/30 dark:border-navy-400/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: ChefHat,
              title: "Since 1962",
              text: "A recipe book passed down through generations.",
            },
            {
              icon: UtensilsCrossed,
              title: "Fresh, Daily",
              text: "Sourced each dawn from the Rue Cler market.",
            },
            {
              icon: Sparkles,
              title: "Cooked with Heart",
              text: "A great artist can come from anywhere.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2"
            >
              <item.icon className="h-6 w-6 text-navy-500 dark:text-navy-400" />
              <h3 className="font-display text-lg text-navy-700 dark:text-navy-50">
                {item.title}
              </h3>
              <p className="text-sm text-navy-500/70 dark:text-navy-100/60 max-w-[200px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured dishes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Chef's Selection"
          title="Signature Dishes"
          subtitle="A handful of plates that define Gusteau's — chosen for the stories they tell as much as the flavors they carry."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-navy-500 dark:text-navy-400 font-medium hover:gap-3 transition-all"
          >
            Explore the full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>



      {/* Reviews */}
      <section className="bg-stone-900 py-20">
        <ReviewCarousel />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-2xl bg-navy-500 px-6 py-16 sm:px-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.25),_transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl text-cream-50 text-balance">
              A table is waiting for you.
            </h2>
            <p className="mt-4 text-cream-50/80 max-w-lg mx-auto">
              Whether it&apos;s a quiet dinner for two or a private feast for
              twenty, Gusteau&apos;s is ready to host your next great meal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-cream-50 text-navy-500 px-6 py-3.5 font-medium hover:bg-navy-100 transition-colors"
              >
                Book a Table
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-cream-50/40 text-cream-50 px-6 py-3.5 font-medium hover:bg-cream-50/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

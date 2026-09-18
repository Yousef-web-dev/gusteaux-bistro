"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Users,
  ChefHat,
  CalendarHeart,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    id: "private-dining",
    icon: CalendarHeart,
    title: "Private Dining",
    price: "From $95 / guest",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    description:
      "Reserve the candlelit back room of Gusteau's for an intimate evening — the same room where a certain critic once had his world turned upside down by a humble vegetable dish.",
    features: [
      "Private room for up to 14 guests",
      "Five-course tasting menu, chef's choice",
      "Dedicated sommelier wine pairing",
      "Personalized menu cards",
    ],
  },
  {
    id: "chef-at-home",
    icon: ChefHat,
    title: "Chef-at-Home",
    price: "From $220 / event",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
    description:
      "Bring the Gusteau's kitchen brigade to your own table. One of our chefs arrives with ingredients in hand and cooks a multi-course French meal in your home, live.",
    features: [
      "In-home multi-course tasting menu",
      "Full grocery sourcing included",
      "Kitchen cleaned, spotless, after service",
      "Optional cooking-lesson format",
    ],
  },
  {
    id: "catering",
    icon: Users,
    title: "Full-Scale Catering",
    price: "From $48 / guest",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80",
    description:
      "From a rooftop engagement party to a corporate gala, our catering team delivers Gusteau's signature plates at any scale — without losing an ounce of the bistro's soul.",
    features: [
      "Custom menus for 20 to 500 guests",
      "Passed hors d'oeuvres or plated service",
      "Full staffing, china, and linens available",
      "Vegetarian & allergen-friendly options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-stone-900 py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&q=80"
            alt="Bistro kitchen preparation"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/80 to-stone-900" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-100/30 bg-navy-100/10 px-4 py-1.5 text-sm text-navy-100 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Beyond the Bistro
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-cream-50 text-balance">
            Bring Gusteau&apos;s to Your Occasion
          </h1>
          <p className="mt-5 text-cream-100/80 max-w-2xl mx-auto leading-relaxed">
            Whether hosted in our private room, in your own kitchen, or at
            your next great gathering — our brigade cooks with the same
            attention wherever the stove is lit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Three Ways to Gather"
          subtitle="Each package is built around Gusteau's core belief: good food is a form of hospitality, and hospitality deserves total attention."
        />

        <div className="flex flex-col gap-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-navy-500 dark:text-navy-400 mb-3">
                  <service.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{service.price}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-navy-700 dark:text-navy-50 mb-4">
                  {service.title}
                </h3>
                <p className="text-navy-500/80 dark:text-navy-100/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-navy-600 dark:text-navy-50/85">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-sage-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-5 py-3 font-medium transition-colors"
                >
                  Inquire Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

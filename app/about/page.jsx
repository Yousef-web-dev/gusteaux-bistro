"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChefHat, Heart, Sparkles, Play, Film } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PhotoGallery from "@/components/PhotoGallery";

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    caption: "The dining room, set for evening service",
  },
  {
    src: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=1200&q=80",
    caption: "Confit Byaldi, plated tableside",
  },
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    caption: "Mise en place before the doors open",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
    caption: "The brigade at work in the kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    caption: "Fresh herbs from the morning market",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80",
    caption: "Plating the evening's tasting menu",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=80",
    caption: "A quiet corner table by candlelight",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    caption: "Dessert service, finished tableside",
  },
];

const timeline = [
  {
    year: "1962",
    title: "Gusteau Opens His Doors",
    text: "Auguste Gusteau founds a modest bistro on Rue Louis-Armand, built on one radical idea: great taste has nothing to do with where you come from.",
  },
  {
    year: "1998",
    title: "Five Stars, One Motto",
    text: "'Anyone Can Cook' becomes the title of Gusteau's bestselling cookbook — and the guiding philosophy for every cook who passes through his kitchen.",
  },
  {
    year: "2007",
    title: "A Critic Returns",
    text: "After years away, the city's most feared food critic returns to taste a simple ratatouille — and leaves humbled, reminded why he fell in love with food in the first place.",
  },
  {
    year: "Today",
    title: "The Kitchen Lives On",
    text: "Under new leadership, Gusteau's continues to serve the dishes that started it all, prepared with the same reverence for ingredients, technique, and heart.",
  },
];

const figures = [
  {
    name: "Chef Auguste Gusteau",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&q=80",
    bio: "A chef who believed cooking was a democratic art. His motto — anyone can cook — was never about ease. It was a promise that talent respects no boundary.",
  },
  {
    name: "Remy",
    role: "The Unseen Genius",
    image:
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
    bio: "A brilliant palate with an unlikely origin story. Remy's instinct for pairing flavor — sweet against sharp, herb against fat — reshaped the menu from the shadows of the kitchen.",
  },
  {
    name: "Colette Tatou",
    role: "Head Chef",
    image:
      "https://images.unsplash.com/photo-1731576089270-9e806089a40f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZiUyMGdpcmwufGVufDB8fDB8fHww",
    bio: "Sharp, disciplined, and fiercely protective of her kitchen's standards. Colette's rule is simple: keep your station clean, and something wonderful will happen.",
  },
  {
    name: "Linguini",
    role: "The Newest Commis",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Gawky, earnest, and utterly out of his depth on his first night — yet somehow the dishes leaving his station kept turning out extraordinary. Nobody could quite explain why.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1920&q=80"
            alt="Rustic Parisian kitchen"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/85 to-stone-900" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-100/30 bg-navy-100/10 px-4 py-1.5 text-sm text-navy-100 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-cream-50 text-balance">
            A Kitchen Built on an Unlikely Belief
          </h1>
          <p className="mt-5 text-cream-100/80 max-w-2xl mx-auto leading-relaxed">
            Every great dish at Gusteau&apos;s carries a little of the same
            conviction: that talent has no address, and that the finest
            cooking begins with total attention to the plate in front of you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 px-8 py-12 sm:px-14 sm:py-16 text-center"
        >
          <Quote className="h-8 w-8 text-navy-500 dark:text-navy-100 mx-auto mb-5 opacity-80" />
          <p className="font-display text-2xl sm:text-3xl text-navy-700 dark:text-navy-50 leading-relaxed text-balance">
            Good food is like music you can taste, color you can smell. There
            is excellence all around you. You need only be aware to stop and
            savor it.
          </p>
          <p className="mt-6 text-sm text-navy-500 dark:text-navy-400 font-medium">
            — Chef Auguste Gusteau
          </p>
        </motion.div>
      </section>

      {/* Figures */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <SectionHeading
          eyebrow="The People"
          title="Four Minds, One Kitchen"
          subtitle="Gusteau's philosophy was never carried by one person alone. It passed from a founder's conviction to a critic's instinct to a chef's discipline."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {figures.map((figure, i) => (
            <motion.div
              key={figure.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl overflow-hidden bg-cream-50 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20"
            >
              <div className="relative aspect-square">
                <Image src={figure.image} alt={figure.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-navy-700 dark:text-navy-50">
                  {figure.name}
                </h3>
                <p className="text-sm text-navy-500 dark:text-navy-400 mb-3">
                  {figure.role}
                </p>
                <p className="text-sm text-navy-500/80 dark:text-navy-100/70 leading-relaxed">
                  {figure.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <SectionHeading
          eyebrow="Step Inside"
          title="A Look Behind the Pass"
          subtitle="A short glimpse into the rhythm of a Gusteau's evening service — from the first onions hitting the pan to the last plate leaving the kitchen."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-soft border border-stone-300/40 dark:border-navy-400/20 bg-stone-900"
        >
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            poster="https://images.unsplash.com/photo-1629407119384-d42320c3e576?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZSUyMGNvb2tpbmclMjBpbiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D"
          >
            <source
              src="https://assets.mixkit.co/videos/47555/47555-720.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 bg-stone-900/70 text-navy-100 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Film className="h-3.5 w-3.5" />
            Kitchen Reel — 0:24
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-100 dark:bg-night-800 border-y border-stone-300/30 dark:border-navy-400/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Visual Tour"
            title="Moments From the Dining Room"
            subtitle="Click any photo to step through the gallery — from the market to the plate to the table."
          />
          <PhotoGallery photos={galleryPhotos} />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Short History"
            title="Sixty Years at the Same Stove"
          />
          <div className="relative pl-8 border-l-2 border-navy-500/30 dark:border-navy-100/30 flex flex-col gap-10">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-navy-500 dark:bg-navy-500 ring-4 ring-cream-100 dark:ring-night-800" />
                <span className="text-sm font-medium text-navy-500 dark:text-navy-400">
                  {event.year}
                </span>
                <h3 className="font-display text-xl text-navy-700 dark:text-navy-50 mt-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-navy-500/80 dark:text-navy-100/70 leading-relaxed max-w-xl">
                  {event.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ChefHat className="h-8 w-8 text-navy-500 dark:text-navy-400 mx-auto mb-4" />
        <h2 className="font-display text-3xl text-navy-700 dark:text-navy-50 mb-4">
          Our Philosophy, In One Line
        </h2>
        <p className="text-navy-500/80 dark:text-navy-100/70 leading-relaxed flex items-center justify-center gap-2">
          <Heart className="h-4 w-4 text-navy-500 dark:text-navy-400 shrink-0" />
          Not everyone can become a great artist — but a great artist can
          come from anywhere.
        </p>
      </section>
    </div>
  );
}

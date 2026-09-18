"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import SectionHeading from "@/components/SectionHeading";

export default function BlogsPage() {
  const [featured, ...rest] = blogs;

  return (
    <div>
      <section className="bg-stone-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-navy-100">From the Kitchen Journal</span>
          <h1 className="font-display text-4xl sm:text-5xl text-cream-50 mt-3 text-balance">
            Stories, Recipes & Technique
          </h1>
          <p className="mt-4 text-cream-100/75 max-w-xl mx-auto leading-relaxed">
            Notes from the Gusteau&apos;s brigade on Parisian cooking, market
            mornings, and the philosophy behind every plate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 mb-16 cursor-pointer"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 lg:p-10">
            <span className="inline-block text-xs font-medium text-navy-500 dark:text-navy-400 bg-navy-500/10 dark:bg-navy-400/10 px-3 py-1 rounded-full mb-4">
              {featured.tag}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-700 dark:text-navy-50 mb-3 group-hover:text-navy-500 dark:group-hover:text-navy-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-navy-500/80 dark:text-navy-100/70 leading-relaxed mb-5">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-navy-500/60 dark:text-navy-100/50">
              <span>{featured.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
            </div>
          </div>
        </motion.article>

        <SectionHeading align="left" eyebrow="More Reading" title="Recent Posts" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex flex-col rounded-xl overflow-hidden bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block w-fit text-xs font-medium text-navy-500 dark:text-navy-400 bg-navy-500/10 dark:bg-navy-400/10 px-2.5 py-1 rounded-full mb-3">
                  {post.tag}
                </span>
                <h3 className="font-display text-lg text-navy-700 dark:text-navy-50 mb-2 group-hover:text-navy-500 dark:group-hover:text-navy-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-navy-500/75 dark:text-navy-100/65 leading-relaxed mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-navy-500/55 dark:text-navy-100/45 pt-3 border-t border-stone-300/30 dark:border-navy-400/20">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    {post.readTime}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

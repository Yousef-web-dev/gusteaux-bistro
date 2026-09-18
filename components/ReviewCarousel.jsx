"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = reviews[index];

  return (
    <div className="relative max-w-3xl mx-auto text-center px-6">
      <Quote className="h-9 w-9 text-navy-100 mx-auto mb-4 opacity-80" />
      <div className="min-h-[160px] sm:min-h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-display text-xl sm:text-2xl text-cream-50 leading-relaxed text-balance">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-5 text-sm text-navy-100">
              {current.author} <span className="text-cream-50/50">— {current.title}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="p-2 rounded-full border border-navy-100/30 hover:bg-navy-100/10 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-navy-100" />
        </button>
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-navy-100" : "w-1.5 bg-navy-100/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next review"
          className="p-2 rounded-full border border-navy-100/30 hover:bg-navy-100/10 transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-navy-100" />
        </button>
      </div>
    </div>
  );
}

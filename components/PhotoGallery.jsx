"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export default function PhotoGallery({ photos }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % photos.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden rounded-xl ${
              i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
              <Expand className="h-5 w-5 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent text-cream-50 text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
              {photo.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-5 right-5 p-2.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 p-2.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].caption}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent text-cream-50 text-sm px-5 py-4">
                {photos[activeIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 p-2.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <span className="absolute bottom-5 text-xs text-cream-50/60">
              {activeIndex + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

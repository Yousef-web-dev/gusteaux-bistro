"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Star, Clock, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import DishImage from "@/components/DishImage";

export default function DishCard({ dish, index = 0 }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(dish.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative flex flex-col rounded-lg overflow-hidden bg-cream-50 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 hover:border-navy-500/60 dark:hover:border-navy-400/60 transition-colors"
    >
      <Link href={`/products/${dish.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <DishImage
            src={dish.image}
            alt={dish.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-3 left-3 bg-stone-900/80 text-navy-100 text-[11px] tracking-wide px-2 py-1 rounded-full backdrop-blur-sm">
            {dish.category}
          </span>
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(dish)}
        aria-label="Toggle wishlist"
        aria-pressed={wishlisted}
        className="absolute top-3 right-3 p-2 rounded-full bg-cream-50/90 dark:bg-night-900/80 shadow-soft hover:scale-110 transition-transform"
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            wishlisted
              ? "fill-navy-500 text-navy-500"
              : "text-navy-500 dark:text-navy-100"
          }`}
        />
      </button>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/products/${dish.id}`}>
            <h3 className="font-display text-lg leading-snug text-navy-700 dark:text-navy-50 hover:text-navy-500 dark:hover:text-navy-400 transition-colors">
              {dish.name}
            </h3>
          </Link>
          <span className="shrink-0 font-display text-lg text-navy-500 dark:text-navy-400">
            ${dish.price}
          </span>
        </div>

        <p className="text-sm text-navy-500/80 dark:text-navy-100/70 line-clamp-2">
          {dish.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-navy-500/70 dark:text-navy-100/60">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-navy-500 text-navy-500 dark:fill-navy-100 dark:text-navy-100" />
            {dish.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {dish.prepTime}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`mt-3 flex items-center justify-center gap-1.5 rounded-md text-sm font-medium py-2.5 transition-colors ${
            added
              ? "bg-sage-500 text-cream-50 cursor-default"
              : "bg-navy-500 hover:bg-navy-400 text-cream-50"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              Added!
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

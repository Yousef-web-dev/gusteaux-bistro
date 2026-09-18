"use client";

import DishImage from "@/components/DishImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <Heart className="h-8 w-8 text-navy-500 dark:text-navy-400 mx-auto mb-3" />
        <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50">
          Your Wishlist
        </h1>
        <p className="mt-3 text-navy-500/75 dark:text-navy-100/65">
          {wishlist.length > 0
            ? "Every dish you've set aside for another visit."
            : "Nothing saved just yet — start browsing the menu."}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
          >
            Browse the Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {wishlist.map((dish) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-4"
              >
                <Link href={`/products/${dish.id}`} className="relative h-24 w-full sm:w-24 shrink-0 rounded-lg overflow-hidden">
                  <DishImage src={dish.image} alt={dish.name} className="object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${dish.id}`}>
                    <h3 className="font-display text-lg text-navy-700 dark:text-navy-50 hover:text-navy-500 dark:hover:text-navy-400 transition-colors">
                      {dish.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-navy-500/70 dark:text-navy-100/60 line-clamp-1">
                    {dish.shortDescription}
                  </p>
                  <span className="font-display text-navy-500 dark:text-navy-400 mt-1 block">
                    ${dish.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 self-stretch sm:self-auto">
                  <button
                    onClick={() => addToCart(dish)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-4 py-2.5 text-sm font-medium transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add
                  </button>
                  <button
                    onClick={() => removeFromWishlist(dish.id)}
                    aria-label="Remove from wishlist"
                    className="p-2.5 rounded-md border border-stone-300 dark:border-navy-400/30 text-navy-500 dark:text-navy-100 hover:bg-navy-500/10 hover:text-navy-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Users,
  Heart,
  ShoppingBag,
  ChevronLeft,
  BookOpen,
  Pencil,
  Check,
} from "lucide-react";
import { useDishes } from "@/context/DishesContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import DishCard from "@/components/DishCard";
import SectionHeading from "@/components/SectionHeading";
import DishImage from "@/components/DishImage";

export default function ProductDetailPage() {
  const params = useParams();
  const { getDishById, getRelatedDishes } = useDishes();
  const dish = getDishById(params.id);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { isAdmin } = useAuth();
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!dish) {
    notFound();
  }

  const related = getRelatedDishes(dish.id, 3);
  const wishlisted = isWishlisted(dish.id);

  const handleAddToCart = () => {
    addToCart(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-navy-500/70 dark:text-navy-100/60 hover:text-navy-500 dark:hover:text-navy-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Menu
        </Link>

        {isAdmin && (
          <Link
            href={`/admin/dishes/${dish.id}/edit`}
            className="inline-flex items-center gap-1.5 rounded-md border border-navy-500/40 dark:border-navy-400/40 text-navy-500 dark:text-navy-400 hover:bg-navy-500/10 dark:hover:bg-navy-400/10 px-3.5 py-2 text-sm font-medium transition-colors"
          >
            <Pencil className="h-3.5 w-3.5" />
            Edit This Dish
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft mb-4">
            <DishImage
              src={dish.gallery[activeImage] || dish.image}
              alt={dish.name}
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-stone-900/80 text-navy-100 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
              {dish.category}
            </span>
          </div>
          {dish.gallery.length > 1 && (
            <div className="flex gap-3">
              {dish.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-navy-500 dark:border-navy-400"
                      : "border-transparent"
                  }`}
                >
                  <DishImage src={img} alt={`${dish.name} photo ${i + 1}`} className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50 text-balance">
              {dish.name}
            </h1>
            <span className="font-display text-3xl text-navy-500 dark:text-navy-400 shrink-0">
              ${dish.price}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-navy-500/75 dark:text-navy-100/65">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-navy-500 text-navy-500 dark:fill-navy-100 dark:text-navy-100" />
              {dish.rating} rating
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {dish.prepTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {dish.serves}
            </span>
          </div>

          <p className="mt-6 text-navy-500/85 dark:text-navy-100/75 leading-relaxed">
            {dish.description}
          </p>

          <div className="mt-8 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-5 flex gap-3">
            <BookOpen className="h-5 w-5 text-navy-500 dark:text-navy-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base text-navy-700 dark:text-navy-50 mb-1">
                Backstory
              </h3>
              <p className="text-sm text-navy-500/75 dark:text-navy-100/65 leading-relaxed">
                {dish.backstory}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-base text-navy-700 dark:text-navy-50 mb-3">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs px-3 py-1.5 rounded-full bg-sage-500/10 text-sage-500 dark:text-sage-400 border border-sage-500/20"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-medium transition-colors ${
                added
                  ? "bg-sage-500 text-cream-50 cursor-default"
                  : "bg-navy-500 hover:bg-navy-400 text-cream-50"
              }`}
            >
              {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
              {added ? "Added!" : "Add to Cart"}
            </button>
            <button
              onClick={() => toggleWishlist(dish)}
              aria-pressed={wishlisted}
              className={`inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3.5 font-medium transition-colors ${
                wishlisted
                  ? "border-navy-500 bg-navy-500/10 text-navy-500 dark:text-navy-400 dark:border-navy-400"
                  : "border-stone-300 dark:border-navy-400/30 text-navy-600 dark:text-navy-50 hover:bg-stone-100 dark:hover:bg-night-700"
              }`}
            >
              <Heart className={`h-4 w-4 ${wishlisted ? "fill-current" : ""}`} />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Reviews */}
      {dish.reviews && dish.reviews.length > 0 && (
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="From the Dining Room"
            title="Customer Reviews"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dish.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < review.rating
                        ? "fill-navy-500 text-navy-500 dark:fill-navy-100 dark:text-navy-100"
                        : "text-navy-100 dark:text-navy-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-navy-500/85 dark:text-navy-100/75 leading-relaxed mb-3">
                &ldquo;{review.comment}&rdquo;
              </p>
              <p className="text-sm font-medium text-navy-700 dark:text-navy-50">
                {review.name}
              </p>
            </motion.div>
          ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <SectionHeading
            align="left"
            eyebrow="Pairs Well With"
            title="You Might Also Like"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((d, i) => (
              <DishCard key={d.id} dish={d} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

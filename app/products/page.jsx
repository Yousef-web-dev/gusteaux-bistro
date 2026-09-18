"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, LayoutDashboard } from "lucide-react";
import { useDishes } from "@/context/DishesContext";
import { useAuth } from "@/context/AuthContext";
import DishCard from "@/components/DishCard";

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
}

function ProductsPageContent() {
  const { dishes, categories } = useDishes();
  const { isAdmin } = useAuth();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filtered = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" || dish.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        dish.name.toLowerCase().includes(query.toLowerCase()) ||
        dish.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [dishes, activeCategory, query]);

  return (
    <div>
      <section className="bg-stone-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-navy-100">The Full Menu</span>
          <h1 className="font-display text-4xl sm:text-5xl text-cream-50 mt-3 text-balance">
            Every Plate, One Kitchen
          </h1>
          <p className="mt-4 text-cream-100/75 max-w-xl mx-auto leading-relaxed">
            From humble soups to signature Ratatouille, search or filter to
            find tonight&apos;s craving.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-500/60 dark:text-navy-100/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu..."
              className="w-full rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-800 pl-10 pr-9 py-2.5 text-sm text-navy-700 dark:text-navy-50 placeholder:text-navy-500/50 dark:placeholder:text-cream-200/40 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 transition-shadow"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-500/60 dark:text-navy-100/50 hover:text-navy-500 dark:hover:text-navy-400"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="sm:hidden inline-flex items-center gap-2 self-start rounded-md border border-stone-300 dark:border-navy-400/30 px-4 py-2.5 text-sm text-navy-600 dark:text-navy-50"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Categories
          </button>

          <div className="hidden sm:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-navy-500 text-cream-50"
                    : "bg-cream-100 dark:bg-night-800 text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden overflow-hidden mb-6"
            >
              <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setFiltersOpen(false);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-navy-500 text-cream-50"
                        : "bg-cream-100 dark:bg-night-800 text-navy-500 dark:text-navy-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-navy-500/60 dark:text-navy-100/50">
            {filtered.length} {filtered.length === 1 ? "dish" : "dishes"} found
          </p>
          {isAdmin && (
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 rounded-md border border-navy-500/40 dark:border-navy-400/40 text-navy-500 dark:text-navy-400 hover:bg-navy-500/10 dark:hover:bg-navy-400/10 px-3.5 py-2 text-sm font-medium transition-colors"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              Manage Dishes
            </Link>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dish, i) => (
              <DishCard key={dish.id} dish={dish} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-navy-700 dark:text-navy-50 mb-2">
              Nothing on the pass matches that.
            </p>
            <p className="text-navy-500/70 dark:text-navy-100/60">
              Try another search term or category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Pencil,
  Trash2,
  ShieldAlert,
  ChefHat,
  Search,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useDishes } from "@/context/DishesContext";
import DishImage from "@/components/DishImage";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { user, isAdmin, ready } = useAuth();
  const { dishes, deleteDish } = useDishes();
  const [query, setQuery] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user) {
    return <div className="py-32 text-center text-navy-500/60 dark:text-navy-100/50">Loading…</div>;
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShieldAlert className="h-10 w-10 text-navy-500 dark:text-navy-400 mx-auto mb-5" />
        <h1 className="font-display text-3xl text-navy-700 dark:text-navy-50 mb-3">
          Kitchen Staff Only
        </h1>
        <p className="text-navy-500/75 dark:text-navy-100/65 mb-8">
          Dish management is reserved for restaurant staff accounts. Sign up
          with a &ldquo;Restaurant Staff&rdquo; account to access this page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
        >
          Back Home
        </Link>
      </div>
    );
  }

  const filtered = dishes.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-navy-500 dark:text-navy-400 mb-2">
            <ChefHat className="h-5 w-5" />
            <span className="text-sm font-medium">Kitchen Dashboard</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50">
            Manage the Menu
          </h1>
          <p className="text-sm text-navy-500/70 dark:text-navy-100/60 mt-2">
            {dishes.length} dishes currently on the menu
          </p>
        </div>
        <Link
          href="/admin/dishes/new"
          className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-5 py-3 font-medium transition-colors self-start"
        >
          <Plus className="h-4 w-4" />
          Add New Dish
        </Link>
      </div>

      <div className="relative w-full sm:max-w-sm mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-500/60 dark:text-navy-100/50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes..."
          className="w-full rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-800 pl-10 pr-4 py-2.5 text-sm text-navy-700 dark:text-navy-50 placeholder:text-navy-500/50 dark:placeholder:text-cream-200/40 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400"
        />
      </div>

      <div className="rounded-xl border border-stone-300/40 dark:border-navy-400/20 overflow-hidden">
        <div className="hidden sm:grid grid-cols-[80px_1fr_140px_100px_140px] gap-4 px-5 py-3 bg-cream-100 dark:bg-night-800 text-xs font-medium text-navy-500/60 dark:text-navy-100/50 uppercase tracking-wide">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-right">Actions</span>
        </div>
        <AnimatePresence>
          {filtered.map((dish) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr_140px_100px_140px] gap-4 items-center px-5 py-4 border-t border-stone-300/30 dark:border-navy-400/20 bg-cream-50 dark:bg-night-900"
            >
              <div className="relative h-14 w-14 rounded-lg overflow-hidden">
                <DishImage src={dish.image} alt={dish.name} className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-base text-navy-700 dark:text-navy-50 truncate">
                  {dish.name}
                </p>
                <p className="text-xs text-navy-500/60 dark:text-navy-100/50 truncate sm:hidden">
                  {dish.category} · ${dish.price}
                </p>
              </div>
              <span className="hidden sm:block text-sm text-navy-500/75 dark:text-navy-100/65">
                {dish.category}
              </span>
              <span className="hidden sm:block text-sm font-medium text-navy-700 dark:text-navy-50">
                ${dish.price}
              </span>
              <div className="col-span-2 sm:col-span-1 flex justify-start sm:justify-end gap-2 mt-2 sm:mt-0">
                <Link
                  href={`/admin/dishes/${dish.id}/edit`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 dark:border-navy-400/30 px-3 py-2 text-xs font-medium text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </Link>
                {confirmId === dish.id ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        deleteDish(dish.id);
                        setConfirmId(null);
                      }}
                      className="rounded-md bg-navy-500 text-cream-50 px-3 py-2 text-xs font-medium"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setConfirmId(null)}
                      className="rounded-md border border-stone-300 dark:border-navy-400/30 px-3 py-2 text-xs font-medium text-navy-500 dark:text-navy-100"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmId(dish.id)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 dark:border-navy-400/30 px-3 py-2 text-xs font-medium text-navy-500 hover:bg-navy-500/10 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <p className="text-center py-12 text-navy-500/60 dark:text-navy-100/50">
            No dishes match that search.
          </p>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ShieldAlert } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useDishes } from "@/context/DishesContext";
import DishForm from "@/components/DishForm";

export default function NewDishPage() {
  const router = useRouter();
  const { user, isAdmin, ready } = useAuth();
  const { addDish } = useDishes();

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
        <p className="text-navy-500/75 dark:text-navy-100/65">
          You need a restaurant staff account to add dishes.
        </p>
      </div>
    );
  }

  const handleSubmit = (data) => {
    const dish = addDish(data);
    router.push(`/products/${dish.id}`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 text-sm text-navy-500/70 dark:text-navy-100/60 hover:text-navy-500 dark:hover:text-navy-400 mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>
      <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50 mb-10">
        Add a New Dish
      </h1>
      <DishForm onSubmit={handleSubmit} submitLabel="Publish Dish" />
    </div>
  );
}

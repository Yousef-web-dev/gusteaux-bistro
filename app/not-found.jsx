"use client";

import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-32 text-center">
      <ChefHat className="h-10 w-10 text-navy-500 dark:text-navy-400 mx-auto mb-5" />
      <h1 className="font-display text-4xl text-navy-700 dark:text-navy-50 mb-3">
        This Dish Isn&apos;t on the Menu
      </h1>
      <p className="text-navy-500/75 dark:text-navy-100/65 mb-8">
        The page you&apos;re looking for must have wandered off to the
        pantry. Let&apos;s get you back to the table.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

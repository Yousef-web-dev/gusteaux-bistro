"use client";

import { Minus, Plus } from "lucide-react";

export default function QuantityStepper({ qty, onIncrement, onDecrement, size = "md" }) {
  const dims = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <div className="inline-flex items-center rounded-md border border-stone-300 dark:border-navy-400/30 overflow-hidden">
      <button
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className={`${dims} flex items-center justify-center text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors`}
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-9 text-center text-sm font-medium text-navy-700 dark:text-navy-50">
        {qty}
      </span>
      <button
        onClick={onIncrement}
        aria-label="Increase quantity"
        className={`${dims} flex items-center justify-center text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors`}
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

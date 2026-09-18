"use client";

import DishImage from "@/components/DishImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantityStepper from "@/components/QuantityStepper";

const DELIVERY_FEE = 6;
const TAX_RATE = 0.08;

export default function CartPage() {
  const { cart, increment, decrement, removeFromCart, subtotal } = useCart();

  const tax = subtotal * TAX_RATE;
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + tax + delivery;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <ShoppingBag className="h-8 w-8 text-navy-500 dark:text-navy-400 mx-auto mb-3" />
        <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50">
          Your Cart
        </h1>
        <p className="mt-3 text-navy-500/75 dark:text-navy-100/65">
          {cart.length > 0
            ? "Review your order before checkout."
            : "Your cart is empty — the kitchen awaits."}
        </p>
      </div>

      {cart.length === 0 ? (
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-4"
                >
                  <Link href={`/products/${item.id}`} className="relative h-24 w-full sm:w-24 shrink-0 rounded-lg overflow-hidden">
                    <DishImage src={item.image} alt={item.name} className="object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="font-display text-lg text-navy-700 dark:text-navy-50 hover:text-navy-500 dark:hover:text-navy-400 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <span className="text-sm text-navy-500/70 dark:text-navy-100/60">
                      ${item.price} each
                    </span>
                  </div>
                  <div className="flex items-center gap-4 self-stretch sm:self-auto">
                    <QuantityStepper
                      qty={item.qty}
                      onIncrement={() => increment(item.id)}
                      onDecrement={() => decrement(item.id)}
                    />
                    <span className="font-display text-navy-500 dark:text-navy-400 w-14 text-right">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      className="p-2 rounded-md text-navy-500 dark:text-navy-100 hover:bg-navy-500/10 hover:text-navy-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6">
              <h3 className="font-display text-xl text-navy-700 dark:text-navy-50 mb-5">
                Order Summary
              </h3>
              <div className="flex flex-col gap-3 text-sm text-navy-500/85 dark:text-navy-100/75">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="divider-navy my-1" />
                <div className="flex justify-between font-display text-lg text-navy-700 dark:text-navy-50">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

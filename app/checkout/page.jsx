"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CreditCard,
  PartyPopper,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const steps = ["Delivery", "Payment", "Review"];
const TAX_RATE = 0.08;
const DELIVERY_FEE = 6;

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const tax = subtotal * TAX_RATE;
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + tax + delivery;

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <PartyPopper className="h-12 w-12 text-navy-500 dark:text-navy-100 mx-auto mb-5" />
          <h1 className="font-display text-3xl text-navy-700 dark:text-navy-50 mb-3">
            Your Table is Set
          </h1>
          <p className="text-navy-500/75 dark:text-navy-100/65 mb-8 leading-relaxed">
            Merci! Your order has been sent to the kitchen brigade. A
            confirmation will arrive in your inbox shortly.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
          >
            Back to the Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-display text-3xl text-navy-700 dark:text-navy-50 mb-3">
          Your cart is empty
        </h1>
        <p className="text-navy-500/75 dark:text-navy-100/65 mb-8">
          Add a dish or two before heading to checkout.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors"
        >
          Browse the Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50 text-center mb-10">
        Checkout
      </h1>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  i < step
                    ? "bg-sage-500 text-cream-50"
                    : i === step
                    ? "bg-navy-500 text-cream-50"
                    : "bg-cream-100 dark:bg-night-800 text-navy-500/50 dark:text-navy-100/40 border border-stone-300 dark:border-navy-400/20"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className="text-xs text-navy-500/70 dark:text-navy-100/60 hidden sm:block">
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-[2px] w-8 sm:w-16 ${
                  i < step ? "bg-sage-500" : "bg-stone-300 dark:bg-night-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <form onSubmit={handlePlaceOrder} className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="delivery"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="h-5 w-5 text-navy-500 dark:text-navy-400" />
                  <h2 className="font-display text-xl text-navy-700 dark:text-navy-50">
                    Delivery Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" value={form.name} onChange={update("name")} required />
                  <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
                  <Field label="Address" value={form.address} onChange={update("address")} required className="sm:col-span-2" />
                  <Field label="City" value={form.city} onChange={update("city")} required />
                  <Field label="ZIP Code" value={form.zip} onChange={update("zip")} required />
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="h-5 w-5 text-navy-500 dark:text-navy-400" />
                  <h2 className="font-display text-xl text-navy-700 dark:text-navy-50">
                    Payment Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Name on Card" value={form.cardName} onChange={update("cardName")} required className="sm:col-span-2" />
                  <Field label="Card Number" value={form.cardNumber} onChange={update("cardNumber")} placeholder="1234 5678 9012 3456" required className="sm:col-span-2" />
                  <Field label="Expiry Date" value={form.expiry} onChange={update("expiry")} placeholder="MM/YY" required />
                  <Field label="CVV" value={form.cvv} onChange={update("cvv")} placeholder="123" required />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6 sm:p-8"
              >
                <h2 className="font-display text-xl text-navy-700 dark:text-navy-50 mb-6">
                  Review Your Order
                </h2>
                <div className="flex flex-col gap-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-navy-500/85 dark:text-navy-100/75">
                      <span>{item.name} x{item.qty}</span>
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="divider-navy mb-4" />
                <p className="text-sm text-navy-500/75 dark:text-navy-100/65 mb-2">
                  Delivering to: <span className="text-navy-700 dark:text-navy-50">{form.address || "—"}, {form.city || "—"} {form.zip || ""}</span>
                </p>
                <p className="text-sm text-navy-500/75 dark:text-navy-100/65">
                  Paying with card ending in{" "}
                  <span className="text-navy-700 dark:text-navy-50">
                    {form.cardNumber ? form.cardNumber.slice(-4) : "----"}
                  </span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-md px-5 py-3 text-sm font-medium text-navy-500 dark:text-navy-100 border border-stone-300 dark:border-navy-400/30 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-1.5 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3 text-sm font-medium transition-colors"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-md bg-sage-500 hover:bg-sage-400 text-cream-50 px-6 py-3 text-sm font-medium transition-colors"
              >
                Place Order
                <Check className="h-4 w-4" />
              </button>
            )}
          </div>
        </form>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-6">
            <h3 className="font-display text-xl text-navy-700 dark:text-navy-50 mb-5">
              Order Total
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
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder, className = "" }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="text-navy-500 dark:text-navy-100/80 font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 transition-shadow"
      />
    </label>
  );
}

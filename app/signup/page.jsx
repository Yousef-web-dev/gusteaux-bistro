"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChefHat,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    else if (form.password.length < 6) next.password = "Use at least 6 characters.";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords do not match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;
    const result = signup(form);
    if (!result.success) {
      setFormError(result.error);
      return;
    }
    router.push("/");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 p-8 sm:p-10"
      >
        <div className="text-center mb-8">
          <ChefHat className="h-9 w-9 text-navy-500 dark:text-navy-400 mx-auto mb-3" />
          <h1 className="font-display text-3xl text-navy-700 dark:text-navy-50">
            Join Gusteau&apos;s
          </h1>
          <p className="text-sm text-navy-500/70 dark:text-navy-100/60 mt-2">
            Create an account to save favorites and track orders.
          </p>
        </div>

        {formError && (
          <div className="flex items-center gap-2 rounded-md bg-navy-500/10 border border-navy-500/30 text-navy-500 dark:text-navy-400 text-sm px-4 py-3 mb-6">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field
            label="Full Name"
            icon={User}
            value={form.name}
            onChange={update("name")}
            error={errors.name}
            placeholder="Colette Tatou"
          />
          <Field
            label="Email"
            icon={Mail}
            type="email"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
            placeholder="you@email.com"
          />
          <div className="relative">
            <Field
              label="Password"
              icon={Lock}
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={update("password")}
              error={errors.password}
              placeholder="At least 6 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3.5 top-[38px] text-navy-500/50 dark:text-navy-100/40 hover:text-navy-700 dark:hover:text-navy-50"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <Field
            label="Confirm Password"
            icon={Lock}
            type={showPassword ? "text" : "password"}
            value={form.confirmPassword}
            onChange={update("confirmPassword")}
            error={errors.confirmPassword}
            placeholder="Re-enter your password"
          />

          <fieldset>
            <legend className="text-sm text-navy-500 dark:text-navy-100/80 font-medium mb-2">
              Account Type
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "customer", label: "Customer" },
                { value: "admin", label: "Restaurant Staff" },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    form.role === option.value
                      ? "border-navy-500 bg-navy-500/10 text-navy-500 dark:border-navy-400 dark:text-navy-400"
                      : "border-stone-300 dark:border-navy-400/30 text-navy-500 dark:text-navy-100/70"
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={option.value}
                    checked={form.role === option.value}
                    onChange={update("role")}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <p className="text-xs text-navy-500/55 dark:text-navy-100/45 mt-2">
              &ldquo;Restaurant Staff&rdquo; accounts can add and edit menu dishes.
            </p>
          </fieldset>

          <button
            type="submit"
            className="mt-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 py-3.5 font-medium transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-navy-500/75 dark:text-navy-100/65 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-navy-500 dark:text-navy-400 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function Field({ label, icon: Icon, error, ...props }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-navy-500 dark:text-navy-100/80 font-medium">{label}</span>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-500/40 dark:text-navy-100/40" />
        )}
        <input
          {...props}
          className={`w-full rounded-md border bg-cream-50 dark:bg-night-900 pl-10 pr-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 transition-shadow ${
            error
              ? "border-navy-500 focus:ring-navy-500"
              : "border-stone-300 dark:border-navy-400/30 focus:ring-navy-500 dark:focus:ring-navy-400"
          }`}
        />
      </div>
      {error && <span className="text-xs text-navy-500">{error}</span>}
    </label>
  );
}

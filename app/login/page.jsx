"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChefHat, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;
    const result = login(form);
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
            Welcome Back
          </h1>
          <p className="text-sm text-navy-500/70 dark:text-navy-100/60 mt-2">
            Sign in to manage your orders and wishlist.
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
              placeholder="••••••••"
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

          <button
            type="submit"
            className="mt-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 py-3.5 font-medium transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-navy-500/60 dark:text-navy-100/50 text-center mt-6 leading-relaxed">
          Demo admin account: <br />
          <span className="text-navy-700 dark:text-navy-50">admin@gusteaus.paris</span> /{" "}
          <span className="text-navy-700 dark:text-navy-50">gusteaus123</span>
        </p>

        <p className="text-sm text-center text-navy-500/75 dark:text-navy-100/65 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-navy-500 dark:text-navy-400 font-medium hover:underline">
            Create one
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

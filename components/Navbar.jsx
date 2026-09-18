"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Heart,
  ShoppingBag,
  ChefHat,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
  const { theme, toggleTheme } = useTheme();
  const { itemCount } = useCart();
  const { count } = useWishlist();
  const { user, isAdmin, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAccountOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream-50/90 dark:bg-night-900/90 backdrop-blur-md shadow-soft"
          : "bg-cream-50 dark:bg-night-900"
      } border-b border-stone-300/30 dark:border-navy-400/20`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Gusteau's home"
          >
            <ChefHat className="h-6 w-6 text-navy-500 dark:text-navy-400 transition-transform group-hover:-rotate-12" />
            <span className="font-display text-xl tracking-tight text-navy-700 dark:text-navy-50">
              Gusteau&apos;s
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isDrinksActive = currentUrl === "/products?category=Drinks";
              const active = link.href.includes("?")
                ? currentUrl === link.href
                : link.href === "/"
                ? pathname === "/"
                : (pathname === link.href || pathname.startsWith(`${link.href}/`)) &&
                  !(link.href === "/products" && isDrinksActive);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-navy-700 dark:text-navy-400"
                      : "text-navy-500/70 dark:text-navy-100 hover:text-navy-700 dark:hover:text-navy-400"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-navy-500 dark:bg-navy-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative p-2 rounded-full text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
            >
              <Heart className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-navy-500 px-1 text-[10px] font-semibold text-cream-50"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-2 rounded-full text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-navy-700 px-1 text-[10px] font-semibold text-cream-50"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <div className="relative hidden sm:block">
              {user ? (
                <>
                  <button
                    onClick={() => setAccountOpen((v) => !v)}
                    aria-label="Account menu"
                    className="p-2 rounded-full text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
                  >
                    <div className="h-5 w-5 rounded-full bg-navy-500 text-cream-50 text-[10px] font-semibold flex items-center justify-center">
                      {user.name?.[0]?.toUpperCase() || <User className="h-3 w-3" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {accountOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 rounded-md bg-cream-50 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20 shadow-soft py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-stone-300/30 dark:border-navy-400/20">
                          <p className="text-sm font-medium text-navy-700 dark:text-navy-50 truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-navy-500/60 dark:text-navy-100/50 truncate">
                            {user.email}
                          </p>
                        </div>
                        {isAdmin && (
                          <Link
                            href="/admin"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-navy-600 dark:text-navy-50 hover:bg-stone-100 dark:hover:bg-night-700"
                          >
                            <LayoutDashboard className="h-4 w-4" />
                            Manage Dishes
                          </Link>
                        )}
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-navy-500 hover:bg-navy-500/10"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 rounded-md border border-stone-300 dark:border-navy-400/30 px-3 py-2 text-sm font-medium text-navy-600 dark:text-navy-50 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
                >
                  <User className="h-4 w-4" />
                  Sign In
                </Link>
              )}
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-full text-navy-500 dark:text-navy-100 hover:bg-stone-100 dark:hover:bg-night-700 transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-stone-300/30 dark:border-navy-400/20 bg-cream-50 dark:bg-night-900"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => {
                const isDrinksActive = currentUrl === "/products?category=Drinks";
                const mobileActive = link.href.includes("?")
                  ? currentUrl === link.href
                  : (pathname === link.href || pathname.startsWith(`${link.href}/`)) &&
                    !(link.href === "/products" && isDrinksActive);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                      mobileActive
                        ? "bg-navy-500/10 text-navy-700 dark:text-navy-400"
                        : "text-navy-500/70 dark:text-navy-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-2 pt-2 border-t border-stone-300/30 dark:border-navy-400/20 flex flex-col gap-1">
                {user ? (
                  <>
                    <p className="px-3 py-1 text-xs text-navy-500/60 dark:text-navy-100/50">
                      Signed in as {user.name}
                    </p>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-navy-500 dark:text-navy-100"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Manage Dishes
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-navy-500 text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-navy-500 dark:text-navy-100"
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-navy-500 dark:text-navy-400"
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

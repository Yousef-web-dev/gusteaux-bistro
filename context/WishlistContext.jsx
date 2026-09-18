"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "gusteaux-wishlist";

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setWishlist(JSON.parse(raw));
    } catch (e) {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      // ignore storage write errors
    }
  }, [wishlist]);

  const value = useMemo(() => {
    const isWishlisted = (id) => wishlist.some((i) => i.id === id);
    const toggleWishlist = (dish) => {
      setWishlist((prev) =>
        prev.some((i) => i.id === dish.id)
          ? prev.filter((i) => i.id !== dish.id)
          : [...prev, dish]
      );
    };
    const removeFromWishlist = (id) =>
      setWishlist((prev) => prev.filter((i) => i.id !== id));

    return {
      wishlist,
      count: wishlist.length,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
    };
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}

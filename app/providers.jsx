"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";
import { DishesProvider } from "@/context/DishesContext";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DishesProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </DishesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "gusteaux-cart";

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload || state;
    case "ADD": {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
    case "REMOVE":
      return state.filter((i) => i.id !== action.payload);
    case "INCREMENT":
      return state.map((i) =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );
    case "DECREMENT":
      return state
        .map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch (e) {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      // ignore storage write errors
    }
  }, [cart]);

  const value = useMemo(() => {
    const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);
    return {
      cart,
      itemCount,
      subtotal,
      addToCart: (dish) => dispatch({ type: "ADD", payload: dish }),
      removeFromCart: (id) => dispatch({ type: "REMOVE", payload: id }),
      increment: (id) => dispatch({ type: "INCREMENT", payload: id }),
      decrement: (id) => dispatch({ type: "DECREMENT", payload: id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

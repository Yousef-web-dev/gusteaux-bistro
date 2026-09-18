"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dishes as seedDishes, categories as seedCategories } from "@/data/dishes";

const DishesContext = createContext(null);
const OVERRIDES_KEY = "gusteaux-dish-overrides"; // { added: [], edited: {id: dish}, deletedIds: [] }

function loadOverrides() {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : { added: [], edited: {}, deletedIds: [] };
  } catch (e) {
    return { added: [], edited: {}, deletedIds: [] };
  }
}

function saveOverrides(overrides) {
  try {
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
  } catch (e) {
    // ignore storage write errors (e.g. quota exceeded from large base64 images)
  }
}

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildDishList(overrides) {
  const base = seedDishes
    .filter((d) => !overrides.deletedIds.includes(d.id))
    .map((d) => (overrides.edited[d.id] ? { ...d, ...overrides.edited[d.id] } : d));
  const added = overrides.added.filter((d) => !overrides.deletedIds.includes(d.id));
  return [...base, ...added];
}

export function DishesProvider({ children }) {
  const [overrides, setOverrides] = useState({ added: [], edited: {}, deletedIds: [] });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setOverrides(loadOverrides());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveOverrides(overrides);
  }, [overrides, ready]);

  const dishes = useMemo(() => buildDishList(overrides), [overrides]);

  const categories = useMemo(() => {
    const custom = dishes.map((d) => d.category).filter(Boolean);
    return Array.from(new Set([...seedCategories, ...custom]));
  }, [dishes]);

  const value = useMemo(() => {
    const getDishById = (id) => dishes.find((d) => d.id === id);

    const getRelatedDishes = (id, count = 3) => {
      const dish = getDishById(id);
      if (!dish) return [];
      return dishes
        .filter((d) => d.id !== id && d.category === dish.category)
        .slice(0, count);
    };

    const addDish = (data) => {
      let id = slugify(data.name) || `dish-${Date.now()}`;
      // avoid id collisions
      const existingIds = dishes.map((d) => d.id);
      let candidate = id;
      let n = 2;
      while (existingIds.includes(candidate)) {
        candidate = `${id}-${n}`;
        n += 1;
      }
      const newDish = {
        id: candidate,
        rating: 4.5,
        reviews: [],
        gallery: data.image ? [data.image] : [],
        ingredients: data.ingredients || [],
        backstory: data.backstory || "",
        serves: data.serves || "1 person",
        prepTime: data.prepTime || "30 min",
        ...data,
        id: candidate,
        price: Number(data.price) || 0,
      };
      setOverrides((prev) => ({ ...prev, added: [...prev.added, newDish] }));
      return newDish;
    };

    const updateDish = (id, updates) => {
      const isSeed = seedDishes.some((d) => d.id === id);
      setOverrides((prev) => {
        if (isSeed) {
          return {
            ...prev,
            edited: { ...prev.edited, [id]: { ...prev.edited[id], ...updates } },
          };
        }
        return {
          ...prev,
          added: prev.added.map((d) => (d.id === id ? { ...d, ...updates } : d)),
        };
      });
    };

    const deleteDish = (id) => {
      setOverrides((prev) => ({
        ...prev,
        deletedIds: prev.deletedIds.includes(id) ? prev.deletedIds : [...prev.deletedIds, id],
      }));
    };

    const resetToDefaults = () => {
      const empty = { added: [], edited: {}, deletedIds: [] };
      setOverrides(empty);
    };

    return {
      dishes,
      categories,
      ready,
      getDishById,
      getRelatedDishes,
      addDish,
      updateDish,
      deleteDish,
      resetToDefaults,
    };
  }, [dishes, categories, ready]);

  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
}

export function useDishes() {
  const ctx = useContext(DishesContext);
  if (!ctx) throw new Error("useDishes must be used within a DishesProvider");
  return ctx;
}

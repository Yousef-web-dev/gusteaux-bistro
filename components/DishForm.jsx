"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImagePlus, Plus, X, Save } from "lucide-react";
import { categories as seedCategories } from "@/data/dishes";

const emptyDish = {
  name: "",
  category: seedCategories[1] || "Main Courses",
  price: "",
  prepTime: "",
  serves: "",
  image: "",
  shortDescription: "",
  description: "",
  backstory: "",
  ingredients: [],
};

export default function DishForm({ initialDish, onSubmit, submitLabel = "Save Dish" }) {
  const [form, setForm] = useState(() => ({
    ...emptyDish,
    ...initialDish,
    ingredients: initialDish?.ingredients || [],
  }));
  const [ingredientInput, setIngredientInput] = useState("");
  const [errors, setErrors] = useState({});
  const [imagePreviewError, setImagePreviewError] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (field === "image") setImagePreviewError(false);
  };

  const handleImageFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
      setImagePreviewError(false);
    };
    reader.readAsDataURL(file);
  };

  const addIngredient = () => {
    const trimmed = ingredientInput.trim();
    if (!trimmed) return;
    setForm((prev) => ({ ...prev, ingredients: [...prev.ingredients, trimmed] }));
    setIngredientInput("");
  };

  const removeIngredient = (idx) => {
    setForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== idx),
    }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Dish name is required.";
    if (!form.price || Number(form.price) <= 0) next.price = "Enter a valid price.";
    if (!form.image.trim()) next.image = "Add an image URL or upload a photo.";
    if (!form.shortDescription.trim()) next.shortDescription = "A short description helps customers decide.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      ...form,
      price: Number(form.price),
      gallery: [form.image],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <div className="rounded-xl overflow-hidden bg-cream-100 dark:bg-night-800 border border-stone-300/40 dark:border-navy-400/20">
          <div className="relative aspect-[4/3] bg-stone-100 dark:bg-night-900 flex items-center justify-center">
            {form.image && !imagePreviewError ? (
              // Using plain img to support base64 previews from file uploads
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={form.image}
                alt="Dish preview"
                onError={() => setImagePreviewError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <ImagePlus className="h-10 w-10 text-navy-500/30 dark:text-navy-100/20" />
            )}
          </div>
          <div className="p-5 flex flex-col gap-3">
            <Field
              label="Image URL"
              value={form.image}
              onChange={update("image")}
              placeholder="https://images.unsplash.com/..."
              error={errors.image}
            />
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-stone-300/40 dark:bg-navy-400/10" />
              <span className="text-xs text-navy-500/50 dark:text-navy-100/40">or</span>
              <div className="flex-1 h-px bg-stone-300/40 dark:bg-navy-400/10" />
            </div>
            <label className="inline-flex items-center justify-center gap-2 rounded-md border border-dashed border-stone-300 dark:border-navy-400/40 px-4 py-2.5 text-sm text-navy-500 dark:text-navy-100 cursor-pointer hover:bg-stone-100 dark:hover:bg-night-700 transition-colors">
              <ImagePlus className="h-4 w-4" />
              Upload a Photo
              <input type="file" accept="image/*" onChange={handleImageFile} className="hidden" />
            </label>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Dish Name" value={form.name} onChange={update("name")} error={errors.name} placeholder="Confit Byaldi" />
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-navy-500 dark:text-navy-100/80 font-medium">Category</span>
            <select
              value={form.category}
              onChange={update("category")}
              className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400"
            >
              {seedCategories.filter((c) => c !== "All").map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <Field label="Price ($)" type="number" min="0" step="0.5" value={form.price} onChange={update("price")} error={errors.price} placeholder="28" />
          <Field label="Prep Time" value={form.prepTime} onChange={update("prepTime")} placeholder="45 min" />
          <Field label="Serves" value={form.serves} onChange={update("serves")} placeholder="1-2 people" className="sm:col-span-2" />
        </div>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-navy-500 dark:text-navy-100/80 font-medium">Short Description</span>
          <textarea
            rows={2}
            value={form.shortDescription}
            onChange={update("shortDescription")}
            placeholder="One or two sentences shown on the menu card."
            className={`rounded-md border bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 resize-none ${
              errors.shortDescription
                ? "border-navy-500 focus:ring-navy-500"
                : "border-stone-300 dark:border-navy-400/30 focus:ring-navy-500 dark:focus:ring-navy-400"
            }`}
          />
          {errors.shortDescription && <span className="text-xs text-navy-500">{errors.shortDescription}</span>}
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-navy-500 dark:text-navy-100/80 font-medium">Full Description</span>
          <textarea
            rows={4}
            value={form.description}
            onChange={update("description")}
            placeholder="The full story shown on the dish's detail page."
            className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 resize-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-navy-500 dark:text-navy-100/80 font-medium">Backstory (optional)</span>
          <textarea
            rows={2}
            value={form.backstory}
            onChange={update("backstory")}
            placeholder="A line connecting this dish to Gusteau's world."
            className="rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400 resize-none"
          />
        </label>

        <div>
          <span className="text-sm text-navy-500 dark:text-navy-100/80 font-medium block mb-2">
            Ingredients
          </span>
          <div className="flex gap-2 mb-3">
            <input
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addIngredient();
                }
              }}
              placeholder="e.g. Fresh thyme"
              className="flex-1 rounded-md border border-stone-300 dark:border-navy-400/30 bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-sm text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 focus:ring-navy-500 dark:focus:ring-navy-400"
            />
            <button
              type="button"
              onClick={addIngredient}
              className="inline-flex items-center gap-1.5 rounded-md bg-sage-500 hover:bg-sage-400 text-cream-50 px-4 text-sm font-medium transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.ingredients.map((ing, idx) => (
              <motion.span
                key={`${ing}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-sage-500/10 text-sage-500 dark:text-sage-400 border border-sage-500/20"
              >
                {ing}
                <button type="button" onClick={() => removeIngredient(idx)} aria-label="Remove ingredient">
                  <X className="h-3 w-3" />
                </button>
              </motion.span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-navy-500 hover:bg-navy-400 text-cream-50 px-6 py-3.5 font-medium transition-colors self-start"
        >
          <Save className="h-4 w-4" />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, className = "", ...props }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="text-navy-500 dark:text-navy-100/80 font-medium">{label}</span>
      <input
        {...props}
        className={`rounded-md border bg-cream-50 dark:bg-night-900 px-3.5 py-2.5 text-navy-700 dark:text-navy-50 placeholder:text-navy-500/40 dark:placeholder:text-cream-200/30 focus:outline-none focus:ring-1 transition-shadow ${
          error
            ? "border-navy-500 focus:ring-navy-500"
            : "border-stone-300 dark:border-navy-400/30 focus:ring-navy-500 dark:focus:ring-navy-400"
        }`}
      />
      {error && <span className="text-xs text-navy-500">{error}</span>}
    </label>
  );
}

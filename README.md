# Gusteau's — A Ratatouille-Inspired Bistro Web App

A production-ready restaurant e-commerce app built with Next.js (App Router) and Tailwind CSS, themed after Gusteau's Parisian bistro from *Ratatouille*.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 14** (App Router, JavaScript only — no TypeScript)
- **Tailwind CSS** with a custom bordeaux / wood / cream / gold palette and full dark mode support
- **Framer Motion** for page/scroll animations and hover interactions
- **Lucide React** for icons
- React Context for global Cart, Wishlist, and Theme state (persisted to `localStorage`)

## Structure

```
app/                  → routes (Home, Services, About, Products, Product detail,
                         Wishlist, Cart, Checkout, Contact, Blogs)
components/           → Navbar, Footer, DishCard, ReviewCarousel, etc.
context/              → CartContext, WishlistContext, ThemeContext
data/                 → mock dishes, reviews, and blog posts
```

## Notes

- All product images are hotlinked from Unsplash for demo purposes — swap in your own photography before production use.
- Checkout is a fully client-side simulated flow (no real payment processing is wired in).
- Cart and Wishlist persist across reloads via `localStorage`.

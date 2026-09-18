"use client";

import { useState } from "react";
import Image from "next/image";
import { ChefHat } from "lucide-react";

/**
 * Wraps next/image for dish/drink photos. If the remote image fails to
 * load (broken link, hotlink expired, etc.) it falls back to a clean
 * branded placeholder instead of showing a broken-image icon.
 */
export default function DishImage({ src, alt, fill = true, className = "", sizes }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex items-center justify-center bg-cream-100 dark:bg-night-800 ${
          fill ? "absolute inset-0" : "w-full h-full"
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-navy-500/40 dark:text-navy-400/50">
          <ChefHat className="h-8 w-8" />
          <span className="text-[10px] uppercase tracking-wide">Gusteau&apos;s</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}

import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gusteau's | A Parisian Bistro",
  description:
    "Anyone can cook. Discover the signature dishes of Gusteau's — a Parisian bistro inspired by a rat with a gift for gastronomy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-body bg-paper min-h-screen flex flex-col antialiased"
      >
        <Providers>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

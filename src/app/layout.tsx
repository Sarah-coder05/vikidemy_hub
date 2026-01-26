// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Vikidemy Hub",
  description: "My awesome Next.js app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

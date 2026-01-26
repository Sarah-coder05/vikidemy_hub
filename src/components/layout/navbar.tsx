"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/public/smallLogo.png";
import MobileMenu from "./mobile";
import { Button } from "../ui/button";

interface MenuItem {
  title: string;
  href: string;
}

export default function Navbar() {
  const data: MenuItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },

    { title: "Book a Class", href: "/bookings" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-12 left-0 border-gray-800 bg-white text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={Logo} alt="Vikidemy Hub Logo" width={84} height={64} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {data.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-[18px] font-medium transition hover:text-gray-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <MobileMenu />

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login">
              <Button className="bg-gray-800 text-white hover:bg-gray-700">
                Log in
              </Button>
            </Link>

            <Link href="/auth/sign-up">
              <Button className="bg-white text-black hover:bg-gray-200">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Importing necessary modules and components
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/public/smallLogo.png";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { Button } from "../ui/button";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { StaticImageData } from "next/image";
// import study from "@/public/asset/Resources/study-coach.svg";
import { JSX } from "react/jsx-runtime";

interface MenuItem {
  title: string;
  href?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  icon?: JSX.Element | StaticImageData;
  description?: string;
  image?: string;
  href?: string;
}

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);

  const data: MenuItem[] = [
    {
      title: "Courses",
      submenu: [
        { title: "Frontend", href: "/tracks/frontend" },
        { title: "Backend", href: "/tracks/backend" },
        {
          title: "Product Design",
          href: "/tracks/product-design",
        },
        {
          title: "Product Management",
          href: "/tracks/product-management",
        },
        {
          title: "Data Analysis",
          href: "/tracks/data-analysis",
        },
        {
          title: "Cybersecurity",
          href: "/tracks/cybersecurity",
        },
        {
          title: "Artificial Intelligence",
          href: "/tracks/artificial-intelligence",
        },
      ],
    },
    {
      title: "Product",
      submenu: [
        {
          title: "Job board",

          href: "/jobs",
        },
        {
          title: "AI Study Coach",
          //   icon: study,
          href: "/study-coach",
        },
      ],
    },
    { title: "Pricing", href: "/pricing" },
    {
      title: "Community",
      href: "https://bit.ly/Edusproute-Community",
    },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = status ? "auto" : "hidden";
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="p-2 md:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] fixed left-0 top-0 z-10 h-full w-full transform bg-white dark:bg-zinc-900 md:hidden ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="mt-6 flex items-center justify-between px-8">
          <Link href="/" onClick={onToggleNav}>
            <Image src={Logo} alt="Logo" width={60} height={40} />
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`p-2 duration-500 md:hidden ${
              !navShow ? "-rotate-[360deg]" : ""
            }`}
          >
            <MdOutlineClose className="text-xl text-grey-900" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="m-2 flex flex-col justify-center text-grey-900">
          {data.map((link, id) => (
            <li key={id} className="list-none py-1">
              {link.submenu ? (
                <Accordion type="single" collapsible>
                  <AccordionItem key={id} value={link.title}>
                    <AccordionTrigger>
                      <Button
                        variant="muted"
                        asChild
                        className="flex items-center gap-1 py-0"
                      >
                        <span className="flex items-center gap-1">
                          <span>{link.title}</span>
                          <RiArrowDropDownLine className="text-3xl" />
                        </span>
                      </Button>
                    </AccordionTrigger>

                    <AccordionContent className="px-5">
                      {link.submenu.map((submenuItem, submenuId) => (
                        <Link
                          href={submenuItem.href || ""}
                          key={submenuId}
                          className="px-3"
                        >
                          <div key={submenuId}>{submenuItem.title}</div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={link.href || ""}
                  key={link.title}
                  className="font-incognito list-none py-3 text-3xl font-semibold text-grey-900"
                  onClick={onToggleNav}
                >
                  <Button variant="muted">{link.title}</Button>
                </Link>
              )}
            </li>
          ))}

          <div className="my-5 flex justify-center gap-x-3 gap-y-4 px-4 max-[366px]:flex-col">
            <Link href="/auth/login" className="w-full">
              <Button variant="ghost" size="full">
                Log In
              </Button>
            </Link>

            <Link href="/auth/sign-up" className="w-full">
              <Button variant="default" size="full">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

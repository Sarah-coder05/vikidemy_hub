import Image from "next/image";
import hero1 from "@/app/public/Academics.png";

import Link from "next/link";
import { Button } from "../ui/button";
import { FiCalendar } from "react-icons/fi";
import { SiGoogleclassroom } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      {/* Background image */}
      <Image
        src={hero1}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute " />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100svh-80px)] flex-col lg:flex-row items-stretch">
        {/* Text section */}
        <div className="flex-1 px-4 sm:px-6 lg:pl-10 flex flex-col justify-center py-12 sm:py-16 lg:py-20 text-centr lg:text-left">
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900">
              Personalized learning that helps children stand out academically.
            </h1>

            <p className="text-[16px] sm:text-base md:text-lg text-gray-900">
              Vikidemy Hub delivers structured, tech-enabled learning that
              supports struggling learners, challenges gifted students, and
              prepares every child for the future.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:justify-start">
              <Link href="/book-consultation" className="w-full sm:w-auto">
                <Button className=" sm:w-auto inline-flex items-start  justify-center gap-3 bg-[#2eb6dc] text-white hover:bg-gray-700 text-sm sm:text-base md:text-lg">
                  <FiCalendar className="text-lg" />
                  Book a Free Consultation
                </Button>
              </Link>

              <Link href="/book-consultation" className="w-full sm:w-auto">
                <Button className=" sm:w-auto inline-flex items-center justify-center gap-3 bg-gray-800 text-white hover:bg-gray-700 text-sm sm:text-base md:text-lg">
                  <SiGoogleclassroom className="text-lg" />
                  Book a Class
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

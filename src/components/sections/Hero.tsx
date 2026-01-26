import Image from "next/image";
import hero1 from "@/app/public/Academics.png";

import Link from "next/link";
import { Button } from "../ui/button";
import { FiCalendar } from "react-icons/fi";
import { SiGoogleclassroom } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 ">
      {/* Background image */}
      <Image
        src={hero1}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-whit backdrop-blur-[1px" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col lg:flex-row items-stretch">
        {/* Text section */}
        <div className="flex-1 p-6 flex flex-col justify-center py-20 lg:pl-10 lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-[500] text-gray-900">
              Personalized learning that helps children Standout Academically.
            </h1>

            <p className="text-base md:text-lg text-gray-700">
              Vikidemy Hub delivers structured, tech-enabled learning that
              supports struggling learners, challenges gifted students, and
              prepares every child for the future.
            </p>

            <div className="flex gap-2">
              <Link href="/book-consultation">
                <Button className="mt-6 inline-flex text-lg items-center gap-3 bg-[#2eb6dc] text-white  hover:bg-gray-700">
                  <FiCalendar className="text-lg" />
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button className="mt-6 inline-flex text-lg  items-center gap-3 bg-gray-800 text-white hover:bg-gray-700">
                  <SiGoogleclassroom className="text-lg " />
                  Book a Class
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image section - fills full height on all screen sizes */}
        {/* <div className="flex-1 relative min-h-[100px] lg:min-h-0">
          <Image
            src={hero1}
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}

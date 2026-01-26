"use client";

import ProgramCard from "../data/programCard";
import { programs } from "@/components/data/program";

export default function ProgramsSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold">
          Our <span className="text-cyan-500">Programs</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

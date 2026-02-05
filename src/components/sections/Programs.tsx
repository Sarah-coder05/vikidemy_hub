"use client";

import ProgramCard from "../data/programCard";
import { programs } from "@/components/data/program";

export default function ProgramsSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-4xl text-center text-4xl font-600 text-gray-900 md:text-5xl">
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

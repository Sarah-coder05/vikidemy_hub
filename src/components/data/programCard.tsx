"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  subtitle,
  description,
  slug,
}) => {
  const router = useRouter();

  return (
    <div className="group perspective border border-gray-100 rounded-2xl h-[300px] w-full">
      <div className="relative h-full w-full transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-[#061826] p-6 text-white flex flex-col justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-cyan-300">{subtitle}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-white p-6 flex flex-col justify-between text-center shadow-lg">
          <p className="text-[18px] text-gray-700 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-3 justify-center mt-6">
            <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition">
              Enroll Now
            </button>

            <button
              onClick={() => router.push(`/programs/${slug}`)}
              className="rounded-full border border-cyan-500 px-5 py-2 text-sm font-medium text-cyan-600"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;

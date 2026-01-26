"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Laptop } from "lucide-react";

export default function LearningGapSection() {
  const cards = [
    {
      icon: Layers,
      title: "Personalization Gap.",
      text: "Learners move at different speeds and learn in different ways, yet most learning environments are standardized.",
    },
    {
      icon: TrendingUp,
      title: "Support and Engagement Gap.",
      text: "Struggling learners often need targeted reinforcement, while high-potential learners need deeper challenge to stay engaged.",
    },
    {
      icon: Laptop,
      title: "The Digital Readiness Divide",
      text: "Access to quality teaching and meaningful digital learning tools remains uneven, limiting long-term preparedness.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-white px-4 py-20 text-center">
      <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-600 text-gray-900 md:text-5xl">
        Where modern learning needs stronger support
      </h2>
      <p className="mx-auto mb-14 text-lg max-w-3xl text-base text-gray-500">
        Learning environments do a lot of good — but many learners still need
        more personalized, structured support to thrive.
      </p>

      {/* Cards */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="h-64 rounded-2xl border bg-gray-100 border-1 border-[#2eb6dc] p-4 text-left shadow-lg flex flex-col"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Icon className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#2eb6dc]">
                {card.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 flex-1">
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

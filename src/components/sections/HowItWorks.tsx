import Link from "next/link";
import { FiTrendingUp, FiTarget, FiMonitor } from "react-icons/fi";
import baby from "@/app/public/baby.png";
import hero from "@/app/public/hero1.jpeg";
import Image from "next/image";

export default function SolutionSection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-4xl text-center lg:text-5xl font-600 text-gray-900 mb-6 max-w-6xl">
            A structured learning system built <br />
            around each learner
          </h2>
        </div>

        {/* Cards Grid - All same size */}

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 pl-10 lg:gap-8">
          {/* Card 1 */}
          <div className="">
            <div
              className="group relative overflow-hidden max-w-sm p-8 bg-gray-100 hover:bg-[#1ea8d1] transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
              style={{ borderRadius: "60px 0 60px 0" }}
            >
              <div>
                <div className="mb-6 text-[#1ea8d1] group-hover:text-white transition-colors duration-300">
                  <FiTrendingUp className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  Personalized Learning Paths
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  Every learner starts with diagnostics and a clear plan
                  tailored to their strengths, gaps, and pace.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {/* Card 2 */}
            <div
              className="group relative overflow-hidden max-w-sm p-8 bg-gray-100 hover:bg-[#1ea8d1] transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
              style={{ borderRadius: "60px 0 60px 0" }}
            >
              <div>
                <div className="mb-6 text-[#1ea8d1] group-hover:text-white transition-colors duration-300">
                  <FiTarget className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  Structured Progress & Support
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  Learning is guided, monitored, and adjusted through clear
                  goals, feedback loops, and accountability.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative overflow-hidden max-w-sm p-8 bg-gray-100 hover:bg-[#1ea8d1] transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
              style={{ borderRadius: "60px 0 60px 0" }}
            >
              <div>
                <Image
                  src={baby}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            {/* Card 2 */}
            <div
              className="group relative overflow-hidden max-w-sm p-8 bg-gray-100 hover:bg-[#1ea8d1] transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
              style={{ borderRadius: "60px 0 60px 0" }}
            >
              <div>
                <Image
                  src={hero}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative overflow-hidden max-w-sm p-8 bg-gray-100 hover:bg-[#1ea8d1] transition-all duration-500 cursor-pointer aspect-square flex flex-col justify-between"
              style={{ borderRadius: "60px 0 60px 0" }}
            >
              <div>
                <div className="mb-6 text-[#1ea8d1] group-hover:text-white transition-colors duration-300">
                  <FiMonitor className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  Hybrid & Digital-Ready Learning
                </h3>
                <p className="text-gray-600 text-lg group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  Learners gain access to quality instruction and digital skills
                  through flexible in-hub and online learning models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Line */}
        <div className="text-center mt-16 mb-8">
          <p className="text-lg md:text-xl font-medium text-gray-800 max-w-3xl mx-auto">
            Learning doesn&apos;t improve by adding more hours — it improves
            when the right system is in place.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center text-[#1ea8d1] font-semibold hover:text-orange-700 transition-colors group"
          >
            See how it works
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

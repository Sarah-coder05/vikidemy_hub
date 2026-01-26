import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white mt-18 text-gray-900">
      {/* Hero / Intro section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Intro Video */}
          <div className="w-full lg:w-1/2 relative aspect-video overflow-hidden rounded-xl shadow-lg">
            <video
              className="w-full h-full object-cover rounded-xl"
              controls
              muted
              playsInline
            >
              <source src="/assets/videos/introVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Founder Summary */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-4 text-3xl font-bold">About Vikidemy Hub</h1>

            <p className="mb-4 text-gray-600 leading-relaxed">
              Vikidemy Hub was founded with a simple but powerful mission: to
              help learners catch up, grow confidently, and develop future-ready
              skills in a supportive environment.
            </p>

            <p className="mb-4 text-gray-600 leading-relaxed">
              Our founder believes that education should be personal, practical,
              and empowering — especially for learners who need clarity,
              confidence, and consistent guidance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through tailored learning paths, strong foundations in Math and
              English, and a focus on long-term growth, Vikidemy Hub is building
              learners who are prepared not just for exams, but for life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

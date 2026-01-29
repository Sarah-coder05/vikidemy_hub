"use client";

import Script from "next/script";

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-[#2eb6dc] px-4 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mt-8 sm:mt-12 text-3xl mt-16 font-600 sm:text-5xl text-white">
          Book a Learning Consultation
        </h1>

        <p className="mt-3 max-w-2xl text-[17px] sm:text-base text-white/90">
          Choose a convenient time and we’ll talk through your child’s learning
          needs and the best next steps.
        </p>

        <div className="mt-8 rounded-2xl bg-white/10 p-2 sm:p-4">
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/vikidemyhub/30-minute_learning_consultation"
            style={{ width: "100%", height: "700px" }}
          />
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </main>
  );
}

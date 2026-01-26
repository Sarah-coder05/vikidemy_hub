"use client";

import Script from "next/script";

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-[#2eb6dc] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mt-16 text-4xl font-600 text-white">
          Book a Learning Consultation
        </h1>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/vikidemyhub/30-minute_learning_consultation"
          style={{ minWidth: "620px", height: "700px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </main>
  );
}

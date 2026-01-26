import React from "react";
import CustomAccordion from "../utils/customAccordion";

import Link from "next/link";

function Faq() {
  const accordionData = [
    {
      itemValue: "item-1",
      question: "What exactly is Vikidemy Hub?",
      answer:
        "Vikidemy Hub is a personalized learning hub that supports children academically and developmentally. We combine structured teaching, reading development, and skill-building to help learners grow confidently and consistently — beyond just passing exams.",
    },
    {
      itemValue: "item-2",
      question: "Is Vikidemy Hub the same as a regular tutorial center?",
      answer:
        "No. Instead of repeating classroom lessons, we first identify where a child is struggling or under-challenged. We then design a clear learning plan that focuses on understanding, confidence, and steady progress.",
    },
    {
      itemValue: "item-3",
      question: "Who is Vikidemy Hub best suited for?",
      answer:
        "Vikidemy Hub works well for children who are struggling academically, children who need more challenge, and parents who want structure, guidance, and visible improvement rather than guesswork.",
    },
    {
      itemValue: "item-4",
      question: "What programs and learning options do you offer?",
      answer:
        "We offer one-on-one academic classes (online and at our physical hub), a Reading Club for guided group learning, digital skills foundations, and structured progress tracking for every learner.",
    },
    {
      itemValue: "item-5",
      question: "How do you assess my child before classes begin?",
      answer:
        "Every child completes a diagnostic assessment based on the previous academic year. This allows us to accurately identify learning gaps, strengths, and the best starting point for effective teaching.",
    },
    {
      itemValue: "item-6",
      question: "Which curriculum do you follow?",
      answer:
        "We align with both Nigerian and Cambridge curricula, depending on your child’s school background. Our focus is on strong foundations, reasoning skills, and real understanding — not memorization.",
    },
    {
      itemValue: "item-7",
      question: "When should I expect to see improvement?",
      answer:
        "Most parents notice improved confidence within a few weeks and clearer understanding within one to two months. Progress depends on consistency, attendance, and following the learning plan.",
    },
    {
      itemValue: "item-8",
      question: "How do I enroll my child at Vikidemy Hub?",
      answer:
        "Enrollment starts with registration, followed by a diagnostic assessment. Once completed, your child begins structured classes based on a personalized learning plan.",
    },
  ];

  return (
    <div className="">
      <div className="mx-[8%] py-16 md:py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="pb-5 text-4xl font-semibold text-grey-900 sm:text-3xl md:text-4xl">
            Frequently asked questions
          </p>
          <p className="text-lg text-grey-600">
            Everything you need to know about Vikidemy Hub.
          </p>
        </div>

        <div className="p-16 text-[18px] bg-[#1ea8d1] lg:mx-[20%]">
          {accordionData.map((data, index) => (
            <CustomAccordion key={index} {...data} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg text-grey-600">
            Still unsure or have more questions about your child?
          </p>
          <Link href="/book-consultation" className="inline-block">
            <button className="btn-primary bg-[#1ea8d1] px-8 py-3">
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Faq;

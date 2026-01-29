import { FiStar } from "react-icons/fi";

type Testimonial = {
  name: string;
  date?: string;
  location: string;
  role: string;
  rating: number;
  message: string;
};

const testimonials = [
  {
    name: "Ana",
    location: "",
    role: "",
    date: "July 17, 2025",
    rating: 5,
    message:
      "Victoria is an excellent teacher. I’ve been improving my pronunciation and learning new vocabulary. I highly recommend her.",
  },
  {
    name: "Basmah",
    location: "",
    role: "",
    date: "July 1, 2025",
    rating: 5,
    message:
      "I really enjoy learning with teacher Victoria. She is very kind, helpful, and makes the lesson fun and interesting. She explains things clearly and gives me the confidence to speak without fear. I’m happy to have her as my English teacher.",
  },
  {
    name: "Daniel Oyelade",
    location: "Nigeria",
    role: "Year 10 Student",
    date: "",
    rating: 5,
    message: `I used to feel lost in Maths, especially because classes in school move very fast. Sometimes I understood the lesson, but other times I didn’t even know what questions to ask.
With Vikidemy Hub, things changed because my classes were one-on-one.
My tutor took time to explain topics in a way that actually made sense to me. If I didn’t understand something, we slowed down instead of moving on.
I became more confident answering questions in school and my test scores improved from constant Cs to Bs and As. I also stopped feeling scared of Maths exams.
Vikidemy Hub helped me realise that I’m not bad at Maths — I just needed the right teaching approach.`,
  },
  {
    name: "Mrs. Aisha Rahman",
    location: "Toronto, Canada",
    role: "Parent",
    date: "",
    rating: 5,
    message: `Before Vikidemy Hub, my son struggled a lot with Maths. We had tried different tutors, but nothing really changed because everyone seemed to teach the same way.

    What stood out to me with Vikidemy Hub was how intentional they were. They assessed my child properly and explained exactly where the gaps were and how they planned to fix them.
Within a few weeks, I noticed a big difference in his confidence. He stopped dreading lessons and actually looked forward to them. Even his schoolteacher mentioned improvement.

As a parent living in Canada, finding quality online support can be hard, but Vikidemy Hub has exceeded my expectations. I feel confident knowing my child is in good hands.`,
  },
];

export default function WhyVikidemy() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-600 text-gray-900 md:text-5xl">
            Why Vikidemy Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine structure, care, mentorship, and modern learning tools to
            help every learner grow with confidence — not pressure.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={`${t.name}-${t.date ?? ""}`}
              className="relative rounded-2xl p-8 text-left shadow-lg bg-gradient-to-br from-[#2eb6dc]/25 via-white/70 to-[#1ea8d1]/30"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-3">
                <div className="h-12 w-12 rounded-xl bg-[#2eb6dc] text-white flex items-center justify-center font-semibold">
                  {t.name.trim().charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {/* show date if available, else show location/role */}
                    {t.date
                      ? t.date
                      : [t.location, t.role].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {t.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

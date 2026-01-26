export default function OnlineOneOnOnePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-26">
      <h1 className="text-3xl font-semibold mb-4">Online One-on-One Classes</h1>

      <p className="text-lg text-gray-600 mb-10">
        Personalized online learning sessions for students who need focused
        academic support, enrichment, or flexible learning options.
      </p>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          Our Online One-on-One Classes are designed for students across
          different locations who need personalized academic attention beyond
          what traditional classrooms provide.
        </p>

        <p>We work with:</p>
        <ul className="list-disc pl-6">
          <li>
            Students who are struggling academically and need targeted support
          </li>
          <li>
            Students who are bright but under-challenged in regular school
            settings
          </li>
          <li>
            Learners who need flexible schedules or prefer learning from home
          </li>
        </ul>

        <p>
          Each student begins with a baseline diagnostic assessment to identify
          learning gaps, strengths, and learning patterns. From there, we design
          a custom learning plan tailored to the child — not a generic syllabus.
        </p>

        <p>Our tutors don’t simply reteach school lessons. Instead, we:</p>
        <ul className="list-disc pl-6">
          <li>Address foundational gaps holding the child back</li>
          <li>Strengthen understanding and confidence</li>
          <li>Introduce challenge where the child is ready for more</li>
          <li>Track progress intentionally over time</li>
        </ul>

        <p>Subjects currently supported include:</p>
        <ul className="list-disc pl-6">
          <li>Mathematics</li>
          <li>English Language</li>
          <li>Science (foundational levels)</li>
        </ul>

        <p>
          Classes are interactive, structured, and paced to the child’s ability,
          ensuring learning is effective, calm, and confidence-building.
        </p>

        <p className="font-medium">
          Best for: Parents seeking personalized learning, measurable progress,
          and flexible online education without compromising quality.
        </p>
      </article>

      <div className="mt-12 flex gap-4">
        <button className="rounded-full bg-cyan-500 px-6 py-3 text-white">
          Enroll Now
        </button>
        <button className="rounded-full border border-cyan-500 px-6 py-3 text-cyan-600">
          Book a Consultation
        </button>
      </div>
    </main>
  );
}

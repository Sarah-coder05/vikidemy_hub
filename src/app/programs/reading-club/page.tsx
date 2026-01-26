export default function ReadingClubPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-26">
      <h1 className="text-3xl font-semibold mb-4">Reading Club</h1>

      <p className="text-lg text-gray-600 mb-10">
        Monthly themed group sessions that build comprehension, vocabulary,
        confidence, and critical thinking.
      </p>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          At Wikidemy Hub, we believe that reading is one of the fastest ways to
          expand a child’s world.
        </p>

        <p>
          Our Reading Club takes students on a guided journey through books —
          not just to read, but to think, understand, and express ideas clearly.
        </p>

        <p>Through carefully selected monthly themes, students:</p>

        <ul className="list-disc pl-6">
          <li>
            Explore stories, cultures, and ideas beyond their immediate
            environment
          </li>
          <li>Build stronger vocabulary and comprehension skills</li>
          <li>Learn to ask deeper, smarter questions</li>
          <li>Develop confidence in speaking and expressing thoughts</li>
        </ul>

        <p>Many parents tell us that children from our Reading Club:</p>

        <ul className="list-disc pl-6">
          <li>Sound more articulate</li>
          <li>Think more critically</li>
          <li>Show greater curiosity and awareness</li>
        </ul>

        <p>
          Reading sessions are held in small guided groups, led by a facilitator
          who ensures every child participates and understands.
        </p>

        <p>Each session includes:</p>

        <ul className="list-disc pl-6">
          <li>Guided reading</li>
          <li>Comprehension discussions</li>
          <li>Vocabulary development</li>
          <li>Worksheets and follow-up activities</li>
        </ul>

        <p>
          This ensures reading is not passive — learning is happening
          deliberately.
        </p>

        <p className="font-medium">
          Best for: Children who need stronger reading foundations, exposure,
          confidence, and thinking depth.
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

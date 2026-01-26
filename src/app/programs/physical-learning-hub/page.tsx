export default function PhysicalLearningHubPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-26">
      <h1 className="text-3xl font-semibold mb-4">Physical Learning Hub</h1>

      <p className="text-lg text-gray-600 mb-10">
        Small-group and one-on-one after-school learning focused on academic
        mastery, discipline, and consistency.
      </p>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          Our Physical Learning Hub offers structured, in-person learning for
          students who thrive best in a focused physical environment.
        </p>

        <p>Located in Abuja, the hub provides:</p>

        <ul className="list-disc pl-6">
          <li>A calm, comfortable, and distraction-free learning space</li>
          <li>Small group and one-on-one sessions</li>
          <li>Consistent routines that support discipline and focus</li>
        </ul>

        <p>
          Just like our online program, learning at the hub is personalized, not
          crowded or rushed. Each student’s learning plan is designed based on
          diagnostic assessments and ongoing observation.
        </p>

        <p>We focus on:</p>

        <ul className="list-disc pl-6">
          <li>Academic mastery</li>
          <li>Closing learning gaps</li>
          <li>Building study discipline</li>
          <li>Consistent progress over time</li>
        </ul>

        <p>
          Some children learn better when physically present in a structured
          space — and we’ve designed our hub specifically for that.
        </p>

        <p className="font-medium">
          Best for: Parents seeking a stable, well-structured after-school
          learning environment with close supervision and personalized
          attention.
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

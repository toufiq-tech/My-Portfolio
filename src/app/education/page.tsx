
export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0D1320] px-5 py-25 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-medium tracking-widest text-[#52E6AC]">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-[#52E6AC]">Education</span>
          </h2>

          <p className="mt-4 text-gray-400">
            My academic journey and professional learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* University */}
          <div className="rounded-xl border border-[#52E6AC]/20 bg-[#111925] p-6 transition hover:border-[#52E6AC]">
            <p className="mb-4 text-sm font-medium text-[#52E6AC]">
              University Education
            </p>

            <h3 className="text-lg font-semibold text-white">
              Bachelor of Science (B.Sc.) in Computer Science & Engineering
            </h3>

            <p className="mt-3 text-gray-400">
              World University of Bangladesh
            </p>

            <p className="mt-2 text-sm text-gray-500">
              2024 - 2028 (Running)
            </p>
          </div>

          {/* Programming Hero */}
          <div className="rounded-xl border border-[#52E6AC]/20 bg-[#111925] p-6 transition hover:border-[#52E6AC]">
            <p className="mb-4 text-sm font-medium text-[#52E6AC]">
              Professional Training
            </p>

            <h3 className="text-lg font-semibold text-white">
              Full Stack Web Development Course
            </h3>

            <p className="mt-3 text-gray-400">
              Programming Hero
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Currently Learning
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Learning modern web development technologies
              and building practical projects to improve my
              programming and problem-solving skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

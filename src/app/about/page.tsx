import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0D1320] py-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-10">
        
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border-4 border-[#52E6AC]">
            <Image
              src="/images/MYPic.png"
              alt="Toufiqur Rahaman"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="font-semibold uppercase tracking-[3px] text-[#52E6AC]">
            About Me
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Full Stack Developer &
            <span className="text-[#52E6AC]"> Problem Solver</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I'm Toufiqur Rahaman, a passionate Full Stack Web Developer
            and Computer Science student from Bangladesh. I enjoy
            building modern, responsive and user-friendly web
            applications using current technologies.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            My focus is on creating clean UI, secure authentication,
            responsive layouts and scalable applications using Next.js,
            React, TypeScript, MongoDB and Node.js.
          </p>

          

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-[#52E6AC]">
                20+
              </h3>
              <p className="text-gray-400">
                Completed Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#52E6AC]">
                1.5+
              </h3>
              <p className="text-gray-400">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#52E6AC]">
                10+
              </h3>
              <p className="text-gray-400">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#52E6AC]">
                100%
              </h3>
              <p className="text-gray-400">
                Responsive Design
              </p>
            </div>
          </div>

          <Link
            href="/projects"
            className="mt-10 inline-flex bg-[#52E6AC] px-8 py-4 font-bold text-[#090E18] transition hover:bg-white"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Bazar Dor",
    subtitle: "MARKET PRICE TRACKING PLATFORM",
    description:
      "A Bengali market price tracking platform that helps people explore daily prices of essential products. Users can compare market prices, track price changes and stay updated with the latest market information.",
    image: "/images/project-1.png",
    category: "Full Stack Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
    ],
    live: "https://bazar-dor-liard-zeta.vercel.app/",
  },
  {
    id: "02",
    title: "FitLog",
    subtitle: "FITNESS & WORKOUT APPLICATION",
    description:
      "A fitness application designed to make workout planning simple and organized. Explore different exercises, discover workout details and manage daily fitness activities through an intuitive interface.",
    image: "/images/project-2.png",
    category: "Web Application",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    live: "https://fit-log-six-rho.vercel.app/",
  },
  {
    id: "03",
    title: "React Dev Stack",
    subtitle: "REACT DEVELOPMENT PROJECT",
    description:
      "A frontend development project that represents my practical experience with React. Built as part of my journey to improve frontend development skills and create interactive user interfaces.",
    image: "/images/project-3.png",
    category: "Frontend Development",
    technologies: [
      "React",
      "Tailwind CSS",
      "Next.js",
      "React-Toastify",
    ],
    live: "https://react-dev-stack.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0D1320] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[#52E6AC]">
              Portfolio / My Work
            </span>

            <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              FEATURED
              <br />
              <span className="text-[#52E6AC]">PROJECTS.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-gray-400">
            A selection of projects where I turn ideas into
            functional digital experiences through creativity,
            problem-solving and modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20 md:space-y-28">

          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >

              {/* Image */}
              <div
                className={`relative lg:col-span-7 ${
                  index % 2 === 1
                    ? "lg:col-start-6 lg:row-start-1"
                    : ""
                }`}
              >

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111925]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={650}
                    className="h-[280px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.035] sm:h-[380px] lg:h-[440px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E18]/30 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-md bg-[#52E6AC] px-4 py-2 text-xs font-bold tracking-wider text-[#090E18]">
                    PROJECT {project.id}
                  </div>

                </div>

                {/* Decorative line */}
                <div
                  className={`absolute -bottom-3 hidden h-[2px] w-1/3 bg-[#52E6AC] md:block ${
                    index % 2 === 1
                      ? "right-0"
                      : "left-0"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`relative lg:col-span-5 ${
                  index % 2 === 1
                    ? "lg:col-start-1 lg:row-start-1"
                    : ""
                }`}
              >

                <span className="text-sm font-bold tracking-[3px] text-[#52E6AC]">
                  {project.category}
                </span>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-2 text-lg font-bold text-[#52E6AC]/50">
                    {project.id}
                  </span>

                  <div>
                    <p className="text-xs font-semibold tracking-[2px] text-gray-500">
                      {project.subtitle}
                    </p>

                    <h3 className="mt-3 text-3xl font-extrabold text-white transition duration-300 group-hover:text-[#52E6AC] md:text-4xl xl:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-7 text-base leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Technology */}
                <div className="mt-8">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[2px] text-white">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border-b border-[#52E6AC]/30 pb-2 pr-3 text-sm text-gray-400 transition hover:text-[#52E6AC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-4 border-b-2 border-[#52E6AC] pb-3 text-sm font-bold tracking-wider text-white transition duration-300 hover:gap-7 hover:text-[#52E6AC]"
                >
                  EXPLORE PROJECT
                  <span className="text-xl text-[#52E6AC]">↗</span>
                </a>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-28 border-t border-white/10 pt-10 text-center">
          <p className="text-sm tracking-wider text-gray-500">
            MORE IDEAS. MORE PROJECTS. MORE TO COME.
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
            ALWAYS BUILDING. <span className="text-[#52E6AC]">ALWAYS LEARNING.</span>
          </h3>
        </div>

      </div>
    </section>
  );
}

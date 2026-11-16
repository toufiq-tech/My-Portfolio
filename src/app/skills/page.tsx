import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Python", icon: FaPython, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
  ];

  return (
    <section
      id="skills"
      className="bg-[#090E18] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-[3px] text-[#52E6AC]">
            My Skills
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Modern technologies that I use to build scalable and
            responsive web applications.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-[#52E6AC]/20 bg-[#111925] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#52E6AC] hover:shadow-[0_0_25px_rgba(82,230,172,0.25)]"
              >
                <div className="flex flex-col items-center">
                  <Icon
                    className={`text-5xl ${skill.color}`}
                  />

                  <h3 className="mt-4 font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
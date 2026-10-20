import { FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiFastapi,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
    description: "Building modern and interactive user interfaces.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    description: "Writing scalable and type-safe JavaScript applications.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    description: "Developing dynamic and interactive web applications.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    description: "Creating responsive interfaces with utility-first CSS.",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: SiHtml5,
    description: "Building semantic and accessible web structures.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: SiCss,
    description: "Creating responsive layouts and modern designs.",
  },
  {
    name: "Python",
    category: "Backend",
    icon: FaPython,
    description: "Developing reliable backend applications and services.",
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: SiFastapi,
    description: "Building fast and modern REST APIs with Python.",
  },
  {
    name: "Django",
    category: "Backend",
    icon: SiDjango,
    description: "Developing powerful and scalable web applications.",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    description: "Working with relational databases and data modeling.",
  },
  {
    name: "Git",
    category: "Tools",
    icon: FaGitAlt,
    description: "Managing source code and development workflows.",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: FaGithub,
    description:
      "Collaborating, managing repositories, and deploying projects.",
  },
];

const categories = ["Frontend", "Backend", "Database", "Tools"];

function SkillsPage() {
  return (
    <section className="min-h-screen px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            My Skills
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I use modern frontend and backend technologies to build scalable,
            responsive, and maintainable web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            return (
              <div key={category}>
                {/* Category Title */}
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-2xl font-semibold text-white">
                    {category}
                  </h2>

                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                {/* Skills Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/5"
                      >
                        {/* Icon */}
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-2xl text-sky-400 transition-all duration-300 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 group-hover:text-sky-300">
                          <Icon />
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white">Always Learning</h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-400">
            Technology is constantly evolving, and I enjoy learning new tools,
            frameworks, and best practices to improve the quality of my work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;

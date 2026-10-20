import { FaGithub, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";

const projects = [
  {
    title: "New Bootstrap jQuery Project",
    description:
      "A frontend project built with HTML, CSS, Bootstrap, and jQuery, focused on creating a responsive and interactive web interface.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/aliizadi00dev/New-Bootstrap-Jquery-project",
  },

  {
    title: "Lang Changer",
    description:
      "A Linux Zsh utility for quickly changing the keyboard layout on X11 systems.",
    technologies: ["Zsh", "Linux", "X11", "setxkbmap", "fzf"],
    github: "https://github.com/aliizadi00dev/lang-changer",
  },

  {
    title: "Pure CSS & HTML",
    description:
      "A frontend project demonstrating how to create a complete web interface using pure HTML and CSS without JavaScript.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/aliizadi00dev/Pure-CSS-and-HTML-project-no-js-",
  },

  {
    title: "Docker Roadmap",
    description:
      "A structured roadmap for learning Docker and understanding containerization concepts and workflows.",
    technologies: ["Docker", "Containers", "DevOps"],
    github: "https://github.com/aliizadi00dev/docker-roadmap",
  },

  {
    title: "DNS Changer",
    description:
      "A Zsh utility for efficiently changing DNS configuration on Linux systems using NetworkManager.",
    technologies: ["Zsh", "Linux", "NetworkManager", "DNS"],
    github: "https://github.com/aliizadi00dev/dns-changer",
  },

  {
    title: "Olib CLI",
    description:
      "A command-line interface for interacting with Open Library from the terminal.",
    technologies: ["Python", "CLI", "Open Library"],
    github: "https://github.com/aliizadi00dev/olibcli",
  },
];

function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            My Projects
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I&apos;ve Built
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A collection of projects I&apos;ve built while exploring web
            development, Python, Linux, CLI tools, and DevOps.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/5"
            >
              {/* Project Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sky-400 transition-all duration-300 group-hover:border-sky-500/50 group-hover:bg-sky-500/10">
                  <FaTerminal className="text-xl" />
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="cursor-pointer text-slate-500 transition hover:text-white"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-white transition group-hover:text-sky-400">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="mt-6 border-t border-slate-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300"
                >
                  <FaGithub />
                  View on GitHub
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-sm">
          <FaGithub className="mx-auto text-4xl text-slate-400" />

          <h2 className="mt-4 text-2xl font-bold text-white">
            More Projects on GitHub
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Explore my repositories to see more of my experiments, tools,
            learning projects, and open-source work.
          </p>

          <a
            href="https://github.com/aliizadi00dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95"
          >
            <FaGithub className="text-lg" />
            Visit My GitHub
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

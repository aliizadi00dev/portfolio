import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiTypescript, SiFastapi, SiDjango } from "react-icons/si";

const HomePage = () => (
  <div className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
    {/* Background Glow */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="absolute bottom-[-10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="absolute right-[-10%] top-[30%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
    </div>

    {/* Grid Background */}
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-12">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Hero Content */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Status Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/10 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <p className="mb-3 text-lg font-medium text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Ali{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Izadi
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-slate-200 sm:text-3xl">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, scalable web applications with{" "}
            <span className="font-medium text-sky-400">React</span>,{" "}
            <span className="font-medium text-cyan-400">TypeScript</span>, and{" "}
            <span className="font-medium text-yellow-400">Python</span>. I enjoy
            turning ideas into clean, reliable, and useful software.
          </p>

          {/* Tech Stack */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              <FaReact className="text-cyan-400" />
              React
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              <SiTypescript className="text-blue-400" />
              TypeScript
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              <FaPython className="text-yellow-400" />
              Python
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              <SiFastapi className="text-emerald-400" />
              FastAPI
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              <SiDjango className="text-green-400" />
              Django
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/aliizadi00dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
            >
              <FaGithub className="text-lg" />
              GitHub
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/aliizadi00dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-800 hover:text-white"
            >
              <FaLinkedin className="text-lg text-blue-400" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Code Card */}
        <div className="hidden lg:block animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl" />

            {/* Terminal */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/40">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />

                <span className="ml-3 font-mono text-xs text-slate-500">
                  ali@portfolio ~
                </span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </p>

                <p className="pl-5">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Ali Izadi&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-400">frontend:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;React + TypeScript&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-400">backend:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Python + FastAPI + Django&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-400">passion:</span>{" "}
                  <span className="text-emerald-400">
                    &quot;Building great software&quot;
                  </span>
                </p>

                <p>
                  <span className="text-slate-400">{"}"}</span>;
                </p>

                <div className="mt-5 border-t border-slate-800 pt-5">
                  <p>
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-sky-300">developer</span>
                    <span className="animate-pulse text-sky-400">_</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Icon */}
            <div className="absolute -right-5 -top-5 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl border border-sky-500/30 bg-slate-900 text-2xl text-sky-400 shadow-xl shadow-sky-500/10">
              <FaCode />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 sm:flex">
      <span className="text-xs uppercase tracking-widest">Explore</span>

      <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
    </div>
  </div>
);

export default HomePage;

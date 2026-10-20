const AboutPage = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Full Stack Developer
          </h2>

          <div className="mt-2 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="space-y-5 text-lg leading-8 text-gray-300">
          <p>
            I’m a Full Stack Developer passionate about building modern,
            scalable, and user-friendly web applications. I work across both
            frontend and backend development, combining strong problem-solving
            skills with a focus on clean, maintainable code.
          </p>

          <p>
            On the frontend, I specialize in{" "}
            <span className="font-semibold text-blue-400">React</span> and{" "}
            <span className="font-semibold text-blue-400">TypeScript</span>,
            creating responsive and interactive user interfaces with a strong
            focus on performance and user experience. On the backend, I work
            with <span className="font-semibold text-blue-400">Python</span>,{" "}
            <span className="font-semibold text-blue-400">FastAPI</span>, and{" "}
            <span className="font-semibold text-blue-400">Django</span> to
            design robust APIs, develop backend services, and build reliable web
            applications.
          </p>

          <p>
            I enjoy working across the entire development lifecycle—from
            designing application architecture and developing APIs to building
            polished frontend experiences and integrating different systems. I’m
            always interested in learning new technologies, improving my
            development practices, and turning complex ideas into practical
            software solutions.
          </p>
        </div>

        <div className="border-t pt-6 border-gray-700">
          <h3 className="mb-4 text-xl font-semibold text-white">Tech Stack</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Python",
              "FastAPI",
              "Django",
              "REST APIs",
              "Full Stack Web Development",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

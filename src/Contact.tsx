import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Add your API/email service here
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Contact Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Work Together
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project in mind, a question, or just want to say hello? Feel
            free to send me a message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>

            <p className="mt-4 leading-7 text-slate-400">
              I&apos;m always open to discussing new projects, interesting
              ideas, or opportunities to work together. Send me a message and
              I&apos;ll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sky-400">
                  <FaEnvelope className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:aliizadi.software@gmail.com"
                    className="text-slate-200 transition hover:text-sky-400"
                  >
                    aliizadi.software@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sky-400">
                  <FaMapMarkerAlt className="text-xl" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>

                  <p className="text-slate-200">Iran, Qom</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 border-t border-slate-800 pt-8">
              <p className="mb-4 text-sm font-medium text-slate-400">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/aliizadi00dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-white"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://linkedin.com/in/aliizadi00dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-white"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">Send a Message</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-600 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-600 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-600 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            I usually respond within 24–48 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

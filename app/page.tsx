import Nav from "@/components/Nav";
import AnimatedText from "@/components/AnimatedText";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* HERO */}
      <section className="container-max pt-24">
        <AnimatedText text="I build fast, modern web experiences." />

        <p className="muted mt-6 max-w-xl">
         Full-stack developer with experience in HTML, CSS, JavaScript, and PHP for backend development, and a strong foundation in C++. I focus on building functional, clean, and maintainable applications while continuously improving my skills across both web and software development.
        </p>

        <div className="mt-8 flex gap-4">
          <a className="button-primary" href="#projects">
            View Projects
          </a>
          <a
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/20"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        subtitle="A mix of PHP backends and modern frontends. Click a card to view the live site or source code."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About Me"
        subtitle="A developer who cares about writing clean code and actually understanding how things work."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <p className="mb-3">
              I’m a Final Year Computer Science student and a developer who enjoys
              building both the frontend and the backend. I’ve worked with languages
              like C, C++, Java, PHP, and JavaScript, and I’m focusing on becoming
              very strong with modern web stacks like Next.js and Tailwind.
            </p>
            <p className="muted text-sm">
              I like understanding <span className="font-semibold">why</span> things are
              built a certain way, not just copying code. Performance, clear
              structure, and maintainability matter a lot to me.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold">Tech I use</h3>
            <ul className="mt-3 space-y-1 text-sm muted">
              <li>Next.js, React, Tailwind CSS</li>
              <li>PHP, MySQL</li>
              <li>Node.js, REST APIs</li>
              <li>C, C++, Java</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Tell me a bit about your project or what you’d like help with."
      >
        <form
          className="card p-6 grid gap-4 max-w-xl"
          action="https://formspree.io/f/xzzyzqlv"
          method="POST"
        >
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-brand-500"
              placeholder="Your Name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-brand-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-brand-500 resize-none"
              placeholder="Tell me about your project, budget, and timeline..."
            />
          </div>

          <button type="submit" className="button-primary">
            Send Message
          </button>
        </form>
      </Section>

      <Footer />
    </main>
  );
}

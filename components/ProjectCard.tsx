"use client";

import { motion } from "framer-motion";

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href: string;      // link to live demo / PHP site / GitHub
  image?: string;    // optional image path e.g. /projects/booking.png
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.01 }}
      className="card block overflow-hidden"
    >
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="hidden md:flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="muted mt-2">{project.blurb}</p>

        {/* mobile tags */}
        <div className="mt-4 flex gap-2 md:hidden">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

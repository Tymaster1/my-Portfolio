"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // fixed = stays at top when scrolling
      // inset-x-0 + top-0 = full width at top
      // z-50 = on top of everything
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className="
          container-max
          mt-2 md:mt-4
        "
      >
        <div
          className="
            flex items-center justify-between gap-4
            rounded-3xl
            bg-black/40
            border border-white/10
            backdrop-blur
            px-4 md:px-6
            py-3
          "
        >
          {/* Left side – name / logo */}
          <Link href="/" className="font-semibold tracking-tight text-white">
            Tyrell Norford
          </Link>

          {/* Right side – nav + socials */}
          <div className="flex items-center gap-6 text-sm">
            {/* Section links */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Tymaster1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1 rounded-full bg-white/5 hover:bg-white/15 transition"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ta-rel-norford-29239a2ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1 rounded-full bg-white/5 hover:bg-white/15 transition"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tymaster247/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 rounded-full bg-white/5 hover:bg-white/15 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

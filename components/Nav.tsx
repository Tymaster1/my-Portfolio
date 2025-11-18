"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container-max flex items-center justify-between py-6"
    >
      <Link href="/" className="font-semibold tracking-tight text-white">
        Tyrell Norford
      </Link>

      <div className="flex items-center gap-6 text-sm">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </motion.nav>
  );
}

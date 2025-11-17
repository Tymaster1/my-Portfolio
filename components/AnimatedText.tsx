"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="text-4xl md:text-6xl font-semibold leading-tight text-white">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

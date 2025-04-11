"use client";

import React from "react";
import { HeroHighlight } from "../ui/hero-highlight";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-accent dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center"
      >
        Hello, I&apos;m Anya Shapiro
        {". "}A full-stack developer.
      </motion.h1>
    </HeroHighlight>
  );
}

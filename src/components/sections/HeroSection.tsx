"use client";

import { motion } from "framer-motion";
import React from "react";

export function HeroSection() {
  return (
    <section className="hero">
      <motion.div className="pl-8 lg:pl-24 sm:pl-12 xs:pl-8 flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl xs:text-6xl md:text-9xl"
        >
          Full-stack developer.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-7xl xs:text-4xl md:text-7xl"
        >
          Half-decent human.
        </motion.h2>
      </motion.div>
    </section>
  );
}

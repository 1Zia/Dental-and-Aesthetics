"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function AnimatedReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

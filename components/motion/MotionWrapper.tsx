"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";

/* ── Rise Animation ──
   y: 40 → 0, opacity: 0 → 1, ease: "easeOut", duration: 0.5 */

const riseVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Trigger animation when element enters viewport */
  triggerOnView?: boolean;
}

export function Rise({ children, className, delay = 0, triggerOnView = true }: MotionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={riseVariants}
      initial="hidden"
      animate={triggerOnView ? (isInView ? "visible" : "hidden") : "visible"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0, triggerOnView = true }: MotionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      animate={triggerOnView ? (isInView ? "visible" : "hidden") : "visible"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Container ──
   Staggers children with max 0.08s between items */

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/** Wrap individual stagger children in this */
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={riseVariants}>
      {children}
    </motion.div>
  );
}

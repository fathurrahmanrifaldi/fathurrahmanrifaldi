import type { Variants } from "framer-motion";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns framer-motion Variants that respect prefers-reduced-motion.
 * When reduced, the variants resolve to immediate final state with no animation.
 */
export function fadeUpVariants(prefersReduced: boolean): Variants {
  if (prefersReduced) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
}

export function staggerContainerVariants(): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };
}

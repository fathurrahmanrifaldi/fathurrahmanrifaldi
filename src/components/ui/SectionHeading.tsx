import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: "cyan" | "violet" | "emerald";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = "cyan",
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  const gradientClasses = {
    cyan: "gradient-text-cyan",
    violet: "gradient-text-violet",
    emerald: "gradient-text-emerald",
  };

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium text-accent-cyan tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${gradientClasses[gradient]}`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TerminalWindow from "../ui/TerminalWindow";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const terminalLines = [
  { type: "command" as const, content: "whoami", delay: 50 },
  { type: "output" as const, content: "Information Systems Student" },
  { type: "blank" as const, content: "" },
  { type: "command" as const, content: "cat focus.txt", delay: 40 },
  { type: "output" as const, content: "→ Technology" },
  { type: "output" as const, content: "→ Data & Analytics" },
  { type: "output" as const, content: "→ Business Systems" },
  { type: "output" as const, content: "→ Problem Solving" },
  { type: "blank" as const, content: "" },
  { type: "command" as const, content: "echo $CURRENT_STATUS", delay: 35 },
  { type: "output" as const, content: "Learning → Building → Exploring" },
  { type: "blank" as const, content: "" },
  { type: "command" as const, content: "ls ./skills", delay: 45 },
  { type: "output" as const, content: "python/  javascript/  sql/  react/  data-analysis/  system-design/" },
  { type: "blank" as const, content: "" },
  { type: "command" as const, content: "cat mission.md", delay: 40 },
  { type: "output" as const, content: "Build meaningful digital solutions that bridge" },
  { type: "output" as const, content: "the gap between business needs and technology." },
];

export default function TechPlayground() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="tech-playground"
      className="relative py-24 lg:py-32"
      aria-label="Tech Playground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tech Playground"
          subtitle="A peek inside"
          gradient="cyan"
        />

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <TerminalWindow lines={terminalLines} title="~/portfolio" />

          <p className="text-center text-xs text-text-muted mt-6">
            This is an interactive terminal demonstration — not a real shell.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

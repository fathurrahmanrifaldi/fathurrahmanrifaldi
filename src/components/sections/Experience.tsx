import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FolderKanban } from "lucide-react";
import { timelineEntries } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const typeIcons = {
  education: GraduationCap,
  experience: Briefcase,
  project: FolderKanban,
};

const typeColors = {
  education: "border-accent-cyan bg-accent-cyan/10 text-accent-cyan",
  experience: "border-accent-violet bg-accent-violet/10 text-accent-violet",
  project: "border-accent-emerald bg-accent-emerald/10 text-accent-emerald",
};

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32"
      aria-label="Experience and Education"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My journey"
          gradient="violet"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-emerald opacity-20"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {timelineEntries.map((entry, index) => {
              const Icon = typeIcons[entry.type];
              const colorClass = typeColors[entry.type];

              return (
                <motion.div
                  key={entry.id}
                  initial={
                    prefersReduced ? {} : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${colorClass}`}
                  >
                    <Icon className="w-2.5 h-2.5" />
                  </div>

                  {/* Content */}
                  <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-text-muted bg-bg-secondary px-2.5 py-1 rounded">
                        {entry.period}
                      </span>
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${colorClass}`}
                      >
                        {entry.type.charAt(0).toUpperCase() +
                          entry.type.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-text-primary">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-accent-cyan mt-0.5">
                      {entry.organization}
                    </p>
                    <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                      {entry.description}
                    </p>

                    {entry.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] text-text-muted bg-bg-secondary border border-border rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

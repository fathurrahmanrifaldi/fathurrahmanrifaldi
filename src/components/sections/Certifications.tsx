import { motion, type Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ExternalLink } from "lucide-react";
import { certifications } from "../../data/certifications";
import SectionHeading from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type IconName = keyof typeof LucideIcons;

function getIcon(name: string): React.ElementType {
  const icon = LucideIcons[name as IconName];
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    return icon as React.ElementType;
  }
  return LucideIcons.Award;
}

const categoryColors: Record<string, string> = {
  "Data Analytics": "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
  Programming: "text-accent-blue border-accent-blue/20 bg-accent-blue/10",
  Database: "text-accent-violet border-accent-violet/20 bg-accent-violet/10",
  Cloud: "text-accent-emerald border-accent-emerald/20 bg-accent-emerald/10",
  "Information Systems": "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
};

export default function Certifications() {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-bg-secondary" aria-label="Certifications and Achievements">
      <div className="absolute inset-0 bg-dots opacity-15" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications & Achievements" subtitle="Continuous learning" gradient="emerald" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => {
            const Icon = getIcon(cert.icon);
            const colorClass = categoryColors[cert.category] || "text-text-muted border-border bg-bg-card";

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-[11px] text-text-muted font-mono">{cert.date}</span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${colorClass}`}>
                        {cert.category}
                      </span>
                    </div>
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:underline mt-3"
                      >
                        View Credential
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

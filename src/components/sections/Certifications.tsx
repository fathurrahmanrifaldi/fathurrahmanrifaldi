import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ExternalLink, Eye } from "lucide-react";
import { certifications, type Certification } from "../../data/certifications";
import SectionHeading from "../ui/SectionHeading";
import CertificateModal from "./CertificateModal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type IconName = keyof typeof LucideIcons;

function getIcon(name: string): React.ElementType {
  const icon = LucideIcons[name as IconName];
  if (
    typeof icon === "function" ||
    (typeof icon === "object" && icon !== null)
  ) {
    return icon as React.ElementType;
  }
  return LucideIcons.Award;
}

const categoryColors: Record<string, string> = {
  "Data Analytics": "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
  Programming: "text-accent-blue border-accent-blue/20 bg-accent-blue/10",
  Database: "text-accent-violet border-accent-violet/20 bg-accent-violet/10",
  Cloud: "text-accent-emerald border-accent-emerald/20 bg-accent-emerald/10",
  "Information Systems":
    "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10",
};

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certification | null>(null);
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      };

  return (
    <section
      id="certifications"
      className="relative py-24 lg:py-32 bg-bg-secondary"
      aria-label="Certifications and Achievements"
    >
      <div className="absolute inset-0 bg-dots opacity-15" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications & Achievements"
          subtitle="Continuous learning"
          gradient="emerald"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {certifications.map((cert) => {
            const Icon = getIcon(cert.icon);
            const colorClass =
              categoryColors[cert.category] ||
              "text-text-muted border-border bg-bg-card";

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                onClick={() => setSelectedCertificate(cert)}
                className="group relative bg-bg-card border border-border hover:border-accent-cyan/40 rounded-xl p-4 sm:p-5 lg:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] active:scale-[0.99] flex flex-col justify-between"
                role="button"
                tabIndex={0}
                aria-label={`View certificate preview for ${cert.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCertificate(cert);
                  }
                }}
              >
                <div>
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${colorClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border shrink-0 ${colorClass}`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Title and Issuer */}
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-2 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 line-clamp-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Card Footer / Actions */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-border/60 text-xs">
                  <span className="text-[11px] text-text-muted font-mono">
                    {cert.date}
                  </span>

                  <div className="flex items-center gap-3">
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-text-muted hover:text-accent-cyan hover:underline transition-colors"
                        aria-label={`View credential for ${cert.name}`}
                      >
                        <span>Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-accent-cyan font-medium group-hover:underline">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Target, Lightbulb, Wrench, CheckCircle, BookOpen, ListChecks } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import type { Project } from "../../data/projects";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const sections = [
  { key: "problem", label: "Problem", icon: Target },
  { key: "goal", label: "Goal", icon: Lightbulb },
  { key: "solution", label: "Solution", icon: Wrench },
  { key: "process", label: "Process", icon: ListChecks },
  { key: "technology", label: "Technology", icon: CheckCircle },
  { key: "result", label: "Result", icon: CheckCircle },
  { key: "lessonsLearned", label: "Lessons Learned", icon: BookOpen },
] as const;

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center">
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg-primary border border-border rounded-2xl shadow-2xl mt-[5vh] mx-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Case study: ${project.title}`}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-bg-primary/90 backdrop-blur-lg border-b border-border px-6 sm:px-8 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-1 text-[11px] font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full">
                    {project.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-card transition-colors shrink-0 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-8 py-8 space-y-8">
              <p className="text-text-secondary leading-relaxed">{project.shortDescription}</p>

              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-bg-card border border-border rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent-emerald/5 border border-accent-emerald/20">
                <p className="text-sm font-medium text-accent-emerald">↗ Impact: {project.impact}</p>
              </div>

              {sections.map(({ key, label, icon: Icon }) => {
                const content = project.caseStudy[key];
                if (!content) return null;
                return (
                  <div key={key} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-accent-cyan" />
                      <h3 className="text-base font-semibold text-text-primary">{label}</h3>
                    </div>
                    {key === "process" && Array.isArray(content) ? (
                      <ol className="space-y-2 ml-6">
                        {content.map((step, i) => (
                          <li key={i} className="text-sm text-text-secondary leading-relaxed list-decimal">{step}</li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-sm text-text-secondary leading-relaxed ml-6">{content}</p>
                    )}
                  </div>
                );
              })}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  View on GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

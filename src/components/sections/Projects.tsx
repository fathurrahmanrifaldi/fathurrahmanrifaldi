import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectModal from "./ProjectModal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/utils";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReduced = useReducedMotion();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32" aria-label="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Selected work" gradient="cyan" />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer",
                activeFilter === category
                  ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30"
                  : "text-text-muted border border-transparent hover:text-text-primary hover:bg-bg-card"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                {/* Project image area */}
                <div className="relative h-48 bg-gradient-to-br from-bg-secondary to-bg-card overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-border flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold gradient-text-cyan">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] font-medium text-text-muted bg-bg-secondary rounded border border-border">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] text-text-muted">+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  <p className="text-xs text-accent-emerald font-medium">↗ {project.impact}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-text-muted hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-text-muted hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-200"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-text-muted hover:text-accent-cyan transition-colors duration-200 cursor-pointer"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

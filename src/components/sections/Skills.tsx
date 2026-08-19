import { motion, type Variants } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type IconName = keyof typeof LucideIcons;

function getIcon(name: string): React.ElementType {
  const icon = LucideIcons[name as IconName];
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    return icon as React.ElementType;
  }
  return LucideIcons.Code2;
}

export default function Skills() {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-bg-secondary" aria-label="Skills">
      <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" gradient="violet" />

        <div className="space-y-12">
          {skillCategories.map((category) => {
            const CategoryIcon = getIcon(category.icon);
            return (
              <motion.div
                key={category.id}
                initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
                    <p className="text-sm text-text-muted">{category.description}</p>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {category.skills.map((skill) => {
                    const SkillIcon = getIcon(skill.icon);
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group relative bg-bg-card border border-border rounded-xl p-4 hover:border-accent-cyan/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <SkillIcon className="w-5 h-5 text-text-muted group-hover:text-accent-cyan transition-colors duration-300 shrink-0" />
                          <span className="text-sm font-medium text-text-primary truncate">{skill.name}</span>
                        </div>

                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-bg-primary border border-border rounded-lg text-xs text-text-secondary w-48 text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-10 shadow-xl">
                          {skill.description}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-border" />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

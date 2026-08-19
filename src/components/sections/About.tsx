import { motion, type Variants } from "framer-motion";
import { Database, Cpu, MonitorSmartphone } from "lucide-react";
import { personal } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const highlights = [
  {
    icon: MonitorSmartphone,
    title: "Information Systems",
    description: "Understanding business, technology, and systems.",
    gradient: "from-accent-cyan to-accent-blue",
  },
  {
    icon: Database,
    title: "Data",
    description: "Exploring data analysis, visualization, and insights.",
    gradient: "from-accent-blue to-accent-violet",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Building digital solutions through modern technologies.",
    gradient: "from-accent-emerald to-accent-cyan",
  },
];

const stats = [
  { label: "Projects Completed", value: personal.stats.projectsCompleted, suffix: "+" },
  { label: "Technologies Explored", value: personal.stats.technologiesExplored, suffix: "+" },
  { label: "Certifications", value: personal.stats.certifications, suffix: "" },
  { label: "Years Learning", value: personal.stats.yearsLearning, suffix: "+" },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="about" className="relative py-24 lg:py-32" aria-label="About me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Profile */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden border border-border group">
                <div className="aspect-[4/5] bg-gradient-to-br from-bg-card to-bg-secondary flex items-center justify-center">
                  <img
                    src={personal.profileImage}
                    alt={`Profile photo of ${personal.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent-cyan/10 rounded-xl -z-10" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border border-accent-violet/10 rounded-xl -z-10" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Right: Bio + Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-4">
              {personal.bio.map((paragraph, i) => (
                <motion.p key={i} variants={itemVariants} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card glow="cyan" className="text-center py-6">
                    <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-3 opacity-80`}>
                      <item.icon className="w-5 h-5 text-bg-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg border border-border bg-bg-card/50">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-cyan">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

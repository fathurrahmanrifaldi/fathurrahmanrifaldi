export interface TimelineEntry {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "experience" | "project";
  tags?: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "university",
    year: "2024",
    period: "2024 — Present",
    title: "Information Systems Student",
    organization: "[YOUR_UNIVERSITY]",
    description:
      "Studying Information Systems with a focus on the intersection of business processes, technology, and data-driven decision making. Engaged in coursework spanning database systems, system analysis, software development, and data analytics.",
    type: "education",
    tags: ["Information Systems", "Data Analytics", "Software Development"],
  },
  {
    id: "data-project",
    year: "2025",
    period: "Jan 2025 — Jun 2025",
    title: "Data Analytics Project",
    organization: "[PROJECT / ORGANIZATION NAME]",
    description:
      "Conducted data analysis and built interactive dashboards to visualize key metrics. Collaborated with a team to derive actionable insights from structured datasets.",
    type: "project",
    tags: ["Python", "Power BI", "Data Analysis"],
  },
  {
    id: "internship",
    year: "2025",
    period: "[START] — [END]",
    title: "[ROLE / POSITION]",
    organization: "[ORGANIZATION NAME]",
    description:
      "Contributed to [describe responsibilities]. Gained hands-on experience in [relevant skills or technologies]. Collaborated with cross-functional teams to deliver [outcomes].",
    type: "experience",
    tags: ["[Skill 1]", "[Skill 2]", "[Skill 3]"],
  },
  {
    id: "organization",
    year: "2024",
    period: "2024 — Present",
    title: "[ROLE / POSITION]",
    organization: "[STUDENT ORGANIZATION NAME]",
    description:
      "Active member contributing to [activities]. Developed leadership and teamwork skills through organizing events and managing projects.",
    type: "experience",
    tags: ["Leadership", "Teamwork", "Project Management"],
  },
];

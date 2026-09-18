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
    period: "2023 — Present",
    title: "Information Systems Student",
    organization: "Universitas Bina Sarana Informatika",
    description:
      "Studying Information Systems with a focus on the intersection of business processes, technology, and data-driven decision making. Engaged in coursework spanning database systems, system analysis, software development, and data analytics.",
    type: "education",
    tags: ["Information Systems", "Data Analytics", "Software Development"],
  },
  {
    id: "data-project",
    year: "2025",
    period: "Nov 2025 — Dec 2025",
    title: "Data Analytics Project",
    organization: "English Online Retail Transaction Dataset",
    description:
      "Conducted data analysis and built interactive dashboards to visualize key metrics. Collaborated with a team to derive actionable insights from structured datasets.",
    type: "project",
    tags: ["Excel", "Power BI", "Data Analysis"],
  },
  {
    id: "data-project",
    year: "2026",
    period: "Aug - Sept 2026",
    title: "Data Analytics Project",
    organization: "Olist E-Commerce Public Dataset",
    description:
      "Conducted data analysis and built interactive dashboards to visualize key metrics. Collaborated with a team to derive actionable insights from structured datasets.",
    type: "project",
    tags: ["SQL", "PostgreSQL", "Power BI"],
  },
];

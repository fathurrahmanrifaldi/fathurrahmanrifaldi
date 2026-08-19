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
    organization: "ANALISIS ONLINE RETAIL",
    description:
      "Conducted data analysis and built interactive dashboards to visualize key metrics. Collaborated with a team to derive actionable insights from structured datasets.",
    type: "project",
    tags: ["Excel", "Power BI", "Data Analysis"],
  },
  {
    id: "web-project",
    year: "2026",
    period: "May 2026 — June 2026",
    title: "Full-Stack Web Project",
    organization: "BASARA (Bank Sampah RW 042)",
    description:
      "Build a waste bank management system for the RW 042 community, making it easier to manage customer data, transactions, and waste sorting. This system helps to improve the efficiency of waste management in the community and provides a platform for waste recycling.",
    type: "project",
    tags: ["PHP", "Laravel", "JavaScript", "MySQL", "Bootstrap"],
  },
];

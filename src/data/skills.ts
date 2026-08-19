export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    description: "Core languages for building solutions",
    skills: [
      {
        name: "Python",
        icon: "FileCode",
        description: "Data analysis, scripting, and automation",
      },
      {
        name: "JavaScript",
        icon: "Braces",
        description: "Interactive web applications and dynamic UIs",
      },
      {
        name: "TypeScript",
        icon: "FileType",
        description: "Type-safe development for scalable applications",
      },
      {
        name: "SQL",
        icon: "Database",
        description: "Database querying and data manipulation",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "BarChart3",
    description: "Turning data into actionable insights",
    skills: [
      {
        name: "Excel",
        icon: "Table",
        description: "Advanced analysis, pivot tables, and modeling",
      },
      {
        name: "Python Pandas",
        icon: "FileSpreadsheet",
        description: "Data wrangling and transformation at scale",
      },
      {
        name: "Power BI",
        icon: "PieChart",
        description: "Business intelligence dashboards and reports",
      },
      {
        name: "Tableau",
        icon: "AreaChart",
        description: "Data storytelling through visual analytics",
      },
      {
        name: "Data Visualization",
        icon: "LineChart",
        description: "Communicating insights through effective visuals",
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: "Laptop",
    description: "Building modern digital solutions",
    skills: [
      {
        name: "HTML & CSS",
        icon: "Layout",
        description: "Semantic markup and responsive styling",
      },
      {
        name: "React",
        icon: "Atom",
        description: "Component-based UI development",
      },
      {
        name: "Next.js",
        icon: "Globe",
        description: "Full-stack React framework with SSR/SSG",
      },
      {
        name: "Git & GitHub",
        icon: "GitBranch",
        description: "Version control and collaborative development",
      },
    ],
  },
  {
    id: "information-systems",
    title: "Information Systems",
    icon: "Network",
    description: "Bridging business, technology, and people",
    skills: [
      {
        name: "System Analysis",
        icon: "Search",
        description: "Analyzing and designing information systems",
      },
      {
        name: "Database Design",
        icon: "DatabaseZap",
        description: "Relational modeling and normalization",
      },
      {
        name: "Business Process Modeling",
        icon: "Workflow",
        description: "Mapping and optimizing organizational processes",
      },
      {
        name: "UI/UX Design",
        icon: "Figma",
        description: "User-centered interface and experience design",
      },
      {
        name: "Requirements Analysis",
        icon: "ClipboardList",
        description: "Gathering and documenting system requirements",
      },
    ],
  },
];

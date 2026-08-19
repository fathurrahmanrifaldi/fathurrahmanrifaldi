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
    id: "data",
    title: "Data & Office",
    icon: "BarChart3",
    description: "Turning data into actionable insights",
    skills: [
      {
        name: "Excel",
        icon: "Table",
        description: "Advanced analysis, pivot tables, and modeling",
      },
      {
        name: "Google Workspace",
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
        name: "SQL",
        icon: "Database",
        description: "Database querying and data manipulation",
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
        name: "Laravel",
        icon: "Globe",
        description: "Backend",
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

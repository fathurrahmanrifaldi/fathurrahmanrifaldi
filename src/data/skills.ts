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
    title: "Data & Analytics",
    icon: "BarChart3",
    description: "Turning data into actionable insights",
    skills: [
      {
        name: "Excel",
        icon: "Table",
        description: "Pivot tables, Lookups, IF, SUMIFS",
      },
      {
        name: "Google Sheets",
        icon: "FileSpreadsheet",
        description: "Cloud-based spreadsheet for collaborative data analysis",
      },
      {
        name: "PostgreSQL",
        icon: "Database",
        description: "Relational database management system for structured data",
      },
      {
        name: "Dbeaver",
        icon: "DatabaseCheck",
        description: "Universal database tool for developers and data analysts",
      },
      {
        name: "Power BI",
        icon: "AreaChart",
        description: "Business intelligence dashboards and reports",
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
        icon: "Box",
        description: "PHP framework for web application development",
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
        name: "Ubuntu Server",
        icon: "Server",
        description: "Managing and maintaining Ubuntu servers",
      },
      {
        name: "Requirements Analysis",
        icon: "ClipboardList",
        description: "Gathering and documenting system requirements",
      },
    ],
  },
];

export type ProjectCategory =
  | "All"
  | "Data"
  | "Web"
  | "System"
  | "UI/UX";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  impact: string;
  caseStudy: {
    problem: string;
    goal: string;
    solution: string;
    process: string[];
    technology: string;
    result: string;
    lessonsLearned: string;
  };
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "Data",
  "Web",
  "System",
  "UI/UX",
];

export const projects: Project[] = [
  {
    id: "student-performance-analytics",
    title: "Student Performance Analytics Dashboard",
    shortDescription:
      "Interactive analytics dashboard that visualizes student academic performance patterns, identifying key factors affecting learning outcomes.",
    category: "Data",
    techStack: ["Python", "Pandas", "Power BI", "SQL", "Excel"],
    image: "/projects/analytics-dashboard.webp",
    githubUrl: "https://github.com/YOUR_GITHUB/student-analytics",
    impact: "Analyzed 1,000+ student records to identify 5 key performance drivers",
    caseStudy: {
      problem:
        "Educational institutions lack visibility into the factors that most significantly impact student academic performance, making it difficult to provide targeted interventions.",
      goal: "Build an interactive dashboard that transforms raw academic data into actionable insights for educators and administrators.",
      solution:
        "Developed a comprehensive analytics pipeline that cleans, processes, and visualizes student data across multiple dimensions including demographics, study habits, and course engagement.",
      process: [
        "Collected and cleaned student performance dataset",
        "Performed exploratory data analysis with Python and Pandas",
        "Designed data models and created SQL queries for key metrics",
        "Built interactive Power BI dashboards with drill-down capabilities",
        "Documented findings and recommendations",
      ],
      technology:
        "Python for data processing, Pandas for data manipulation, SQL for querying, Power BI for visualization, Excel for initial exploration.",
      result:
        "Delivered a dashboard that revealed attendance and study hours as the top 2 performance predictors, enabling data-driven academic support strategies.",
      lessonsLearned:
        "Learned the importance of data quality in analytics projects. Clean data is the foundation of meaningful insights. Also gained experience in translating technical findings into business-friendly visualizations.",
    },
  },
  {
    id: "task-management-app",
    title: "Collaborative Task Management Platform",
    shortDescription:
      "Full-stack web application for team task management with real-time updates, role-based access, and project tracking capabilities.",
    category: "Web",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/task-management.webp",
    githubUrl: "https://github.com/YOUR_GITHUB/task-manager",
    liveUrl: "https://your-task-app.vercel.app",
    impact: "Built a production-ready app supporting 50+ concurrent users",
    caseStudy: {
      problem:
        "Small teams often struggle with coordinating tasks across members, leading to missed deadlines and duplicated efforts.",
      goal: "Create an intuitive, responsive task management platform that enables seamless team collaboration.",
      solution:
        "Built a full-stack application using modern web technologies with a focus on real-time collaboration, clean UI, and scalable architecture.",
      process: [
        "Gathered requirements and designed user flows",
        "Created database schema and API architecture",
        "Implemented frontend with React and TypeScript",
        "Built RESTful API with proper authentication",
        "Deployed and tested with real user feedback",
      ],
      technology:
        "React + TypeScript for the frontend, Next.js for SSR and API routes, PostgreSQL for data persistence, Tailwind CSS for styling.",
      result:
        "Delivered a responsive web app with authentication, real-time task updates, and project analytics dashboard. Received positive feedback from test users.",
      lessonsLearned:
        "Full-stack development requires careful planning of data flow between frontend and backend. TypeScript proved invaluable for catching bugs early in the development cycle.",
    },
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System Design",
    shortDescription:
      "Complete system analysis and design for a small-business inventory management system, including ER diagrams, data flow diagrams, and UI prototypes.",
    category: "System",
    techStack: [
      "System Analysis",
      "UML",
      "ERD",
      "MySQL",
      "Figma",
    ],
    image: "/projects/inventory-system.webp",
    githubUrl: "https://github.com/YOUR_GITHUB/inventory-system",
    impact: "Designed a system reducing manual inventory tracking by 70%",
    caseStudy: {
      problem:
        "A small retail business relied on spreadsheets for inventory management, resulting in stock discrepancies, delayed reorders, and lost revenue.",
      goal: "Design a complete information system that automates inventory tracking, generates reorder alerts, and provides stock analytics.",
      solution:
        "Conducted full system analysis following SDLC methodology, producing comprehensive documentation and database design for an inventory management system.",
      process: [
        "Conducted stakeholder interviews and requirements gathering",
        "Created use case diagrams and data flow diagrams",
        "Designed entity-relationship diagrams and normalized database",
        "Developed UI/UX prototypes in Figma",
        "Documented system specifications and implementation plan",
      ],
      technology:
        "UML for system modeling, MySQL Workbench for database design, Figma for UI prototyping, draw.io for diagrams.",
      result:
        "Produced a complete system design document including database schema, API specifications, and clickable prototypes ready for development implementation.",
      lessonsLearned:
        "Understanding business processes deeply before designing technical solutions leads to better systems. The gap between business needs and technical requirements is where Information Systems expertise is most valuable.",
    },
  },
  {
    id: "portfolio-redesign",
    title: "E-Commerce UX Redesign",
    shortDescription:
      "User experience research and interface redesign for a local e-commerce platform, improving usability and conversion flow.",
    category: "UI/UX",
    techStack: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    image: "/projects/ux-redesign.webp",
    githubUrl: "https://github.com/YOUR_GITHUB/ecommerce-redesign",
    impact: "Redesign projected to improve checkout completion by 35%",
    caseStudy: {
      problem:
        "A local e-commerce platform experienced high cart abandonment rates due to a confusing checkout flow and inconsistent design patterns.",
      goal: "Redesign the user experience to reduce friction in the purchase journey and improve overall usability scores.",
      solution:
        "Conducted user research, created personas, and redesigned the complete checkout flow with a focus on clarity, trust signals, and mobile-first design.",
      process: [
        "Conducted heuristic evaluation of the existing platform",
        "Performed user interviews and surveys",
        "Created user personas and journey maps",
        "Designed wireframes and high-fidelity prototypes",
        "Conducted usability testing and iterated on feedback",
      ],
      technology:
        "Figma for design and prototyping, Maze for usability testing, Miro for user journey mapping.",
      result:
        "Delivered a comprehensive redesign with 15+ screens, a design system, and usability test results showing 40% faster task completion in the checkout flow.",
      lessonsLearned:
        "Good UX design is invisible — users should focus on their goals, not on figuring out the interface. Data from usability testing is more valuable than design assumptions.",
    },
  },
  {
    id: "sales-bi-dashboard",
    title: "Sales Business Intelligence Report",
    shortDescription:
      "Business intelligence solution analyzing sales data across regions, products, and time periods to identify growth opportunities.",
    category: "Data",
    techStack: ["Power BI", "SQL", "Excel", "DAX", "Data Modeling"],
    image: "/projects/bi-dashboard.webp",
    githubUrl: "https://github.com/YOUR_GITHUB/sales-bi",
    impact: "Identified 3 underperforming regions driving revenue optimization",
    caseStudy: {
      problem:
        "A company's sales data was siloed across multiple spreadsheets, making it impossible to get a unified view of business performance.",
      goal: "Create a centralized BI solution that provides real-time sales insights and supports data-driven decision-making.",
      solution:
        "Built an end-to-end BI pipeline from data consolidation through interactive dashboard delivery, with automated data refresh.",
      process: [
        "Consolidated data from multiple Excel sources",
        "Designed a star-schema data model",
        "Created DAX measures for KPIs",
        "Built multi-page Power BI dashboard",
        "Presented findings to stakeholders",
      ],
      technology:
        "Power BI for visualization, DAX for calculations, SQL for data extraction, Excel for data preparation.",
      result:
        "Delivered an interactive dashboard enabling real-time tracking of revenue, margins, and regional performance. Stakeholders gained the ability to self-serve analytics.",
      lessonsLearned:
        "A well-designed data model is the backbone of any BI solution. Investing time in proper data modeling pays off exponentially in report performance and flexibility.",
    },
  },
];

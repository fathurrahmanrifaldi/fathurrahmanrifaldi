import profileImage from "../assets/fathur.jpg";

export const personal = {
  name: "Fathur Rahman Rifaldi",
  firstName: "Fathur",
  lastName: "Rifaldi",
  title: "Information Systems Student",
  tagline: "Building at the intersection of Technology, Data & Business.",
  email: "fathurrahmanrifaldi@gmail.com",
  university: "Universitas Bina Sarana Informatika",
  location: "Bekasi, Indonesia",
  github: "https://github.com/fathurrahmanrifaldi",
  linkedin: "https://linkedin.com/in/fathurrahmanrifaldi",
  profileImage,
  resumeUrl: "#",
  bio: [
    "Final-year Information Systems student specializing in Data Analytics and Business Intelligence. I transform raw, complex data into clear strategic insights, combining strong analytical thinking with hands-on expertise in Python, SQL, Excel, and Power BI.",
    "Backed by a national BNSP Database Administrator certification, I have a solid technical foundation in database management and data modeling. I don't just query data—I bridge database architecture with real-world business context to build intuitive dashboards and drive data-driven decision-making.",
    "Detail-oriented and eager to tackle real-world business challenges, I am actively seeking a Data Analyst Internship or Junior Data Analyst role where I can contribute to optimizing processes and delivering measurable business impact.",
  ],
  currentFocus: [
    "Data Analytics & Visualization",
    "Business Intelligence",
    "Full-Stack Web Development",
    "Information Systems Design",
  ],
  careerInterests: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Software Developer",
    "Systems Analyst",
    "Technology Consultant",
  ],
  stats: {
    projectsCompleted: 10,
    technologiesExplored: 8,
    certifications: 3,
    yearsLearning: 3,
  },
  seo: {
    title: "Fathur Rahman Rifaldi — Information Systems Student | Technology & Data",
    description:
      "Portfolio of Fathur Rahman Rifaldi — Information Systems student passionate about technology, data analytics, and building meaningful digital solutions.",
    ogImage: "/og-image.png",
    url: "https://fathurrahmanrifaldi.vercel.app",
  },
} as const;

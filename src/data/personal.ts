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
    "A final-year Information Systems student specialising in database management, digital data administration, and the maintenance and analysis of information system issues.",
    "BNSP-certified (Database Administrator) with practical experience in managing relational database integration, validating thousands of rows of data via Excel/SQL, and compiling technical documentation modules.",
    "Possesses systematic analytical thinking, a high degree of attention to detail, and effective communication skills to support the day-to-day running of information technology services within the Human Resources Bureau.",
  ],
  currentFocus: [
    "Data Analytics & Visualization",
    "Full-Stack Web Development",
    "Information Systems Design",
    "Business Intelligence",
  ],
  careerInterests: [
    "Data Analyst",
    "Software Developer",
    "Business Intelligence Analyst",
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

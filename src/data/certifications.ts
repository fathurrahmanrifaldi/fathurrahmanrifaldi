export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl?: string;
  icon: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "bnsp-database-admin",
    name: "Database Administrator Certificate",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2026",
    category: "Database",
    credentialUrl: "#",
    icon: "Database",
    image: "/certificates/dba.png",
  },
  {
    id: "ibm-data-fundamentals",
    name: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    category: "Data Analytics",
    credentialUrl: "#",
    icon: "BarChart3",
    image: "/certificates/dba.png",
  },
  {
    id: "coursera-data-analytics",
    name: "Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "2026",
    category: "Data Analytics",
    credentialUrl: "#",
    icon: "BarChart3",
    image: "/certificates/dba.png",
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl?: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: "database-cert",
    name: "Database Administrator Certificate",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2026",
    category: "Database",
    credentialUrl: "#",
    icon: "Database",
  },
  {
    id: "data-analytics-cert",
    name: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    category: "Data Analytics",
    credentialUrl: "#",
    icon: "BarChart3",
  },
  {
    id: "data-analytics-cert",
    name: "Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "2026",
    category: "Data Analytics",
    credentialUrl: "#",
    icon: "BarChart3",
  },
];

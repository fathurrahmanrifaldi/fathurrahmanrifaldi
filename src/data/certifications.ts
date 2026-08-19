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
    id: "data-analytics-cert",
    name: "[Data Analytics Certification]",
    issuer: "[Issuing Organization]",
    date: "2025",
    category: "Data Analytics",
    credentialUrl: "#",
    icon: "BarChart3",
  },
  {
    id: "python-cert",
    name: "[Python Programming Certificate]",
    issuer: "[Issuing Organization]",
    date: "2025",
    category: "Programming",
    credentialUrl: "#",
    icon: "Code2",
  },
  {
    id: "database-cert",
    name: "[Database Management Certificate]",
    issuer: "[Issuing Organization]",
    date: "2024",
    category: "Database",
    credentialUrl: "#",
    icon: "Database",
  },
  {
    id: "cloud-cert",
    name: "[Cloud Computing Fundamentals]",
    issuer: "[Issuing Organization]",
    date: "2025",
    category: "Cloud",
    credentialUrl: "#",
    icon: "Cloud",
  },
  {
    id: "is-cert",
    name: "[Information Systems Certificate]",
    issuer: "[Issuing Organization]",
    date: "2024",
    category: "Information Systems",
    credentialUrl: "#",
    icon: "Network",
  },
];

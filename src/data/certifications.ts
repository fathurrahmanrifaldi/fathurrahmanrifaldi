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
    credentialUrl: "https://www.credly.com/badges/d37dd459-d5a4-459e-b3b9-3f2120c8baec/public_url",
    icon: "BarChart3",
    image: "/certificates/data-fundamental.png",
  },
  {
    id: "ibm-getting-started-data",
    name: "Getting Started with Data",
    issuer: "IBM SkillsBuild",
    date: "2026",
    category: "Data Analytics",
    credentialUrl: "https://www.credly.com/earner/earned/share/f4dfd2c7-a805-4c7a-b051-47788aed69e5",
    icon: "BarChart3",
    image: "/certificates/getting_started_data.png",
  },

];

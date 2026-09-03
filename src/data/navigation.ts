export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/fathurrahmanrifaldi",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/fathurrahmanrifaldi",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:fathurrahmanrifaldi@gmail.com",
    icon: "Mail",
  },
];

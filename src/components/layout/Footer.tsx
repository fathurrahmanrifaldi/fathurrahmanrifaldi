import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { personal } from "../../data/personal";
import { socialLinks } from "../../data/navigation";

const iconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Name and title */}
          <div className="text-center">
            <h3 className="text-lg font-bold gradient-text-cyan">
              {personal.name}
            </h3>
            <p className="text-sm text-text-muted mt-1">
              {personal.title} • Technology • Data
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom text */}
          <div className="flex flex-col items-center gap-2 text-xs text-text-muted">
            <p className="flex items-center gap-1">
              Designed & Built with{" "}
              <Heart className="w-3 h-3 text-accent-cyan fill-accent-cyan" /> curiosity.
            </p>
            <p>© {currentYear} {personal.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

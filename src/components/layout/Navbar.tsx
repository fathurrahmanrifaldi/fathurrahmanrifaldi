import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { personal } from "../../data/personal";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(
    navLinks.map((l) => l.href.replace("#", "")),
    120
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-text-primary hover:text-accent-cyan transition-colors"
            aria-label="Go to home"
          >
            <span className="gradient-text-cyan">{personal.firstName}</span>
            <span className="text-text-secondary font-normal">
              .{personal.lastName.toLowerCase()}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                  activeId === link.href.replace("#", "")
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.02]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer",
                    activeId === link.href.replace("#", "")
                      ? "text-accent-cyan bg-accent-cyan/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

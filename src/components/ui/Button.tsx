import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, href, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary hover:shadow-[0_0_24px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_16px_rgba(6,182,212,0.1)] active:scale-[0.98]",
      ghost:
        "text-text-secondary hover:text-text-primary hover:bg-bg-card",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes} role="button">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

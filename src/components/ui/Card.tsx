import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "violet" | "emerald" | "none";
}

export default function Card({
  children,
  className,
  hover = true,
  glow = "none",
}: CardProps) {
  const glowClasses = {
    cyan: "hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]",
    violet: "hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]",
    emerald: "hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "bg-bg-card border border-border rounded-xl p-6 transition-all duration-300",
        hover && "hover:border-border-hover hover:-translate-y-1",
        glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  );
}

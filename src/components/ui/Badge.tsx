import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "accent";
  dot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  dot = false,
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-bg-card border-border text-text-secondary",
    success: "bg-accent-emerald/10 border-accent-emerald/30 text-accent-emerald",
    accent: "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-full",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}

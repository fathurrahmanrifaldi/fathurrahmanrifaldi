import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface TerminalLine {
  type: "command" | "output" | "blank";
  content: string;
  delay?: number;
}

interface TerminalWindowProps {
  lines: TerminalLine[];
  title?: string;
}

export default function TerminalWindow({
  lines,
  title = "terminal",
}: TerminalWindowProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (prefersReduced) {
      setVisibleLines(lines.length);
      return;
    }

    if (visibleLines >= lines.length) return;

    const currentLine = lines[visibleLines];
    const delay = currentLine.delay ?? 30;

    if (currentLine.type === "command" && !isTyping) {
      setIsTyping(true);
      setCurrentText("");
      let charIdx = 0;

      const typeInterval = setInterval(() => {
        if (charIdx < currentLine.content.length) {
          setCurrentText(currentLine.content.slice(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => setVisibleLines((v) => v + 1), 200);
        }
      }, delay);

      return () => clearInterval(typeInterval);
    } else if (currentLine.type !== "command") {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, visibleLines, lines, isTyping, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl border border-border bg-bg-primary overflow-hidden font-mono text-sm"
      role="img"
      aria-label="Interactive terminal demonstration"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-text-muted ml-2">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 sm:p-6 min-h-[200px] space-y-1">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === "command" ? (
              <span>
                <span className="text-accent-emerald">$</span>{" "}
                <span className="text-text-primary">{line.content}</span>
              </span>
            ) : line.type === "blank" ? (
              <br />
            ) : (
              <span className="text-text-secondary">{line.content}</span>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {isTyping && visibleLines < lines.length && (
          <div className="leading-relaxed">
            <span className="text-accent-emerald">$</span>{" "}
            <span className="text-text-primary">{currentText}</span>
            <span className="animate-blink text-accent-cyan">▌</span>
          </div>
        )}

        {/* Blinking cursor at end */}
        {!isTyping && visibleLines >= lines.length && hasStarted && (
          <div className="leading-relaxed">
            <span className="text-accent-emerald">$</span>{" "}
            <span className="animate-blink text-accent-cyan">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}

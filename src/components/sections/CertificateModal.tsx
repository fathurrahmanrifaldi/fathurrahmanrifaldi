import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, CheckCircle2 } from "lucide-react";
import type { Certification } from "../../data/certifications";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface CertificateModalProps {
  certificate: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const prefersReduced = useReducedMotion();

  // 1. Lock body scroll when modal is open
  useEffect(() => {
    if (certificate) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [certificate]);

  // 2. Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (certificate) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate preview: ${certificate.name}`}
        >
          {/* Overlay / Backdrop with blur */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Close Button (Fixed at top-right, minimum 44x44px for comfortable touch area) */}
          <motion.button
            initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[60] w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-bg-card/95 hover:bg-bg-card-hover text-text-muted hover:text-text-primary border border-border hover:border-accent-cyan/50 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-cyan"
            aria-label="Close certificate preview"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Modal Content Container */}
          <motion.div
            initial={
              prefersReduced ? undefined : { opacity: 0, scale: 0.95, y: 15 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReduced ? undefined : { opacity: 0, scale: 0.95, y: 15 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-50 flex flex-col items-center justify-center max-w-[94vw] sm:max-w-[90vw] max-h-[88vh] select-none"
          >
            {/* Image Preview Container (Flexible sizing, bounds portrait & landscape proportionally) */}
            <div className="relative flex items-center justify-center max-w-[94vw] sm:max-w-[90vw] max-h-[64vh] sm:max-h-[74vh]">
              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={`Certificate for ${certificate.name}`}
                  className="max-w-[94vw] sm:max-w-[90vw] max-h-[64vh] sm:max-h-[74vh] w-auto h-auto object-contain rounded-xl border border-border/80 shadow-2xl bg-bg-card"
                />
              ) : (
                /* Fallback Graphic Card if image is not specified */
                <div className="w-[90vw] max-w-xl aspect-[1.4/1] bg-gradient-to-br from-bg-card via-bg-secondary to-bg-primary rounded-2xl border border-border p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-2xl">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-accent-cyan font-semibold">
                      {certificate.category}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-text-primary mt-1.5 sm:mt-2">
                      {certificate.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted mt-1">
                      {certificate.issuer}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-accent-emerald font-medium bg-accent-emerald/10 border border-accent-emerald/20 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Credential • {certificate.date}
                  </div>
                </div>
              )}
            </div>

            {/* Certificate Details Caption Bar (Mobile responsive flex) */}
            <div className="mt-2.5 sm:mt-3.5 w-full max-w-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-bg-card/95 border border-border backdrop-blur-md shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-accent-cyan uppercase tracking-wider">
                    {certificate.category}
                  </span>
                  <span className="text-text-muted text-xs">•</span>
                  <span className="flex items-center gap-1 text-[10px] sm:text-[11px] text-text-muted font-mono">
                    <Calendar className="w-3 h-3" />
                    {certificate.date}
                  </span>
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-text-primary truncate mt-0.5">
                  {certificate.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-text-muted truncate">
                  Issued by {certificate.issuer}
                </p>
              </div>

              {certificate.credentialUrl &&
                certificate.credentialUrl !== "#" && (
                  <a
                    href={certificate.credentialUrl}
                    target={
                      certificate.credentialUrl.startsWith("#")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      certificate.credentialUrl.startsWith("#")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    onClick={() => {
                      if (certificate.credentialUrl?.startsWith("#")) {
                        onClose();
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/20 transition-all duration-200 shrink-0 self-start sm:self-auto"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

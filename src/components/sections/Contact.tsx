import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { personal } from "../../data/personal";
import { socialLinks } from "../../data/navigation";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const iconMap: Record<string, React.ElementType> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-bg-secondary" aria-label="Contact">
      <div className="absolute inset-0 bg-dots opacity-15" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Build Something Meaningful." subtitle="Get in touch" gradient="cyan" />

        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12 -mt-8">
          Whether it&apos;s a project, collaboration, internship opportunity, or simply a conversation about technology and data — I&apos;d love to connect.
        </p>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || Mail;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border hover:border-accent-cyan/30 hover:bg-bg-card-hover transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent-cyan" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-primary group-hover:text-accent-cyan transition-colors">{link.label}</div>
                        <div className="text-xs text-text-muted truncate max-w-[200px]">
                          {link.href.replace("mailto:", "").replace("https://", "")}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-bg-card border border-border">
              <p className="text-sm text-text-secondary leading-relaxed">
                Based in <span className="text-text-primary font-medium">{personal.location}</span>.
                Currently studying at <span className="text-text-primary font-medium">{personal.university}</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-12 bg-bg-card border border-border rounded-xl min-h-[400px]">
                <CheckCircle className="w-12 h-12 text-accent-emerald mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Message Received!</h3>
                <p className="text-sm text-text-secondary max-w-sm mb-6">
                  Thank you for reaching out. This is a frontend demo — to actually send messages, integrate with an email service like EmailJS or Formspree.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border text-text-primary placeholder:text-text-muted text-sm outline-none transition-colors duration-200 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan ${errors.name ? "border-red-500" : "border-border"}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />{errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border text-text-primary placeholder:text-text-muted text-sm outline-none transition-colors duration-200 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan ${errors.email ? "border-red-500" : "border-border"}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />{errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-bg-secondary border text-text-primary placeholder:text-text-muted text-sm outline-none transition-colors duration-200 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan resize-y min-h-[120px] ${errors.message ? "border-red-500" : "border-border"}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3 h-3" />{errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>

                <p className="text-[11px] text-text-muted text-center">
                  This form is a frontend demo. Integrate with EmailJS or Formspree for real delivery.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

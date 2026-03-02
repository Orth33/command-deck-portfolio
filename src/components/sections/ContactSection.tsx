import { motion } from "framer-motion";
import { profileData } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";

const links = [
  { label: "Email", href: `mailto:${profileData.email}`, display: profileData.email },
  { label: "LinkedIn", href: profileData.linkedin, display: "linkedin.com/in/urbana" },
  { label: "GitHub", href: profileData.github, display: "github.com/urbana" },
];

export default function ContactSection() {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold font-sans text-foreground"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm text-muted-foreground"
      >
        Open to opportunities in ML engineering, research, and full-stack development.
      </motion.p>

      <div className="space-y-2">
        {links.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
          >
            <GlassCard className="py-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{link.label}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-foreground transition-colors nav-link"
                >
                  {link.display}
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <button className="px-5 py-2.5 text-sm font-mono rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors">
          Download Resume ↓
        </button>
      </motion.div>
    </div>
  );
}

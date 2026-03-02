import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold font-sans text-foreground"
      >
        Experience
      </motion.h2>

      <div className="space-y-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="w-full text-left"
            >
              <GlassCard
                className={`transition-all duration-200 ${
                  expandedId === exp.id ? "border-primary/40" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-xs text-secondary font-mono mt-0.5">{exp.organization}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono shrink-0">{exp.duration}</span>
                </div>

                {expandedId === exp.id && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 space-y-1.5 border-t border-border/50 pt-3"
                  >
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </GlassCard>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

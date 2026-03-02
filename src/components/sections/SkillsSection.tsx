import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { useState } from "react";

export default function SkillsSection() {
  const [tooltip, setTooltip] = useState<{ name: string; projects: string[]; achievement: string } | null>(null);

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold font-sans text-foreground"
      >
        Skills
      </motion.h2>

      {skillCategories.map((category, ci) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ci * 0.08 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-mono text-secondary font-medium">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <div key={skill.name} className="relative">
                <button
                  onMouseEnter={() => setTooltip(skill)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(skill)}
                  onBlur={() => setTooltip(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-muted/60 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {skill.name}
                </button>

                {tooltip?.name === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 sm:w-48 p-2 sm:p-3 glass-panel text-[10px] sm:text-xs space-y-1 pointer-events-none"
                  >
                    <p className="text-foreground font-medium">{skill.achievement}</p>
                    <p className="text-muted-foreground">
                      Used in: {skill.projects.join(", ")}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

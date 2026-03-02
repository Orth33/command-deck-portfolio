import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import CategoryBadge from "@/components/ui/CategoryBadge";

function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <button
        onClick={onBack}
        className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to projects
      </button>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <CategoryBadge label={project.category} variant={project.category} />
        </div>

        <p className="text-sm text-muted-foreground">{project.shortDescription}</p>

        <div className="space-y-3">
          {[
            { label: "Problem", content: project.problem },
            { label: "Approach", content: project.approach },
            { label: "Impact", content: project.impact },
          ].map((item) => (
            <div key={item.label}>
              <h4 className="text-xs font-mono text-secondary font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-xs font-mono text-secondary font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs font-mono rounded bg-muted/60 text-muted-foreground border border-border/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  const categoryColors = {
    ml: "border-secondary/40 hover:border-secondary",
    research: "border-secondary/40 hover:border-secondary",
    fullstack: "border-primary/40 hover:border-primary",
  };

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold font-sans text-foreground"
      >
        Projects
      </motion.h2>

      <AnimatePresence mode="wait">
        {selected ? (
          <ProjectDetail key="detail" project={selected} onBack={() => setSelected(null)} />
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className={`w-full text-left glass-panel p-4 border ${categoryColors[project.category]} transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-primary`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                    <CategoryBadge label={project.category} variant={project.category} />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

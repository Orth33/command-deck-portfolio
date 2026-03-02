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
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View on GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  const categoryColors: Record<string, string> = {
    ml: "border-secondary/40 hover:border-secondary",
    research: "border-secondary/40 hover:border-secondary",
    fullstack: "border-primary/40 hover:border-primary",
    frontend: "border-[#BE940E]/40 hover:border-[#BE940E]",
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
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
                  className={`w-full text-left glass-panel p-4 border ${categoryColors[project.category] ?? "border-yellow-400 hover:border-yellow-600"} transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-primary`}
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

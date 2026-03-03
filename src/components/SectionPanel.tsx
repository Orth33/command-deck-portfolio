import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/useTerminalStore";

const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const sectionMap = {
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  contact: ContactSection,
};

export default function SectionPanel() {
  const { activeSection, closeSection } = useTerminalStore();

  const Section = activeSection ? sectionMap[activeSection] : null;

  return (
    <AnimatePresence mode="wait">
      {Section && (
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:flex-1 h-full overflow-y-auto scrollbar-hide sm:scrollbar-thin p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div />
            <button
              onClick={closeSection}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted/50"
            >
              ✕ close
            </button>
          </div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12">
                <span className="text-sm text-muted-foreground font-mono animate-pulse">Loading...</span>
              </div>
            }
          >
            <Section />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useRef } from "react";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import SectionPanel from "@/components/SectionPanel";
import { useTerminalStore } from "@/store/useTerminalStore";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { isSectionOpen, activeSection } = useTerminalStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only scroll on mobile/small screens (lg breakpoint is 1024px)
    if (isSectionOpen && window.innerWidth < 1024 && sectionRef.current) {
      // Small delay to ensure the section content is being rendered
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
      console.log("testing scroll");
      return () => clearTimeout(timer);
    }
  }, [isSectionOpen, activeSection]);

  return (
    <div className="flex flex-col min-h-screen lg:h-screen bg-background md:pb-0 pb-20">
      {/* Top bar - Hidden on mobile, shown on SM and up */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border/30 shrink-0">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-mono font-semibold text-primary">CommandDeck</span>
          <span className="text-xs text-muted-foreground font-mono inline">v1.0</span>
        </div>
        <Navigation className="hidden sm:inline-flex" />
      </header>

      {/* Main content */}
      <main className={`flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden p-4 gap-4 ${!isSectionOpen ? "items-center justify-center" : ""}`}>
        <TerminalWindow />
        {isSectionOpen && (
          <>
            <div ref={sectionRef} className="sm:hidden w-full h-fit">
              <SectionPanel />
            </div>
          </>
        )}

        {!isMobile && (
          <SectionPanel />
        )}

      </main>

      {/* Mobile-only Floating Navigation */}
      <MobileNavigation />
    </div>
  );
};

export default Index;

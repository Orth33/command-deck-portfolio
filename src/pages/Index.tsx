import TerminalWindow from "@/components/terminal/TerminalWindow";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import SectionPanel from "@/components/SectionPanel";
import { useTerminalStore } from "@/store/useTerminalStore";

const Index = () => {
  const { isSectionOpen } = useTerminalStore();

  return (
    <div className="flex flex-col h-screen bg-background overflow-x-hidden md:pb-0 pb-20">
      {/* Top bar - Hidden on mobile, shown on SM and up */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border/30 shrink-0">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-mono font-semibold text-primary">CommandDeck</span>
          <span className="text-xs text-muted-foreground font-mono inline">v1.0</span>
        </div>
        <Navigation className="hidden sm:inline-flex" />
      </header>

      {/* Main content */}
      <main className={`flex flex-col lg:flex-row flex-1 overflow-hidden p-4 gap-4 ${!isSectionOpen ? "items-center justify-center" : ""}`}>
        <TerminalWindow />
        <SectionPanel />
      </main>

      {/* Mobile-only Floating Navigation */}
      <MobileNavigation />
    </div>
  );
};

export default Index;

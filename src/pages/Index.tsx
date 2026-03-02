import TerminalWindow from "@/components/terminal/TerminalWindow";
import Navigation from "@/components/Navigation";
import SectionPanel from "@/components/SectionPanel";
import { useTerminalStore } from "@/store/useTerminalStore";

const Index = () => {
  const { isSectionOpen } = useTerminalStore();

  return (
    <div className="flex flex-col h-screen bg-background overflow-x-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border/30 shrink-0">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-mono font-semibold text-primary">CommandDeck</span>
          <span className="text-xs text-muted-foreground font-mono hidden sm:inline">v1.0</span>
        </div>
        <Navigation />
      </header>

      {/* Main content */}
      <main className={`flex flex-col lg:flex-row flex-1 overflow-hidden p-4 gap-4 ${!isSectionOpen ? "items-center justify-center" : ""}`}>
        <TerminalWindow />
        <SectionPanel />
      </main>
    </div>
  );
};

export default Index;

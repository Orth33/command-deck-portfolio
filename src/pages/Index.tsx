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
        <Navigation className="hidden sm:block" />
      </header>

      {/* Main content */}
      <main className={`flex flex-col lg:flex-row flex-1 overflow-hidden p-4 gap-4 ${!isSectionOpen ? "items-center justify-center" : ""}`}>
        <TerminalWindow />
        <SectionPanel />
      </main>

      <footer className="w-full min-h-9 mb-2 fixed bottom-0 left-0 flex items-center justify-center">
        <nav className="flex gap-1 items-center select-none rounded-[12px] md:shadow-md max-h-9 bg-[#222222]">
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
              </svg>
            </div>
          </a>

          <div className="w-[2px] h-9 bg-[#636363]"></div>

          <a onClick={() => window.scrollTo({ top: 388, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12l3 3l3 -3l-3 -3z" />
                <path d="M15 12l3 3l3 -3l-3 -3z" />
                <path d="M9 6l3 3l3 -3l-3 -3z" />
                <path d="M9 18l3 3l3 -3l-3 -3z" />
              </svg>
            </div>
          </a>

          <div className="w-[2px] h-9 bg-[#636363]"></div>

          <a onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}>
            <div className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-white cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1 -3 3h-5v2h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2h2v-2h-5a3 3 0 0 1 -3 -3v-9a1 1 0 1 1 0 -2zm-4.293 4.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414" />
              </svg>
            </div>
          </a>

        </nav>
      </footer>
    </div>
  );
};

export default Index;

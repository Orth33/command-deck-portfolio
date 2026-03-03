import TerminalHistory from "./TerminalHistory";
import CommandInput from "./CommandInput";
import { motion } from "framer-motion";
import { useTerminalStore } from "@/store/useTerminalStore";

export default function TerminalWindow() {
  const { isSectionOpen } = useTerminalStore();

  return (
    <motion.div
      layout
      className={`flex flex-col max-h-full sm:h-full bg-terminal-bg rounded-xl border border-border/50 overflow-hidden shadow-2xl transition-all duration-400 ${isSectionOpen ? "w-full lg:w-[35%]" : "w-full lg:max-w-4xl lg:mx-auto"
        }`}
      transition={{ layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {/* Mac-style header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-header border-b border-border/50 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          urbana@commanddeck:~
        </span>
      </div>

      {/* History + Input */}
      <TerminalHistory />
      <CommandInput />
    </motion.div>
  );
}

import { useEffect, useRef } from "react";
import { useTerminalStore } from "@/store/useTerminalStore";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalHistory() {
  const { history } = useTerminalStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smoother scroll to bottom when history updates
    const timer = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
    return () => clearTimeout(timer);
  }, [history]);

  const getColor = (type: string) => {
    switch (type) {
      case "input": return "text-foreground";
      case "output": return "text-muted-foreground";
      case "system": return "text-secondary";
      case "error": return "text-destructive";
      default: return "text-foreground";
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide sm:scrollbar-thin" role="log" aria-label="Terminal output">
      <AnimatePresence initial={false}>
        {history.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`font-mono text-sm whitespace-pre-wrap mb-2 leading-relaxed ${getColor(entry.type)}`}
          >
            {entry.content}
          </motion.div>
        ))}
      </AnimatePresence>
      <div ref={bottomRef} className="h-4 shrink-0" />
    </div>
  );
}

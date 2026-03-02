import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { executeCommand, getAutocomplete } from "@/lib/commands";
import { useTerminalStore } from "@/store/useTerminalStore";

export default function CommandInput() {
  const [input, setInput] = useState("");
  const [hint, setHint] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { getPreviousCommand, getNextCommand } = useTerminalStore();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setHint(input ? getAutocomplete(input) : null);
  }, [input]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    executeCommand(input.trim());
    setInput("");
    setHint(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Tab" && hint) {
      e.preventDefault();
      setInput(hint);
      setHint(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = getPreviousCommand();
      if (prev !== null) setInput(prev);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = getNextCommand();
      if (next !== null) setInput(next);
    }
  };

  return (
    <div
      className="flex items-center gap-2 px-4 py-3 border-t border-border/50 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="text-primary font-mono text-sm font-semibold shrink-0">$</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent font-mono text-sm text-foreground outline-none caret-primary placeholder:text-muted-foreground/50"
          placeholder="Type a command..."
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input"
        />
        {hint && (
          <span className="absolute left-0 top-0 font-mono text-sm text-muted-foreground/30 pointer-events-none">
            {hint}
          </span>
        )}
      </div>
      <span className="w-2 h-5 bg-primary animate-blink rounded-sm" aria-hidden="true" />
    </div>
  );
}

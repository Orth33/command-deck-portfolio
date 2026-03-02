import { useTerminalStore, SectionType } from "@/store/useTerminalStore";

const COMMANDS: Record<string, { description: string; section?: SectionType }> = {
  help: { description: "Show available commands" },
  about: { description: "Learn about Urbana", section: "about" },
  skills: { description: "View technical skills", section: "skills" },
  projects: { description: "Explore project portfolio", section: "projects" },
  experience: { description: "View work experience", section: "experience" },
  contact: { description: "Get in touch", section: "contact" },
  resume: { description: "Download resume" },
  clear: { description: "Clear terminal" },
  close: { description: "Close active panel" },
};

export const COMMAND_LIST = Object.keys(COMMANDS);

export function getAutocomplete(input: string): string | null {
  if (!input) return null;
  const match = COMMAND_LIST.find((cmd) => cmd.startsWith(input.toLowerCase()) && cmd !== input.toLowerCase());
  return match || null;
}

export function executeCommand(input: string) {
  const store = useTerminalStore.getState();
  const trimmed = input.trim().toLowerCase();

  store.addEntry({ type: "input", content: `$ ${input}` });
  store.addCommand(trimmed);

  if (trimmed === "help") {
    const helpText = Object.entries(COMMANDS)
      .map(([cmd, { description }]) => `  ${cmd.padEnd(14)} ${description}`)
      .join("\n");
    store.addEntry({
      type: "output",
      content: `Available commands:\n\n${helpText}\n\nTip: Use ↑↓ arrows for command history.`,
    });
    return;
  }

  if (trimmed === "clear") {
    store.clearHistory();
    return;
  }

  if (trimmed === "close") {
    store.closeSection();
    store.addEntry({ type: "output", content: "Panel closed." });
    return;
  }

  if (trimmed === "resume") {
    store.addEntry({
      type: "output",
      content: "Preparing resume download... (Resume PDF would be downloaded here)",
    });
    return;
  }

  if (trimmed === "sudo surprise") {
    store.addEntry({
      type: "output",
      content: "🎉 You found the easter egg! Urbana appreciates your curiosity.",
    });
    return;
  }

  const cmd = COMMANDS[trimmed];
  if (cmd && cmd.section) {
    store.setActiveSection(cmd.section);
    store.addEntry({
      type: "output",
      content: `Opening ${trimmed}...`,
      section: cmd.section,
    });
    return;
  }

  store.addEntry({
    type: "error",
    content: `Command not recognized: '${input}'. Type 'help' to see available commands.`,
  });
}

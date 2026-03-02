import { useTerminalStore, SectionType } from "@/store/useTerminalStore";
import confetti from "canvas-confetti";


const COMMANDS: Record<string, { description: string; section?: SectionType }> = {
  help: { description: "Show available commands" },
  about: { description: "Learn about Urbana", section: "about" },
  skills: { description: "View technical skills", section: "skills" },
  projects: { description: "Explore project portfolio", section: "projects" },
  experience: { description: "View work experience", section: "experience" },
  contact: { description: "Get in touch", section: "contact" },
  resume: { description: "Download my resume" },
  theme: { description: "Toggle light/dark mode" },
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
    const link = document.createElement("a");
    link.href = "/CV_SD_Focused.pdf";
    link.download = "Urbana_Resume.pdf";
    link.click();
    store.addEntry({
      type: "output",
      content: "Downloading resume...",
    });
    return;
  }

  if (trimmed === "sudo surprise") {
    store.addEntry({
      type: "output",
      content: "🎉 You found the easter egg! Urbana appreciates your curiosity.",
    });
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#d946ef', '#4f46e5', '#14b8a6', '#f0f0f8'],
    });
    return;
  }

  if (trimmed === "theme") {
    const newTheme = store.theme === "light" ? "dark" : "light";
    store.setTheme(newTheme);
    store.addEntry({
      type: "output",
      content: `Theme switched to ${newTheme}.`,
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

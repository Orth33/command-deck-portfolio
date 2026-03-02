import { create } from "zustand";

export type SectionType = "about" | "skills" | "projects" | "experience" | "contact" | null;

interface HistoryEntry {
  id: string;
  type: "input" | "output" | "system" | "error";
  content: string;
  section?: SectionType;
}

interface TerminalState {
  history: HistoryEntry[];
  commandHistory: string[];
  commandIndex: number;
  activeSection: SectionType;
  isSectionOpen: boolean;
  theme: "light" | "dark";
  addEntry: (entry: Omit<HistoryEntry, "id">) => void;
  addCommand: (cmd: string) => void;
  getPreviousCommand: () => string | null;
  getNextCommand: () => string | null;
  setActiveSection: (section: SectionType) => void;
  clearHistory: () => void;
  closeSection: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

let entryId = 0;

export const useTerminalStore = create<TerminalState>((set, get) => ({
  history: [
    {
      id: "welcome",
      type: "system",
      content: `Welcome to Urbana's Command Deck.\n\nType 'help' to begin.`,
    },
  ],
  commandHistory: [],
  commandIndex: -1,
  activeSection: null,
  isSectionOpen: false,
  theme: "dark",

  addEntry: (entry) =>
    set((state) => ({
      history: [...state.history, { ...entry, id: `entry-${++entryId}` }],
    })),

  addCommand: (cmd) =>
    set((state) => ({
      commandHistory: [cmd, ...state.commandHistory],
      commandIndex: -1,
    })),

  getPreviousCommand: () => {
    const state = get();
    const newIndex = Math.min(state.commandIndex + 1, state.commandHistory.length - 1);
    if (newIndex >= 0 && newIndex < state.commandHistory.length) {
      set({ commandIndex: newIndex });
      return state.commandHistory[newIndex];
    }
    return null;
  },

  getNextCommand: () => {
    const state = get();
    const newIndex = state.commandIndex - 1;
    if (newIndex >= 0) {
      set({ commandIndex: newIndex });
      return state.commandHistory[newIndex];
    }
    set({ commandIndex: -1 });
    return "";
  },

  setActiveSection: (section) =>
    set({ activeSection: section, isSectionOpen: section !== null }),

  clearHistory: () =>
    set({
      history: [
        {
          id: "welcome-clear",
          type: "system",
          content: "Terminal cleared. Type 'help' for commands.",
        },
      ],
    }),

  closeSection: () => set({ activeSection: null, isSectionOpen: false }),

  setTheme: (theme) => {
    set({ theme });
    const htmlElement = document.documentElement;
    if (theme === "light") {
      htmlElement.classList.add("light");
    } else {
      htmlElement.classList.remove("light");
    }
  },
}));

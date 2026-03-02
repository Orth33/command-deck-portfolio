import { useTerminalStore, SectionType } from "@/store/useTerminalStore";
import { executeCommand } from "@/lib/commands";

const navItems: { label: string; command: string; section: SectionType }[] = [
  { label: "About", command: "about", section: "about" },
  { label: "Skills", command: "skills", section: "skills" },
  { label: "Projects", command: "projects", section: "projects" },
  { label: "Experience", command: "experience", section: "experience" },
  { label: "Contact", command: "contact", section: "contact" },
];

export default function Navigation() {
  const { activeSection } = useTerminalStore();

  return (
    <nav className="flex items-center gap-0.5 sm:gap-2 overflow-x-auto scrollbar-hide w-full justify-end" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          key={item.command}
          onClick={() => executeCommand(item.command)}
          className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-md transition-all duration-200 whitespace-nowrap ${activeSection === item.section
            ? "bg-primary/15 text-primary border border-primary/30"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}


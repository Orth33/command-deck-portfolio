import { useTerminalStore, SectionType } from "@/store/useTerminalStore";
import { executeCommand } from "@/lib/commands";
import { FiUser, FiCode, FiFolder, FiBriefcase, FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navItems: { label: string; command: string; section: SectionType; icon: any }[] = [
    { label: "About", command: "about", section: "about", icon: FiUser },
    { label: "Skills", command: "skills", section: "skills", icon: FiCode },
    { label: "Projects", command: "projects", section: "projects", icon: FiFolder },
    { label: "Experience", command: "experience", section: "experience", icon: FiBriefcase },
    { label: "Contact", command: "contact", section: "contact", icon: FiMail },
];

export default function MobileNavigation() {
    const { activeSection } = useTerminalStore();

    return (
        <nav
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden w-[90%] max-w-sm"
            role="navigation"
            aria-label="Mobile navigation"
        >
            <div className="glass-panel flex items-center justify-around py-2 px-1 shadow-2xl border-white/10">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.section;

                    return (
                        <button
                            key={item.command}
                            onClick={() => executeCommand(item.command)}
                            aria-label={item.label}
                            className={cn(
                                "relative p-2 rounded-xl transition-all duration-200 group flex flex-col items-center",
                                isActive
                                    ? "text-primary scale-105"
                                    : "text-muted-foreground hover:text-primary hover:-translate-y-[2px]"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "w-6 h-6 stroke-[1.5px] transition-all duration-200",
                                    isActive && "filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]"
                                )}
                            />

                            {/* Active Indicator Underline */}
                            {isActive && (
                                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
                            )}

                            {/* Focus Ring - Accessibility */}
                            <span className="absolute inset-0 rounded-xl ring-primary/50 group-focus-visible:ring-2 pointer-events-none" />

                            {/* Subtle Active Glow Backdrop */}
                            {isActive && (
                                <span className="absolute inset-0 bg-primary/5 rounded-xl -z-10 animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

interface BadgeProps {
  label: string;
  variant?: "ml" | "fullstack" | "research" | "default";
}

export default function CategoryBadge({ label, variant = "default" }: BadgeProps) {
  const styles = {
    ml: "bg-secondary/15 text-secondary border-secondary/30",
    research: "bg-secondary/15 text-secondary border-secondary/30",
    fullstack: "bg-primary/15 text-primary border-primary/30",
    default: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-mono font-medium rounded-full border ${styles[variant]}`}>
      {label}
    </span>
  );
}

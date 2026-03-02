import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "primary" | "secondary" | "none";
}

export default function GlassCard({ children, className = "", glow = "none" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel p-5 ${glow === "primary" ? "glow-primary" : glow === "secondary" ? "glow-secondary" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

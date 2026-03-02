import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { profileData } from "@/lib/data";

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold font-sans text-foreground"
      >
        About
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="shrink-0 flex items-center justify-center"
        >
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden glow-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />

            <img
              src="https://lh3.googleusercontent.com/d/1LCXTay7xoE0-ZWz8gOqf3lnbD9537fHP"
              alt={profileData.name}
              className="w-full h-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />

          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="flex-1 space-y-3"
        >
          <h3 className="text-lg font-semibold text-foreground">{profileData.name}</h3>
          <p className="text-sm text-secondary font-mono">{profileData.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{profileData.bio}</p>
          {profileData.subtitle && <p className="text-sm text-muted-foreground leading-relaxed">{profileData.subtitle}</p>}

          {/* Location / status */}
          <div className="flex items-center gap-2 font-mono text-sm text-secondary">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {profileData.stats.map((stat, i) => (
          <GlassCard key={stat.label} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <p className="text-2xl font-bold text-primary font-mono">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

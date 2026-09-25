// src/components/ui/GlassCard.tsx
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge tailwind classes cleanly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  const isInteractive = !!onClick;
  
  return (
    <motion.div
      onClick={onClick}
      whileHover={isInteractive ? { y: -4, scale: 1.01 } : {}}
      whileTap={isInteractive ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-slate-200/40 rounded-3xl p-6 md:p-8",
        isInteractive && "cursor-pointer hover:shadow-xl hover:shadow-slate-200/60 transition-shadow",
        className
      )}
    >
      {/* Subtle top inner reflection for depth */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
      
      {children}
    </motion.div>
  );
}
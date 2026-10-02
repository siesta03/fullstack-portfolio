import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedShinyText({
  children,
  className,
}: AnimatedShinyTextProps) {
  return (
    <motion.p
      style={{
        backgroundImage: 'linear-gradient(110deg, transparent 20%, rgba(50,50,50,0.8) 50%, transparent 80%)',
        backgroundSize: '200% auto',
      }}
      animate={{
        backgroundPosition: ['200% center', '-200% center']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      }}
      className={cn(
        "inline-block text-transparent bg-clip-text text-slate-700 bg-white",
        className
      )}
    >
      {children}
    </motion.p>
  );
}

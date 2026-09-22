import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  accentGlow?: boolean;
}

export default function GlassCard({ children, accentGlow = false }: GlassCardProps) {
  return (
    <div className="relative group">
      {/* Soft accent lighting behind the card */}
      {accentGlow && (
        <div className="absolute -inset-0.5 bg-red-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      )}
      
      {/* The Glassmorphism Container */}
      <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-gray-100">
        {children}
      </div>
    </div>
  );
}
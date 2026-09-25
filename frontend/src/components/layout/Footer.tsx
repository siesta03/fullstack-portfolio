import { Mail, Phone } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

// Add this custom LinkedIn SVG component
const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-20 pb-12 px-6">
      <GlassCard className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 rounded-[2rem]">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Haziq Redzuan</h3>
          <p className="text-sm text-slate-500 mt-1 font-medium">Klang, Selangor</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a 
            href="mailto:haziqamani579@gmail.com" 
            className="flex items-center gap-2 px-5 py-2.5 bg-white/50 hover:bg-white/80 border border-slate-200 rounded-full text-sm font-semibold text-slate-700 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a 
            href="tel:+60189779241" 
            className="flex items-center gap-2 px-5 py-2.5 bg-white/50 hover:bg-white/80 border border-slate-200 rounded-full text-sm font-semibold text-slate-700 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <a 
            href="https://www.linkedin.com/in/haziq-redzuan" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-colors shadow-md"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

      </GlassCard>
    </footer>
  );
}
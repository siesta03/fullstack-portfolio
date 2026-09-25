// src/pages/Home.tsx
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Code2, Camera, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';

const containerVariants: Variants = { // <-- Add : Variants
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = { // <-- Add : Variants
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

export default function Home() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-20 pt-12 pb-24"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="text-center max-w-3xl mx-auto px-4 mt-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Bridging logic <br className="hidden md:block" /> 
          <span className="text-slate-400">&</span> creative design.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Full-stack developer and multimedia producer specializing in scalable software architecture, 3D simulations, and high-contrast commercial media.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/it-work" className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            View Software <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/photography" className="w-full sm:w-auto px-8 py-3 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-white/80 transition-colors flex items-center justify-center gap-2">
            View Media
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Background</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Detail-oriented Computer Science graduate offering a versatile technical skill set. I actively bridge programming logic with multimedia production, developing interactive applications and managing high-volume commercial digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-auto">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-full">
                <GraduationCap className="w-4 h-4" />
              </div>
              UiTM Shah Alam & Kuala Terengganu
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-full">
                <MapPin className="w-4 h-4" />
              </div>
              Klang, Selangor
            </div>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Technical Stack</h2>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'C#', 'Unity', 'Blender', 'Adobe Lightroom', 'CapCut'].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 text-xs font-medium bg-white/60 border border-slate-200 rounded-full text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.section>

      {/* Work Preview Section */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/it-work" className="block focus:outline-none">
          <GlassCard className="h-full flex flex-col group">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl w-fit mb-6 group-hover:scale-105 transition-transform">
              <Code2 className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Software Engineering</h3>
            <p className="text-slate-600 mb-6">
              SaaS platforms, driving simulators, and full-stack web applications utilizing React and Node.js.
            </p>
            <div className="mt-auto text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </div>
          </GlassCard>
        </Link>

        <Link to="/photography" className="block focus:outline-none">
          <GlassCard className="h-full flex flex-col group">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl w-fit mb-6 group-hover:scale-105 transition-transform">
              <Camera className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Media & Photography</h3>
            <p className="text-slate-600 mb-6">
              Commercial studio shoots, event coverage, and high-quality digital asset production.
            </p>
            <div className="mt-auto text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              View Gallery <ArrowRight className="w-4 h-4" />
            </div>
          </GlassCard>
        </Link>
      </motion.section>
    </motion.div>
  );
}
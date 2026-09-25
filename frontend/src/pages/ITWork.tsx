// src/pages/ITWork.tsx
import { useState } from 'react';
import { motion,  type Variants } from 'framer-motion';
import { Code2, Layers} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Modal from '../components/ui/Modal';
import { itProjects } from '../data/portfolioData';

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

// Add this custom GitHub SVG component
const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function ITWork() {
  const [selectedProject, setSelectedProject] = useState<typeof itProjects[0] | null>(null);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="pt-12">
      
      {/* Page Header */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
          <Code2 className="w-4 h-4" /> Software Engineering
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          IT & Software Projects
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          A showcase of full-stack applications, SaaS platforms, and 3D simulation environments developed using modern web frameworks and game engines.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itProjects.map((project) => (
          <GlassCard 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="flex flex-col h-full"
          >
            <div className="aspect-video w-full bg-slate-100 rounded-xl mb-6 overflow-hidden border border-slate-200/60 flex items-center justify-center">
              {/* Replace this div with an actual <img /> when you have screenshots */}
              <span className="text-slate-400 font-medium text-sm">Image Placeholder: {project.title}</span>
            </div>
            <p className="text-blue-600 text-sm font-semibold mb-2">{project.category}</p>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{project.title}</h2>
            <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
            
            <div className="mt-auto flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-md">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium rounded-md">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-6">
            <div className="aspect-video w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/60 flex items-center justify-center">
              <span className="text-slate-400 font-medium">High-Res Image: {selectedProject.title}</span>
            </div>
            
            <div>
              <p className="text-blue-600 text-sm font-semibold mb-1">{selectedProject.category}</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{selectedProject.description}</p>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-slate-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" /> View Source
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

    </motion.div>
  );
}
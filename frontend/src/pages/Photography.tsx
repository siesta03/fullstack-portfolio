// src/pages/Photography.tsx
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Camera, Aperture, MapPin } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Modal from '../components/ui/Modal';
import { photographyWork } from '../data/portfolioData';

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

export default function Photography() {
  const [selectedMedia, setSelectedMedia] = useState<typeof photographyWork[0] | null>(null);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="pt-12">
      
      {/* Page Header */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
          <Camera className="w-4 h-4" /> Visual Media
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Commercial & Event Photography
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Freelance photography and digital asset production, ranging from studio product shoots to live, fast-paced event documentation.
        </p>
      </motion.div>

      {/* Media Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photographyWork.map((work) => (
          <GlassCard 
            key={work.id} 
            onClick={() => setSelectedMedia(work)}
            className="flex flex-col h-full group"
          >
            <div className="aspect-[4/3] w-full bg-slate-100 rounded-xl mb-6 overflow-hidden border border-slate-200/60 relative">
               {/* Replace this div with an actual <img /> */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm transition-transform duration-700 group-hover:scale-105">
                 Cover Image: {work.title}
               </div>
            </div>
            <p className="text-rose-600 text-sm font-semibold mb-2">{work.category}</p>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{work.title}</h2>
            <p className="text-slate-600 mb-4 line-clamp-2">{work.description}</p>
          </GlassCard>
        ))}
      </motion.div>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedMedia} onClose={() => setSelectedMedia(null)}>
        {selectedMedia && (
          <div className="space-y-6">
            {/* Image Carousel Placeholder */}
            <div className="grid grid-cols-2 gap-4">
              {selectedMedia.images.map((img, idx) => (
                <div key={idx} className={`bg-slate-100 rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 text-sm font-medium ${idx === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                  {img} Placeholder
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <p className="text-rose-600 text-sm font-semibold mb-1">{selectedMedia.category}</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedMedia.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{selectedMedia.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/50 border border-slate-200 rounded-2xl p-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Aperture className="w-3.5 h-3.5" /> Equipment Used
                  </h4>
                  <p className="text-slate-800 font-medium text-sm">{selectedMedia.gear}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Location
                  </h4>
                  <p className="text-slate-800 font-medium text-sm">{selectedMedia.location}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

    </motion.div>
  );
}
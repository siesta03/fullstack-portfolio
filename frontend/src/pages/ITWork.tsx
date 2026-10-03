import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Gamepad2 } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import { BlurFade } from '../components/ui/BlurFade';
import { itProjects } from '../data/portfolioData';

export default function ITWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleProject = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = (e: React.MouseEvent, project: typeof itProjects[0]) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="w-full min-h-screen bg-[#EBEBEB] text-gray-900 pb-40 font-sans">
      
      {/* 1. EDITORIAL HEADER SECTION */}
      <div className="w-full pt-32 pb-16 md:pt-48 md:pb-24 border-b-[8px] border-gray-900">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <BlurFade delay={0.1} inView>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-gray-900 leading-[0.8] uppercase">
              SYS.LOG <br />
              <span className="font-serif font-normal italic text-gray-500">
                03.
              </span>
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.2} inView className="max-w-md">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-4 border-b-[2px] border-gray-900 pb-2 inline-block">
              Software Engineering
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              A structured index of systems, platforms, and architectures. Raw logs of full-stack development, simulations, and algorithmic problem-solving.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* 2. THE CHANGELOG TABLE */}
      <div className="w-full max-w-[100rem] mx-auto pt-12 md:pt-24 flex flex-col">
        
        {/* TABLE HEADER */}
        <div className="hidden md:flex w-full px-6 md:px-12 py-4 border-b-[4px] border-gray-900 font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
          <div className="flex-[0.5]">ID</div>
          <div className="flex-[2]">SYSTEM / TITLE</div>
          <div className="flex-[1.5]">DOMAIN</div>
          <div className="flex-[0.5] text-right">ACTION</div>
        </div>

        {/* TABLE ROWS */}
        <div className="w-full flex flex-col">
          {itProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <BlurFade delay={0.1 + (index * 0.1)} inView key={project.id}>
                <div className="w-full flex flex-col border-b-[2px] border-gray-900">
                  
                  {/* ROW HEADER (Click to expand) */}
                  <div 
                    onClick={() => toggleProject(project.id)}
                    className={`w-full flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-6 md:px-12 cursor-pointer transition-colors duration-300 gap-2 md:gap-0
                      ${isExpanded ? 'bg-gray-900 text-[#EBEBEB]' : 'hover:bg-gray-200 text-gray-900'}`}
                  >
                    <div className="flex-[0.5] font-mono font-bold tracking-widest text-xs md:text-sm opacity-50 md:opacity-100">
                      PRJ_0{index + 1}
                    </div>
                    <div className="flex-[2] text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                      {project.title}
                    </div>
                    <div className="flex-[1.5] font-mono text-xs uppercase tracking-widest mt-2 md:mt-0 opacity-70">
                      [{project.category}]
                    </div>
                    <div className="flex-[0.5] text-left md:text-right font-mono text-2xl font-black mt-4 md:mt-0">
                      {isExpanded ? '-' : '+'}
                    </div>
                  </div>

                  {/* EXPANDED CONTENT ACCORDION */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden bg-[#EBEBEB] text-gray-900"
                      >
                        <div className="p-6 md:p-12 border-t-[4px] border-gray-900 flex flex-col xl:flex-row gap-12 xl:gap-24">
                          
                          {/* Left: Metadata & Description */}
                          <div className="flex-1 flex flex-col gap-8 md:gap-12">
                            <p className="text-base md:text-xl font-medium leading-relaxed max-w-2xl text-gray-800">
                              {project.description}
                            </p>
                            
                            {/* Tech Stack */}
                            <div>
                              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b-[2px] border-gray-900 pb-2 inline-block text-gray-900">
                                ARCHITECTURE // STACK
                              </h4>
                              <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.techStack.map(tech => (
                                  <span key={tech} className="font-mono text-xs md:text-sm font-bold uppercase border-[2px] border-gray-900 px-3 py-1 bg-white text-gray-900 shadow-[2px_2px_0px_rgba(17,24,39,1)]">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Action Links */}
                            {project.link && (
                              <div className="pt-4">
                                <a 
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-3 font-black uppercase text-xl md:text-2xl border-[4px] border-gray-900 px-6 py-4 bg-[#EBEBEB] text-gray-900 hover:bg-gray-900 hover:text-[#EBEBEB] transition-colors duration-300 shadow-[6px_6px_0px_rgba(17,24,39,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                                >
                                  {project.linkType === 'github' ? 'ACCESS_REPO' : 
                                   project.linkType === 'unity' ? 'INIT_SIMULATION' : 
                                   'LAUNCH_SYS'} 
                                  
                                  {project.linkType === 'github' ? <GithubIcon className="w-6 h-6" /> :
                                   project.linkType === 'unity' ? <Gamepad2 className="w-6 h-6" /> :
                                   <ExternalLink className="w-6 h-6" />}
                                </a>
                              </div>
                            )}
                          </div>

                          {/* Right: Brutalist Image Viewer */}
                          <div className="flex-1 w-full max-w-3xl">
                            <div className="w-full relative border-[4px] border-gray-900 bg-gray-200 p-2 md:p-4 shadow-[8px_8px_0px_rgba(17,24,39,1)]">
                              
                              {/* Metadata Bar */}
                              <div className="flex justify-between items-center border-b-[2px] border-gray-900 pb-2 mb-4 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600">
                                <span>VIEWPORT // {currentImageIndex + 1}/{project.images.length}</span>
                                <span className="text-gray-900">RENDER_ACTIVE</span>
                              </div>

                              {/* Image Container */}
                              <div 
                                className="relative aspect-video w-full overflow-hidden bg-gray-300 border-[2px] border-gray-900 cursor-pointer group p-4 md:p-8"
                                onClick={(e) => handleNextImage(e, project)}
                              >
                                <AnimatePresence mode="wait">
                                  <motion.img
                                    key={currentImageIndex}
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} preview ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </AnimatePresence>
                                
                                {/* Overlay Next Hint */}
                                {project.images.length > 1 && (
                                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-gray-900 text-[#EBEBEB] font-mono text-xs font-bold uppercase px-4 py-2 border-[2px] border-gray-900">
                                      NEXT_FRAME
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
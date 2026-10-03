import { motion } from 'framer-motion';
import { BlurFade } from '../ui/BlurFade';

export default function AboutSection() {
  const skills = [
    { name: "React", style: "font-black uppercase tracking-widest" },
    { name: "TypeScript", style: "font-serif italic text-gray-400" },
    { name: "Node.js", style: "font-black uppercase tracking-widest" },
    { name: "PostgreSQL", style: "font-serif italic text-gray-400" },
    { name: "C#", style: "font-black uppercase tracking-widest" },
    { name: "Unity", style: "font-serif italic text-gray-400" },
    { name: "Blender 3D", style: "font-black uppercase tracking-widest" },
    { name: "Lightroom", style: "font-serif italic text-gray-400" },
    { name: "Gira", style: "font-black uppercase tracking-widest" },
    { name: "Camera Ops", style: "font-serif italic text-gray-400" }
  ];

  return (
    <section className="relative w-full bg-[#EBEBEB] text-gray-900 overflow-hidden py-24 md:py-0">
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12">
        
        {/* Magazine Header / Thick Rule */}
        <BlurFade delay={0.1} inView>
          <div className="w-full h-[6px] md:h-[8px] bg-gray-900 mb-8 md:mb-12" />
        </BlurFade>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24">
          
          {/* Left Column: Heading & Metadata */}
          <div className="w-full md:w-1/3 flex flex-col gap-12">
            <BlurFade delay={0.2} inView>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                About <br /> <span className="text-gray-400">Me.</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="flex flex-col gap-6 border-l-4 border-gray-900 pl-6">
                <div>
                  <h3 className="text-[10px] md:text-xs font-black tracking-[0.25em] text-gray-500 uppercase mb-2">
                    Background
                  </h3>
                  <p className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
                    CS Degree in Multimedia Computing <br /> UiTM Shah Alam
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] md:text-xs font-black tracking-[0.25em] text-gray-500 uppercase mb-2">
                    Base of Operations
                  </h3>
                  <p className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
                    Selangor, Malaysia
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="w-full md:w-2/3 md:pt-4">
            <BlurFade delay={0.4} inView>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-gray-600 mb-10 md:mb-12 leading-tight">
                Bridging the gap between strict logic architecture and fluid creative lens.
              </h3>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="relative">
                {/* 
                  Drop-cap styling for the first letter of the paragraph. 
                  This creates that classic magazine editorial feel. 
                */}
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium text-justify 
                  first-letter:float-left first-letter:text-7xl md:first-letter:text-9xl first-letter:font-black first-letter:text-gray-900 first-letter:mr-4 md:first-letter:mr-6 first-letter:mt-2 first-letter:leading-none">
                  I am a Computer Science graduate combining strong programming architecture with hands-on multimedia production. From engineering full-stack systems to developing interactive 3D simulations, I build dynamic digital experiences. When I'm not writing React or C#, I'm likely operating a Camera, shooting commercial photography, or editing industrial images. My approach treats code and camera as two tools serving the exact same purpose: crafting unforgettable experiences and solving complex problems with aesthetic precision.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Ticker-Tape Marquee (Tech & Creative Stack) */}
      <BlurFade delay={0.6} inView className="mt-24 md:mt-32">
        <div className="w-full border-y-[4px] border-gray-900 py-6 md:py-8 overflow-hidden relative flex bg-gray-900 text-white">
          <motion.div 
            className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {/* Duplicate the array 4 times to ensure seamless looping without snapping */}
            {[...Array(4)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-12 md:gap-24 items-center">
                {skills.map((skill, i) => (
                  <span key={i} className={`text-2xl md:text-4xl lg:text-5xl ${skill.style}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </BlurFade>
    </section>
  );
}
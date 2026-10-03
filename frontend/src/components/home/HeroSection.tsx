import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlurFade } from '../ui/BlurFade';

// Ensure your silhouette image is a .png with a transparent background
import heroImage from '../../assets/profile-silhouette.webp'; 

// A simple hook to get current time in KL
function useKualaLumpurTime() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const klTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      });
      setTime(klTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function HeroSection() {
  const klTime = useKualaLumpurTime();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent text-gray-900 overflow-hidden">
      
      {/* Film Grain Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.webp")' }}
      />

      <div className="relative w-full max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full z-10 min-h-screen pointer-events-none">
        
        {/* Layer 1: Background Typography (HAZIQ - First Name) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[10%] md:top-[20%] left-4 md:left-12 lg:left-20 z-0"
        >
          <h1 className="text-[20vw] md:text-[20vw] lg:text-[15rem] font-black tracking-tighter leading-[0.75] text-gray-300/70 select-none drop-shadow-sm">
            HAZIQ
          </h1>
        </motion.div>

        {/* Layer 2: Center Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[65vh] md:h-[85vh] flex justify-center items-end z-10 pointer-events-none">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            src={heroImage} 
            alt="Haziq Redzuan" 
            className="h-full w-auto max-w-[150%] object-contain object-bottom drop-shadow-2xl"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
            }}
          />
        </div>

        {/* Layer 3: Foreground Typography (REDZUAN - Second Name) */}
        {/* Using mix-blend-difference with text-white creates a striking inversion effect when overlapping the dark silhouette */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[18%] md:top-auto md:bottom-[15%] left-4 md:left-auto md:right-12 lg:right-20 z-20 text-left md:text-right pointer-events-none"
        >
          <h1 className="text-[20vw] md:text-[20vw] lg:text-[15rem] font-black tracking-tighter leading-[0.75] text-white mix-blend-difference select-none">
            REDZUAN.
          </h1>
        </motion.div>

        {/* Floating Content: Bottom Left (Role & Description) */}
        <div className="absolute bottom-32 left-6 md:bottom-20 md:left-12 lg:left-20 z-30 max-w-[200px] md:max-w-xs pointer-events-auto">
          <BlurFade delay={0.6} inView>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-gray-900 mb-2">
                  Full-Stack Developer
                </h2>
                <div className="w-8 h-[2px] bg-gray-900 mb-3" />
                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed font-medium uppercase tracking-wider">
                  & Multimedia producer crafting digital experiences globally. Bridging logic and aesthetic design.
                </p>
              </div>
              <Link 
                to="/#contact" 
                className="group w-fit mt-2 inline-flex items-center gap-2 text-xs md:text-sm font-bold text-gray-900 uppercase tracking-widest relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gray-900 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300"
              >
                Let's Talk 
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* Floating Content: Top Right (Local Time Widget) */}
        <div className="absolute top-8 right-6 md:top-32 md:right-12 lg:right-20 z-30 pointer-events-auto">
          <BlurFade delay={0.7} inView>
            <div className="flex flex-col items-end gap-1.5 text-right bg-white/60 backdrop-blur-md border border-white/50 px-4 py-2.5 rounded-lg shadow-sm">
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-gray-500">
                Selangor, MY
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gray-900"></span>
                </span>
                <span className="text-xs md:text-sm font-bold text-gray-900 font-mono tracking-tight">
                  {klTime || "00:00 AM"}
                </span>
              </div>
            </div>
          </BlurFade>
        </div>

      </div>
    </section>
  );
}
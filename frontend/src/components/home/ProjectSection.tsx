import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlurFade } from '../ui/BlurFade';

// IMPORTANT: Add these images to your assets folder, or update the paths to match your actual preview images!
import softwarePreview from '../../assets/software-preview.webp'; 
import photoPreview from '../../assets/photo-preview.webp';

export default function ProjectSection() {
  return (
    <section className="w-full overflow-hidden border-t-[8px] border-gray-900 bg-[#EBEBEB] pb-24 md:pb-32">
      
      {/* Minimal Header */}
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <BlurFade delay={0.1} inView>
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] text-gray-900">
            Selected <br /> <span className="text-gray-400 font-serif italic font-normal tracking-tight">Works.</span>
          </h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <p className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-gray-500 max-w-xs text-left md:text-right">
            A dual perspective on engineering and visual storytelling.
          </p>
        </BlurFade>
      </div>

      {/* The 50/50 Split Screen Container */}
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="w-full flex flex-col md:flex-row border-[4px] border-gray-900 overflow-hidden shadow-2xl">
          
          {/* Left Panel (Software) - Image Top, Text Bottom */}
          <Link 
            to="/it-work" 
            className="w-full md:w-1/2 flex flex-col group border-b-[4px] md:border-b-0 md:border-r-[4px] border-gray-900 bg-[#EBEBEB] text-gray-900 h-[80vh] md:h-[90vh] min-h-[600px]"
          >
            {/* Image Block (60%) */}
            <div className="relative w-full h-[60%] overflow-hidden border-b-[4px] border-gray-900 bg-gray-200">
              <img 
                src={softwarePreview} 
                alt="Software Engineering" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-gray-900 text-white text-2xl font-black px-4 py-2">01</div>
            </div>
            
            {/* Text Block (40%) */}
            <div className="w-full h-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-between group-hover:bg-[#D9D9D9] transition-colors duration-500">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] group-hover:text-blue-700 transition-colors duration-300">
                Software <br /> Development
              </h3>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mt-4">
                <p className="text-base font-medium text-gray-700 max-w-sm">
                  Multi-tenant SaaS platforms, interactive 3D simulations, and robust full-stack architectures.
                </p>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:text-blue-700 transition-colors">
                  Explore <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Right Panel (Photography) - Text Top, Image Bottom (Checkerboard layout) */}
          <Link 
            to="/photography" 
            className="w-full md:w-1/2 flex flex-col group bg-gray-900 text-white h-[80vh] md:h-[90vh] min-h-[600px]"
          >
            {/* Text Block (40%) */}
            <div className="w-full h-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-[4px] border-gray-900 bg-gray-900 group-hover:bg-black transition-colors duration-500">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] group-hover:text-orange-500 transition-colors duration-300">
                Media & <br /> Photography
              </h3>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mt-4">
                <p className="text-base font-medium text-gray-400 max-w-sm">
                  Commercial studio shoots, high-end event coverage, and creative asset production.
                </p>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                  Gallery <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Image Block (60%) */}
            <div className="relative w-full h-[60%] overflow-hidden bg-slate-800">
              <img 
                src={photoPreview} 
                alt="Media & Photography" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-white text-gray-900 text-2xl font-black px-4 py-2">02</div>
            </div>
          </Link>

        </div>
      </div>
      
    </section>
  );
}
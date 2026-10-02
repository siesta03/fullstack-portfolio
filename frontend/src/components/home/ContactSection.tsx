import { ArrowRight } from 'lucide-react';
import { BlurFade } from '../ui/BlurFade';

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="w-full bg-[#EBEBEB] text-gray-900 border-t-[8px] border-gray-900 flex flex-col">
      
      {/* Massive Headline Box */}
      <div className="w-full py-16 md:py-24 px-6 md:px-12 bg-gray-900 text-[#EBEBEB] flex flex-col justify-center overflow-hidden">
        <BlurFade delay={0.1} inView>
          <h2 className="text-[13vw] md:text-[9vw] leading-[0.8] font-black uppercase tracking-tighter whitespace-nowrap">
            Let's <span className="font-serif italic font-normal tracking-tight text-gray-400">Collaborate.</span>
          </h2>
        </BlurFade>
      </div>

      {/* Grid Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y-[4px] md:divide-y-0 md:divide-x-[4px] divide-gray-900 border-b-[16px] border-gray-900">
        
        {/* Col 1: Location & Status */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
          <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">
            01 / Availability
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Accepting <br/> New Projects</h3>
            <div className="w-full h-[2px] bg-gray-300 mb-6" />
            <p className="font-mono text-sm font-bold text-gray-900 tracking-widest">KLANG, SELANGOR, MY</p>
            <p className="font-mono text-xs text-gray-500 mt-2 tracking-widest">Q4 / {currentYear}</p>
          </div>
        </div>

        {/* Col 2: Socials */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[300px] md:min-h-[400px] bg-gray-200">
          <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">
            02 / Network
          </div>
          <div className="flex flex-col justify-end h-full">
            <a href="https://github.com/siesta03" target="_blank" rel="noopener noreferrer" className="text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-blue-700 transition-colors flex justify-between items-center group py-4">
              GitHub <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
            </a>
            <div className="w-full h-[2px] bg-gray-900/10" />
            <a href="https://linkedin.com/in/ziqo" target="_blank" rel="noopener noreferrer" className="text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-blue-700 transition-colors flex justify-between items-center group py-4">
              LinkedIn <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
            </a>
            <div className="w-full h-[2px] bg-gray-900/10" />
            <a href="https://instagram.com/zeeq_11" target="_blank" rel="noopener noreferrer" className="text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-orange-600 transition-colors flex justify-between items-center group py-4">
              Instagram <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>

        {/* Col 3: Direct Contact */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[300px] md:min-h-[400px] bg-[#EBEBEB]">
          <div className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">
            03 / Direct
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <a href="mailto:haziqamani579@gmail.com" className="w-full bg-gray-900 text-[#EBEBEB] text-lg md:text-xl lg:text-2xl font-black uppercase tracking-widest py-6 px-4 text-center hover:bg-blue-700 transition-colors">
              Email Me
            </a>
            <a href="https://api.whatsapp.com/send?phone=60189779241" target="_blank" rel="noopener noreferrer" className="w-full bg-transparent border-[4px] border-gray-900 text-gray-900 text-lg md:text-xl lg:text-2xl font-black uppercase tracking-widest py-6 px-4 text-center hover:bg-gray-900 hover:text-[#EBEBEB] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
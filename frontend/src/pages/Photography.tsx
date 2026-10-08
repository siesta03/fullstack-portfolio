import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { BlurFade } from '../components/ui/BlurFade';

// Load marathon images from the assets folder using Vite's glob import
const marathonModules = import.meta.glob('../assets/photography-marathon/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const marathonImages = Object.keys(marathonModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/m(\d+)\.webp/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/m(\d+)\.webp/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, index) => ({
    id: `m${index + 1}`,
    url: marathonModules[key],
    alt: `Marathon ${index + 1}`
  }));

// Load convo images from the assets folder using Vite's glob import
const convoModules = import.meta.glob('../assets/photography-convo/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const convoImages = Object.keys(convoModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/c(\d+)\.webp/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/c(\d+)\.webp/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, index) => ({
    id: `c${index + 1}`,
    url: convoModules[key],
    alt: `Convo ${index + 1}`
  }));

// Load anime images from the assets folder using Vite's glob import
const animeModules = import.meta.glob('../assets/photography-anime/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const animeImages = Object.keys(animeModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/a(\d+)\.webp/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/a(\d+)\.webp/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, index) => ({
    id: `a${index + 1}`,
    url: animeModules[key],
    alt: `Anime ${index + 1}`
  }));

// Load product images from the assets folder using Vite's glob import
const productModules = import.meta.glob('../assets/photography-product/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const productImages = Object.keys(productModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/p(\d+)\.webp/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/p(\d+)\.webp/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, index) => ({
    id: `p${index + 1}`,
    url: productModules[key],
    alt: `Product ${index + 1}`
  }));

// Load event images from the assets folder using Vite's glob import
const eventModules = import.meta.glob('../assets/photography-event/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const eventImages = Object.keys(eventModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/e(\d+)\.webp/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/e(\d+)\.webp/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key, index) => ({
    id: `e${index + 1}`,
    url: eventModules[key],
    alt: `Event ${index + 1}`
  }));

// Sample data fallback
const gallerySections = [
  {
    id: "marathon",
    title: "Marathon",
    details: "Capturing the endurance and spirit of long-distance runners in dynamic environments.",
    images: marathonImages.length > 0 ? marathonImages : [
      { id: "m1", url: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&w=1200&q=80", alt: "Marathon runner crossing finish line" },
      { id: "m2", url: "https://images.unsplash.com/photo-1552674605-15c2198be903?auto=format&fit=crop&w=1200&q=80", alt: "Marathon runners in motion" }
    ]
  },
  {
    id: "convo",
    title: "Convo",
    details: "Milestones and memories from graduation ceremonies, focusing on raw emotion.",
    images: convoImages.length > 0 ? convoImages : [
      { id: "c1", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", alt: "Graduation cap toss" },
      { id: "c2", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80", alt: "Graduates celebrating" }
    ]
  },
  {
    id: "anime",
    title: "Anime",
    details: "Anime conventions and vibrant cosplay events.",
    images: animeImages.length > 0 ? animeImages : [
      { id: "a1", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80", alt: "Anime 1" },
      { id: "a2", url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", alt: "Anime 2" }
    ]
  },
  {
    id: "product",
    title: "Product",
    details: "Clean, commercial studio photography tailored for brand campaigns.",
    images: productImages.length > 0 ? productImages : [
      { id: "p1", url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80", alt: "Headphones product shot" },
      { id: "p2", url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", alt: "Watch product shot" }
    ]
  },
  {
    id: "event",
    title: "Event",
    details: "Live, fast-paced documentation of corporate and public events.",
    images: eventImages.length > 0 ? eventImages : [
      { id: "e1", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", alt: "Concert crowd" },
      { id: "e2", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80", alt: "Event stage lighting" }
    ]
  },
];

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<{ id: string, url: string, alt: string } | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#EBEBEB] text-gray-900 pb-40 font-sans">
      
      {/* 1. EDITORIAL HEADER SECTION */}
      <div className="w-full pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b-[8px] border-gray-900">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <BlurFade delay={0.1} inView>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-gray-900 leading-[0.8] uppercase">
              Index <br />
              <span className="font-serif font-normal italic text-gray-500">
                02.
              </span>
            </h1>
          </BlurFade>
          
          <BlurFade delay={0.2} inView className="max-w-md">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-900 mb-4 border-b-[2px] border-gray-900 pb-2 inline-block">
              Visual Archive
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              A curated index of professional lens work. Unfiltered, unstructured documentation from commercial shoots to high-speed marathons.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* 2. GALLERY SECTIONS */}
      <div className="w-full flex flex-col pt-12 md:pt-24 gap-24 md:gap-40">
        {gallerySections.map((section, index) => (
          <div key={section.id} className="w-full flex flex-col">
            
            {/* STICKY SECTION HEADER */}
            <div className="sticky top-[0px] z-30 bg-[#EBEBEB] border-y-[4px] border-gray-900 mb-12 md:mb-0">
              <div className="max-w-[100rem] mx-auto w-full px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <BlurFade delay={0.1} inView>
                  <div className="flex flex-col">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none">{section.title}</h2>
                    <p className="font-mono text-xs md:text-sm text-gray-600 uppercase tracking-widest mt-3">{section.details}</p>
                  </div>
                </BlurFade>
                
                <BlurFade delay={0.2} inView>
                  <div className="text-lg md:text-2xl font-black tracking-tighter uppercase text-gray-400">
                    VOL. 0{index + 1}
                  </div>
                </BlurFade>
              </div>
            </div>

            {/* SPACED MASONRY GRID (Up to 6 columns) */}
            <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-6 md:gap-8">
              {(expandedSections[section.id] ? section.images : section.images.slice(0, 6)).map((img, imgIndex) => {
                const isLCP = index === 0 && imgIndex < 4;
                return (
                <BlurFade delay={isLCP ? 0 : 0.1 + (Math.min(imgIndex, 6) * 0.05)} inView={!isLCP} key={img.id} className="break-inside-avoid mb-6 md:mb-8 block">
                  <div 
                    onClick={() => setSelectedImage(img)}
                    className="relative w-full overflow-hidden cursor-zoom-in group/image bg-gray-200 border-[2px] border-gray-200 hover:border-gray-900 transition-colors duration-300 [content-visibility:auto] [contain-intrinsic-size:300px] min-h-[150px]"
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-auto block grayscale-[20%] group-hover/image:grayscale-0 group-hover/image:scale-[1.02] transition-all duration-500"
                      loading={isLCP ? undefined : "lazy"}
                      fetchPriority={isLCP ? "high" : undefined}
                      decoding="async"
                    />
                  </div>
                </BlurFade>
              )})}
            </div>

            {/* SEE MORE BUTTON */}
            {section.images.length > 6 && (
              <div className="w-full flex justify-center mt-8 px-6">
                <button
                  onClick={() => setExpandedSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
                  className="font-mono text-sm md:text-base font-bold uppercase tracking-widest border-[2px] border-gray-900 px-8 py-4 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-[#EBEBEB] transition-colors duration-300 shadow-[4px_4px_0px_rgba(17,24,39,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                >
                  {expandedSections[section.id] ? "See Less" : "See More"}
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#EBEBEB] p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-4 bg-gray-900 text-[#EBEBEB] hover:bg-gray-800 transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Clean scale/fade animation instead of layoutId warping */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center w-full h-full"
              onClick={(e) => e.stopPropagation()} 
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-full object-contain border-[8px] md:border-[16px] border-gray-900 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
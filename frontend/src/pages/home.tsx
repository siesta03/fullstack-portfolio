import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProjectSection from '../components/home/ProjectSection';
import ContactSection from '../components/home/ContactSection';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full gap-0 pt-0 pb-0"
    >
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </motion.div>
  );
}
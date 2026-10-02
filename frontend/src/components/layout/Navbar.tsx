// src/components/layout/Navbar.tsx
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Code, Camera, Mail, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Software', path: '/it-work', icon: Code },
    { name: 'Media', path: '/photography', icon: Camera },
    { name: 'Contact', path: '/#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes('#')) {
      e.preventDefault();
      const hash = '#' + path.split('#')[1];
      if (location.pathname !== '/') {
        navigate(path);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full flex justify-center px-6">
      <motion.nav 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="flex items-center gap-2 bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-3 py-2.5 pointer-events-auto"
      >
        {navItems.map((item) => {
          const isContact = item.path === '/#contact';
          const isActive = isContact 
            ? location.hash === '#contact' 
            : location.pathname === item.path && location.hash !== '#contact';
          
          const Icon = item.icon;
          
          return (
            <NavLink 
              key={item.path}
              to={item.path} 
              onClick={(e) => handleNavClick(e, item.path)}
              className={`relative p-3 rounded-full flex items-center justify-center transition-all duration-300 group ${
                isActive ? 'text-indigo-600' : 'hover:text-slate-900 text-slate-500 hover:bg-slate-100/50 hover:scale-110'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="dock-active"
                  className="absolute inset-0 bg-indigo-50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              
              {/* Tooltip */}
              <span className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded-md pointer-events-none">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </motion.nav>
    </div>
  );
}
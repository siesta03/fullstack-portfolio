// src/components/layout/Navbar.tsx
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm shadow-slate-200/50 rounded-full px-6 py-3"
      >
        <NavLink 
          to="/" 
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Haziq Redzuan.
        </NavLink>
        
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <NavLink 
            to="/it-work" 
            className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-blue-600' : 'hover:text-slate-900'}`
            }
          >
            Software
          </NavLink>
          <NavLink 
            to="/photography" 
            className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-blue-600' : 'hover:text-slate-900'}`
            }
          >
            Media
          </NavLink>
        </div>
      </motion.nav>
    </header>
  );
}
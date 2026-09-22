// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Code2, Camera } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
      
      {/* Hero Section */}
      <div className="space-y-6 mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase font-mono">
          System. <br />
          <span className="text-gray-500">Capture.</span>
          <span className="text-red-500 animate-pulse">_</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Computer Science student and freelance photographer based in Klang. 
          Bridging the gap between scalable software architecture and visual media production.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Link to="/engineering" className="group relative">
          {/* Accent Glow */}
          <div className="absolute -inset-0.5 bg-red-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Glass Card */}
          <div className="relative h-full bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-white/20 transition">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Code2 className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-mono uppercase mb-2 tracking-tight">Engineering</h2>
              <p className="text-gray-400 text-sm">
                Full-stack development, 3D simulations, and web applications.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/media" className="group relative">
          {/* Accent Glow */}
          <div className="absolute -inset-0.5 bg-red-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Glass Card */}
          <div className="relative h-full bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-start gap-4 hover:border-white/20 transition">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Camera className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-mono uppercase mb-2 tracking-tight">Media</h2>
              <p className="text-gray-400 text-sm">
                Freelance photography, event coverage, and equipment rentals.
              </p>
            </div>
          </div>
        </Link>
        
      </div>
    </main>
  );
}
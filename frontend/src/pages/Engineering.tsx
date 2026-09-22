// src/pages/Engineering.tsx
import { engineeringProjects } from "../data";
import GlassCard from "../component/GlassCard";
import { ExternalLink } from "lucide-react";

export default function Engineering() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-mono uppercase tracking-tight">
          Engineering<span className="text-red-500">.</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl">
          Full-stack web architecture, database management, and 3D simulation
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringProjects.map((project) => (
          <GlassCard key={project.id} accentGlow={true}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h2 className="text-2xl font-bold text-gray-100">
                  {project.title}
                </h2>
              </div>
              <a
                href={project.github}
                className="text-gray-400 hover:text-white transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </main>
  );
}

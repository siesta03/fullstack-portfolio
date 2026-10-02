import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#eef2f5] to-[#f4f7f6]">
      
      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Blue / Indigo bubble moving diagonally */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-300/40 to-indigo-300/40 blur-[120px]"
      />
      
      {/* Pink / Rose bubble floating */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-rose-200/40 to-orange-200/40 blur-[120px]"
      />

      {/* Cyan / Teal bubble moving gently in the bottom left */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-r from-cyan-200/30 to-teal-200/30 blur-[100px]"
      />
    </div>
  );
}
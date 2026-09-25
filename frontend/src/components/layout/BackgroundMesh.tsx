import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fbfbfd]">
      {/* Soft blue/purple top left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/50 blur-[120px]"
      />
      {/* Soft warm pink bottom right */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-rose-100/50 blur-[120px]"
      />
    </div>
  );
}
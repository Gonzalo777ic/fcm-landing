'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConcreteBlock3D() {
  return (
    <div className="relative w-full py-12 flex items-center justify-center bg-gray-50/50 rounded-sm border border-gray-100 shadow-inner overflow-hidden group">
      {/* Patrón de ingeniería de fondo (Grid sutil) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(#0A3B4B 1.5px, transparent 1.5px)", 
          backgroundSize: "30px 30px" 
        }} 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          rotateY: 10, 
          rotateX: -5,
          scale: 1.05 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="relative w-full max-w-[400px] aspect-square cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        {/* Sombra dinámica que reacciona al hover */}
        <div className="absolute inset-0 bg-black/10 blur-3xl rounded-full scale-75 translate-y-20 opacity-50 group-hover:opacity-30 transition-opacity" />

        {/* Imagen del bloque con sombra de alta calidad */}
        <div className="relative w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_40px_50px_rgba(0,0,0,0.3)] transition-all duration-500">
          <Image
            src="/images/bloque.png"
            alt="Ensayo de Tenacidad FCM"
            fill
            className="object-contain"
          />
        </div>


      </motion.div>


    </div>
  );
}
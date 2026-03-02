'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const clientLogos = [
  { name: "Aditivos Especiales", src: "/images/clients/AE.png" },
  { name: "Pronte", src: "/images/clients/PRONTE.png" },
  { name: "Saeta", src: "/images/clients/SAETA.png" },
  { name: "SGM", src: "/images/clients/SGM.png" },
  { name: "Unicon", src: "/images/clients/UNICON.png" },
  { name: "Inka", src: "/images/clients/INKA.png" },
];

export default function Clients() {
  // Duplicamos los logos para un efecto infinito sin saltos
  const infiniteLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-3 uppercase"
          >
            Líderes que confían en nosotros
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-fcm-blue text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
          >
            Nuestros <span className="text-gray-300">Clientes</span>
          </motion.h2>
          <div className="w-20 h-1 bg-fcm-yellow mt-6 hidden md:block" />
        </div>
      </div>

      {/* Contenedor del Slider con Máscara de Degradado */}
      <div className="relative w-full">
        {/* Gradientes laterales para suavizar la entrada/salida */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group">
          {/* Animación Marquee: Asegúrate de tener esta animación en tu globals.css */}
          <div className="flex animate-marquee whitespace-nowrap py-12 items-center gap-12 md:gap-20 group-hover:[animation-play-state:paused]">
            {infiniteLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-40 h-24 md:w-56 md:h-32 transition-all duration-700 ease-in-out cursor-pointer group/logo"
              >
                {/* Fondo sutil tipo tarjeta al hacer hover */}
                <div className="absolute inset-0 bg-gray-50/50 rounded-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="relative w-full h-full flex items-center justify-center grayscale opacity-40 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={100}
                    className="object-contain p-4 drop-shadow-sm group-hover/logo:drop-shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "MINERÍA",
    image: "/images/tunel.png",
    description: "Sustituimos el acero tradicional en el shotcrete minero, ofreciendo mayor ductilidad y seguridad crítica en túneles y rampas.",
    link: "/aplicaciones/mineria"
  },
  {
    title: "CONSTRUCCIÓN",
    image: "/images/trabajador-martillo.png",
    description: "Mejoramos la cohesión y resistencia del concreto, reduciendo fisuras y tiempos de ejecución en estructuras civiles.",
    link: "/aplicaciones/construccion"
  },
  {
    title: "PAVIMENTOS",
    image: "/images/vehiculo.png",
    description: "Aumentamos la resistencia post-fisura y durabilidad del concreto en pavimentos industriales de tráfico pesado.",
    link: "/aplicaciones/pavimentos"
  }
];

export default function ApplicationsGrid() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Minimalista */}
        <div className="flex flex-col items-center mb-24">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] flex gap-3 text-fcm-blue/30"
          >
            <Link href="/" className="hover:text-fcm-yellow transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-fcm-yellow">Aplicaciones</span>
          </motion.nav>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fcm-blue text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-center"
          >
            Soluciones <br /> <span className="text-gray-200">Por Sector</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-fcm-yellow mt-10" />
        </div>

        {/* Grid de Paneles Interactivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] md:h-[700px]">
          {sectors.map((sector, index) => (
            <Link key={index} href={sector.link} className="block h-full group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full overflow-hidden rounded-sm cursor-pointer shadow-2xl"
              >
                {/* Fondo: Imagen Industrial con Zoom */}
                <Image 
                  src={sector.image} 
                  alt={sector.title} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-110"
                />
                
                {/* Gradiente de Base para Legibilidad del Título */}
                <div className="absolute inset-0 bg-gradient-to-t from-fcm-blue/90 via-fcm-blue/20 to-transparent z-10" />

                {/* Título: z-index alto para que nunca sea cubierto */}
                <div className="absolute bottom-10 left-10 z-40 transition-all duration-500 ease-out group-hover:translate-y-[-160px]">
                  <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-fcm-yellow transition-colors">
                    {sector.title}
                  </h3>
                </div>

                {/* Contenido Revelado (Glassmorphism): z-index menor al título */}
                <div className="absolute inset-x-0 bottom-0 h-[220px] bg-white/10 backdrop-blur-md border-t border-white/20 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-10 flex flex-col justify-end">
                  <p className="text-white text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                    {sector.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-4 text-fcm-yellow font-black uppercase text-[10px] tracking-[0.3em] group/btn">
                    <span className="group-hover/btn:underline decoration-2 underline-offset-8">Explorar Aplicación</span>
                    <div className="w-8 h-[2px] bg-fcm-yellow group-hover/btn:w-16 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
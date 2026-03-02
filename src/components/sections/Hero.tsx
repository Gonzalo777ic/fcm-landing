"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const backgroundImages = [
  { src: "/images/tunel.png", alt: "Operaciones en Túnel FCM" },
  { src: "/images/casco.png", alt: "Personal de Seguridad FCM" },
  { src: "/images/vehiculo.png", alt: "Maquinaria Industrial FCM" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-fcm-blue">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[6000ms] ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* Capa de contraste general para el fondo */}
        <div className="absolute inset-0 bg-black/65 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-white uppercase">
            <span className="block drop-shadow-xl mb-2">SOLUCIONES EN</span>
            
            {/* TEXTO CON MÁSCARA OPTIMIZADO PARA MÁXIMA CLARIDAD */}
            <span 
              className="block bg-cover bg-center bg-clip-text text-transparent italic relative"
              style={{ 
                backgroundImage: "url('/images/tunel.png')",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                /* Aumentamos brillo y saturación interna para que el texto sea "luz" */
                filter: "brightness(1.8) saturate(1.2) drop-shadow(0px 0px 20px rgba(246,179,52,0.15))",
                /* Agregamos un trazo muy fino para definir los bordes contra el fondo oscuro */
                WebkitTextStroke: "1px rgba(255,255,255,0.1)"
              }}
            >
              FIBRAS SINTÉTICAS
            </span>
          </h1>

          {/* Bloque Glassmorphism con retoque de opacidad */}
          <div className="p-8 rounded-sm bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-2xl">
            <p className="text-lg md:text-xl font-light leading-relaxed text-white">
              Transformamos la ingeniería del concreto con tecnología de <strong className="text-fcm-yellow">monofilamentos estructurales</strong> diseñada para elevar la seguridad en minería e infraestructura vial.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/nosotros">
                <button className="w-full sm:w-auto bg-fcm-yellow text-fcm-blue px-12 py-4 rounded-sm font-black text-xs hover:bg-white hover:scale-105 transition-all tracking-widest uppercase shadow-lg">
                  CONOCER FCM
                </button>
              </Link>
              <Link href="/productos">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 py-4 rounded-sm font-black text-xs hover:bg-white/10 transition-all tracking-widest uppercase">
                  VER PRODUCTOS
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// Subtext se mantiene igual, es un buen diseño limpio
export function HeroSubtext() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/3">
          <h2 className="text-fcm-blue text-4xl font-black leading-tight uppercase tracking-tighter">
            Ingeniería que <br /> marca la <span className="text-fcm-yellow">diferencia</span>
          </h2>
        </div>
        <div className="md:w-2/3 border-l-4 border-fcm-yellow pl-10 text-gray-600 text-lg leading-relaxed">
          <p className="mb-6">
            Cada fibra FCM se fabrica bajo <strong className="text-fcm-blue uppercase">estándares técnicos de alto rendimiento</strong>, optimizando el comportamiento del <strong>concreto reforzado</strong> en condiciones extremas de minería subterránea y pavimentos industriales.
          </p>
        </div>
      </div>
    </div>
  );
}
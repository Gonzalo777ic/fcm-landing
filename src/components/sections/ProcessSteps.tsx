'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "EVALUACIÓN",
    description: "Análisis de requerimientos estructurales en obra para definir la dosificación exacta.",
    image: "/images/tunel.png",
  },
  {
    number: "02",
    title: "PROPUESTA",
    description: "Recomendación de la fibra idónea y entrega de ficha técnica de diseño.",
    image: "/images/casco.png",
  },
  {
    number: "03",
    title: "ENTREGA",
    description: "Logística inmediata desde planta local para cumplir el cronograma.",
    image: "/images/vehiculo.png",
  },
  {
    number: "04",
    title: "SOPORTE",
    description: "Supervisión técnica del mezclado y aplicación in-situ.",
    image: "/images/trabajador-martillo.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fcm-yellow font-black tracking-[0.3em] text-[10px] mb-4 uppercase"
          >
            Metodología FCM
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-fcm-blue text-4xl md:text-5xl font-black uppercase tracking-tighter"
          >
            Nuestro proceso asegura <span className="text-fcm-yellow">eficiencia</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[500px] group overflow-hidden rounded-sm cursor-pointer shadow-2xl"
            >
              {/* Imagen con Zoom Suave */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay Dinámico (se oscurece en hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-fcm-blue via-transparent to-transparent opacity-80 z-10 group-hover:from-black transition-all duration-500" />
              <div className="absolute inset-0 bg-fcm-blue/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 z-10" />

              {/* Número Artístico (Outline) */}
              <span 
                className="absolute top-6 right-6 text-7xl font-black z-20 transition-all duration-500 text-transparent opacity-30 group-hover:opacity-100 group-hover:text-fcm-yellow"
                style={{ WebkitTextStroke: '1px rgba(246, 179, 52, 0.8)' }}
              >
                {step.number}
              </span>

              {/* Contenido con Animación de Desplazamiento */}
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-10 h-1 bg-fcm-yellow mb-4 group-hover:w-20 transition-all duration-500" />
                <h4 className="text-white text-2xl font-black mb-4 tracking-tight uppercase">
                  {step.title}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
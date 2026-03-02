'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Más de 15 años de experiencia",
    description: "especializados en fibras para concreto.",
  },
  {
    title: "Asesoramiento personalizado",
    description: "técnico y operativo directamente en obra.",
  },
  {
    title: "Calidad asegurada y certificada",
    description: "bajo los más estrictos estándares internacionales.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Columna de Texto: Enfoque Editorial */}
          <div className="lg:w-1/2 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-fcm-yellow font-black tracking-[0.3em] text-[10px] mb-4 uppercase">
                Confianza de Alto Rendimiento
              </h3>
              <h2 className="text-fcm-blue text-4xl md:text-6xl font-black leading-[0.9] mb-10 uppercase tracking-tighter">
                Concretamos confianza junto a <span className="text-fcm-yellow">líderes</span> del sector
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12 border-l-4 border-fcm-yellow/30 pl-8">
                <p>
                  FCM participa en proyectos de <span className="text-fcm-blue font-bold">infraestructura, minería y construcción</span> en todo el país.
                </p>
                <p className="text-sm italic">
                  Trabajamos con referentes como <span className="font-bold">Unicon, Cerro Lindo, Volcán y Condestable</span>.
                </p>
              </div>

              {/* Lista de Beneficios Estilizada */}
              <div className="grid grid-cols-1 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fcm-blue flex items-center justify-center transition-colors group-hover:bg-fcm-yellow shadow-lg">
                      <svg className="w-6 h-6 text-white group-hover:text-fcm-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-fcm-blue leading-tight uppercase text-lg tracking-tight mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna de Imagen: Composición Artística */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Marco Decorativo Amarillo (Detrás) */}
              <div className="absolute -top-6 -right-6 w-full h-full border-[12px] border-fcm-yellow/20 rounded-sm z-0 hidden md:block" />
              
              {/* Contenedor Imagen Principal */}
              <div className="relative h-[550px] md:h-[700px] w-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10">
                <Image
                  src="/images/subiendo-escaleras.jpg"
                  alt="Personal de FCM en obra"
                  fill
                  className="object-cover transition-transform duration-[10s] hover:scale-110"
                />
                
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-fcm-blue/60 to-transparent" />
                
                {/* Badge Flotante Glassmorphism */}
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm text-white">
                  <p className="text-[10px] font-black tracking-widest uppercase mb-2 text-fcm-yellow">
                    Presencia Nacional
                  </p>
                  <p className="text-sm font-medium leading-relaxed">
                    Nuestra capacidad técnica y operativa respalda cada metro cúbico de concreto reforzado en el Perú.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
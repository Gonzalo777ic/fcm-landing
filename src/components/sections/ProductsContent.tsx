'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: "tp18",
    name: "FIBRA TP18",
    tag: "Minería & Túneles",
    description: "Fibra macroestructural diseñada para shotcrete. Ofrece máxima adherencia y capacidad de absorción de energía.",
    ideal: "Minería subterránea, túneles y sostenimiento de taludes.",
    image: "/images/products/tp18.png",
  },
  {
    id: "ps50",
    name: "FIBRA PS50",
    tag: "Pavimentos Industriales",
    description: "Diseñada para losas de alto tránsito. Brinda uniformidad total y control de fisuración plástica.",
    ideal: "Plataformas logísticas y pavimentos industriales.",
    image: "/images/products/ps-50-60.png",
  },
  {
    id: "ps60",
    name: "FIBRA PS60",
    tag: "Infraestructura Pesada",
    description: "Macrofibra de alta tenacidad. Sustituye el refuerzo metálico en condiciones de carga extrema.",
    ideal: "Construcción pesada e infraestructura vial.",
    image: "/images/products/ps-50-60.png",
  },
  {
    id: "ps50p",
    name: "FIBRA PS50P",
    tag: "Acabados & Fachadas",
    description: "Microfibra monofilamento. Especializada en la estética y control de micro-fisuras.",
    ideal: "Concretos arquitectónicos y elementos prefabricados.",
    image: "/images/products/ps50p.png",
  }
];

export default function ProductsContent() {
  return (
    <>
      {/* 1. Hero Editorial e Industrial */}
      <section className="relative h-[80vh] flex items-center bg-fcm-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/trabajador-pico.png" 
            alt="FCM Industrial" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fcm-blue via-fcm-blue/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h3 className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-6 uppercase">
              Nuestro Catálogo
            </h3>
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-10">
              SISTEMAS DE <br /> <span className="text-gray-400">REFUERZO</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl border-l-2 border-fcm-yellow/30 pl-8">
              Desarrollamos fibras sintéticas que optimizan la resistencia y durabilidad del concreto en los entornos más exigentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Tabla de Especificaciones Técnicas */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-fcm-blue text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Comparativa <span className="text-fcm-yellow">Técnica</span>
              </h2>
              <p className="text-gray-500 font-medium italic">Seleccione la fibra adecuada según los criterios de diseño estructural.</p>
            </div>
            <div className="hidden md:block w-32 h-1 bg-fcm-yellow" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-fcm-blue text-white uppercase text-[10px] tracking-[0.3em]">
                  <th className="p-8">Criterio de Evaluación</th>
                  <th className="p-8 text-center bg-white/5 border-l border-white/10">Microfibra</th>
                  <th className="p-8 text-center bg-white/5 border-l border-white/10">Macrofibra</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-bold uppercase tracking-tight">
                {[
                  { c: "Denier (Masa Lineal)", mi: "≤ 580", ma: "≥ 581" },
                  { c: "Longitud Estándar", mi: "6 – 20 mm", ma: "45 – 65 mm" },
                  { c: "Resistencia a la Tracción", mi: "No aplica", ma: "≥ 344.4 MPa" },
                  { c: "Dosificación Recomendada", mi: "0.6 – 1.0 kg/m³", ma: "2 – 8 kg/m³" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 transition-colors hover:bg-gray-50 group">
                    <td className="p-8 bg-gray-50/30 group-hover:text-fcm-blue transition-colors italic">{row.c}</td>
                    <td className="p-8 text-center text-gray-500">{row.mi}</td>
                    <td className="p-8 text-center text-fcm-blue">{row.ma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 3. Catálogo Polystark (Tarjetas de Impacto) */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-fcm-blue text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
              Línea <span className="text-fcm-yellow underline decoration-4 underline-offset-8">Polystark</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Imagen del Producto (Visualización limpia) */}
                <div className="md:w-1/2 relative bg-white p-10 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-50">
                  <div className="absolute inset-0 bg-fcm-yellow opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="relative w-full h-48 transition-transform duration-700 group-hover:scale-110">
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </div>
                </div>
                
                {/* Contenido Editorial */}
                <div className="md:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-black text-fcm-yellow uppercase tracking-[0.3em] mb-2 block">{product.tag}</span>
                    <h3 className="text-fcm-blue text-3xl font-black mb-4 tracking-tighter uppercase">{product.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>
                    
                    <div className="p-4 bg-gray-50 border-l-4 border-fcm-yellow mb-10">
                      <p className="text-[10px] font-black text-fcm-blue uppercase tracking-widest mb-1">Frente de Trabajo:</p>
                      <p className="text-xs text-gray-700 font-bold italic">{product.ideal}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/productos/${product.id}`}
                    className="group/btn flex items-center justify-between py-4 border-b-2 border-fcm-blue/10 text-fcm-blue font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:border-fcm-yellow"
                  >
                    Especificaciones <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
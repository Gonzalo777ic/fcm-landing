'use client';

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "tp18",
    name: "FIBRA TP18",
    description: "Fibra macroestructural para refuerzo en shotcrete y concreto proyectado. Ofrece alta adherencia y resistencia al impacto.",
    ideal: "Minería subterránea, túneles y sostenimiento de taludes.",
    image: "/images/products/tp18.png",
  },
  {
    id: "ps50",
    name: "FIBRA PS50",
    description: "Fibra macro diseñada para pavimentos y losas industriales. Brinda uniformidad, control de fisuras y mayor durabilidad.",
    ideal: "Plataformas logísticas y pavimentos industriales.",
    image: "/images/products/ps-50-60.png",
  },
  {
    id: "ps60",
    name: "FIBRA PS60",
    description: "Fibra macro de nueva generación. Aumenta la resistencia y ductilidad del concreto en condiciones de alta exigencia.",
    ideal: "Construcción pesada e infraestructura.",
    image: "/images/products/ps-50-60.png",
  },
  {
    id: "ps50p",
    name: "FIBRA PS50P",
    description: "Fibra micro monofilamento para el control de fisuración plástica. Proporciona acabados de alta calidad.",
    ideal: "Concretos arquitectónicos y prefabricados.",
    image: "/images/products/ps50p.png",
  }
];

export default function ProductsContent() {
  return (
    <>
      {/* 1. Hero con Imagen Fija (Parallax) */}
      <section 
        className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/trabajador-pico.png')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <p className="text-fcm-yellow font-bold tracking-[0.3em] text-xs mb-4 uppercase">Nuestros Productos</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Soluciones en fibras sintéticas <br /> para el refuerzo del concreto
          </h1>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            <p>
              En FCM desarrollamos y comercializamos <strong>fibras sintéticas de alto rendimiento</strong> diseñadas para <strong>optimizar la resistencia, durabilidad y eficiencia del concreto</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Tabla Comparativa */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-8 bg-fcm-yellow"></div>
            <h2 className="text-fcm-blue text-3xl font-bold uppercase tracking-tight">Comparativa de Fibras</h2>
          </div>
          <div className="overflow-hidden rounded-xl shadow-2xl border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A3B4B] text-white uppercase text-xs tracking-[0.2em]">
                  <th className="p-6">Criterios</th>
                  <th className="p-6 text-center border-l border-white/10">Microfibra</th>
                  <th className="p-6 border-l border-white/10 text-center">Macrofibra</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { c: "Denier", mi: "≤ 580", ma: "≥ 581" },
                  { c: "Longitud", mi: "6 – 20 mm", ma: "45 – 65 mm" },
                  { c: "Resistencia a la tracción", mi: "No aplica", ma: "≥ 344.4 MPa (50,000 psi)" },
                  { c: "Dosificación", mi: "0.6 – 1.0 kg/m³", ma: "2 – 8 kg/m³" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 transition-colors hover:bg-fcm-yellow/20 group">
                    <td className="p-6 font-bold bg-gray-50/50 group-hover:bg-transparent">{row.c}</td>
                    <td className="p-6 text-center">{row.mi}</td>
                    <td className="p-6 text-center">{row.ma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Catálogo POLYSTARK CORREGIDO */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-fcm-blue text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Nuestros Productos <span className="text-fcm-yellow">Polystark</span>
          </h2>
          <div className="w-24 h-1.5 bg-fcm-yellow mx-auto mb-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-transparent transition-all duration-500 group hover:shadow-2xl hover:border-fcm-yellow/50 hover:-translate-y-2 flex flex-col"
              >
                {/* Contenedor Imagen - AJUSTADO PARA NO SUPERPONERSE */}
                <div className="relative h-64 w-full bg-white flex items-center justify-center overflow-hidden transition-colors group-hover:bg-fcm-yellow/5">
                  <div className="relative w-[80%] h-[80%]">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="p-8 flex-grow text-left border-t border-gray-50">
                  <h3 className="text-fcm-blue text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="bg-gray-50 border-l-4 border-fcm-yellow p-4 mb-8">
                    <p className="text-[10px] font-bold text-fcm-blue uppercase tracking-widest mb-1">Aplicación Ideal:</p>
                    <p className="text-sm text-gray-700 font-medium italic">{product.ideal}</p>
                  </div>

                  <Link 
                    href={`/productos/${product.id}`}
                    className="w-full block text-center py-4 border-2 border-fcm-blue text-fcm-blue font-bold uppercase text-xs tracking-[0.2em] transition-all rounded-sm hover:bg-fcm-blue hover:text-white"
                  >
                    Ver Ficha Técnica →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
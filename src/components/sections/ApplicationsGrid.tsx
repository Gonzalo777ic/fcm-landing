'use client';

import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    title: "MINERÍA",
    image: "/images/tunel.png",
    description: "Nuestras fibras sintéticas macro FCM sustituyen el acero tradicional en el shotcrete minero, ofreciendo mayor ductilidad, control de fisuras y eficiencia operativa. Ideales para túneles, rampas y taludes donde la seguridad y durabilidad son críticas.",
    link: "/aplicaciones/mineria"
  },
  {
    title: "CONSTRUCCIÓN",
    image: "/images/trabajador-martillo.png",
    description: "Las fibras sintéticas FCM mejoran la cohesión y resistencia del concreto, reduciendo fisuras y tiempos de ejecución. Perfectas para elementos prefabricados, concretos arquitectónicos y estructuras civiles que requieren rendimiento y estética.",
    link: "/aplicaciones/construccion"
  },
  {
    title: "PAVIMENTOS",
    image: "/images/vehiculo.png",
    description: "En pavimentos industriales y de tráfico pesado, nuestras fibras sintéticas aumentan la resistencia post-fisura y durabilidad del concreto, reduciendo el mantenimiento y los costos totales de obra.",
    link: "/aplicaciones/pavimentos"
  }
];

export default function ApplicationsGrid() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Breadcrumb sutil */}
        <nav className="mb-12 text-xs font-bold uppercase tracking-widest flex justify-center gap-2">
          <Link href="/" className="text-fcm-yellow hover:text-fcm-blue">Inicio</Link>
          <span className="text-gray-300">/</span>
          <span className="text-fcm-blue/50">Aplicaciones</span>
        </nav>

        <h2 className="text-fcm-blue text-4xl md:text-5xl font-black uppercase tracking-tight mb-20">
          Soluciones por Sector
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden group flex flex-col h-full border border-gray-100 transition-all duration-500 hover:shadow-2xl">
              
              {/* Contenedor Imagen con Efecto Hover */}
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={sector.image} 
                  alt={sector.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay que aparece al pasar el mouse */}
                <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 p-6">
                   <h3 className="text-fcm-blue text-3xl font-black tracking-tighter border-b-4 border-fcm-yellow pb-2">
                    {sector.title}
                   </h3>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {sector.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={sector.link}
                    className={`w-full block text-center py-3.5 font-bold uppercase text-xs tracking-widest transition-all rounded-sm shadow-md ${
                      index === 0 
                      ? "bg-[#0A3B4B] text-white hover:bg-black" 
                      : "bg-fcm-yellow text-fcm-blue hover:bg-yellow-500"
                    }`}
                  >
                    MÁS INFORMACIÓN
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
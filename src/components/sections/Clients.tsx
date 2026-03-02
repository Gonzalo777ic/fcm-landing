'use client';

import Image from "next/image";

const clientLogos = [
  { name: "Aditivos Especiales", src: "/images/clients/AE.png" },
  { name: "Pronte", src: "/images/clients/PRONTE.png" },
  { name: "Saeta", src: "/images/clients/SAETA.png" },
  { name: "SGM", src: "/images/clients/SGM.png" },
  { name: "Unicon", src: "/images/clients/UNICON.png" },
  { name: "Inka", src: "/images/clients/INKA.png" },
];

export default function Clients() {
  const doubleLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h3 className="text-fcm-yellow font-bold tracking-[0.3em] text-xs mb-3 uppercase">
          Recomendaciones
        </h3>
        <h2 className="text-fcm-blue text-4xl md:text-5xl font-black uppercase tracking-tight">
          Nuestros Clientes
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee flex whitespace-nowrap min-w-full items-center gap-16 md:gap-24 group-hover:[animation-play-state:paused]">
          {doubleLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-48 h-32 md:w-64 md:h-40 grayscale opacity-40 
                         hover:grayscale-0 hover:opacity-100 hover:scale-125 
                         transition-all duration-500 ease-in-out cursor-pointer flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-4 drop-shadow-md hover:drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
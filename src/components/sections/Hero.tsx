"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <section className="relative w-full h-[75vh] min-h-[500px] flex items-center overflow-hidden">
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
              className={`object-cover object-center transition-transform duration-1000 ${
                index === activeIndex ? "animate-kenburns" : ""
              }`}
            />
          </div>
        ))}
        {/* Overlay degradado para mejorar legibilidad como en la referencia */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight text-white uppercase">
            Innovación y <br /> Sostenibilidad
          </h1>
          <p className="text-lg md:text-xl mb-10 font-normal max-w-xl text-white/90">
            Transformamos materiales para crear soluciones de alto impacto.
          </p>
          <button className="bg-[#F4B41A] text-[#002B36] px-10 py-3.5 rounded-sm font-bold text-sm hover:bg-[#E5A300] transition-all tracking-widest uppercase">
            NOSOTROS
          </button>
        </div>
      </div>
    </section>
  );
}

export function HeroSubtext() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <h2 className="text-fcm-blue text-3xl font-bold leading-tight">
            Innovación en refuerzo para concreto: Ingeniería que marca la diferencia
          </h2>
        </div>
        <div className="md:w-2/3 border-l border-gray-200 pl-10 text-gray-600 text-lg leading-relaxed">
          <p className="mb-6">
            Cada fibra FCM se fabrica bajo <strong className="text-fcm-blue">estándares técnicos de alto rendimiento</strong>, optimizando el comportamiento del <strong>concreto reforzado</strong> en condiciones exigentes.
          </p>
          <p>
            En la <strong>minería subterránea</strong>, el <strong>shotcrete</strong> o los <strong>pavimentos industriales</strong>, nuestras <strong className="text-fcm-blue">fibras sintéticas</strong> mejoran la cohesión, controlan la fisuración y elevan la <strong>eficiencia operativa</strong> en obra.
          </p>
        </div>
      </div>
    </div>
  );
}
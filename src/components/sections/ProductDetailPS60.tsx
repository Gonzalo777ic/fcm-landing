'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineCube, HiOutlineChartBar } from "react-icons/hi";

export default function ProductDetailPS60() {
  const technicalData = [
    { label: "Material base", value: "Polipropileno" },
    { label: "Longitud", value: "60 mm" },
    { label: "Textura", value: "Moleteado" },
    { label: "Densidad relativa", value: "0.90 – 0.92" },
    { label: "Tensión a la rotura", value: "Alta Resistencia (MPa)" },
    { label: "Punto de fusión", value: "150 °C – 170 °C" },
    { label: "Fibras por kg", value: "> 32,500" },
    { label: "Aplicación Principal", value: "Shotcrete" },
  ];

  return (
    <section className="bg-white pb-32">
      {/* 1. Header Integrado: Conexión con el Navbar sin espacios vacíos */}
      <div className="relative pt-32 pb-12 bg-fcm-blue overflow-hidden">
        <Image 
          src="/images/tunel.png" 
          alt="Textura Industrial" 
          fill 
          className="object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fcm-blue/80 to-fcm-blue" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav className="text-[10px] font-black uppercase tracking-[0.4em] flex gap-3 text-white/40">
            <Link href="/" className="hover:text-fcm-yellow transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-fcm-yellow transition-colors">Productos</Link>
            <span>/</span>
            <span className="text-fcm-yellow">PS60</span>
          </nav>
        </div>
      </div>

      {/* 2. Cuerpo del Producto */}
      <div className="container mx-auto px-6 md:px-12 pt-20">
        <div className="flex flex-col lg:flex-row gap-24 items-start mb-32">
          {/* Visualización Premium */}
          <div className="lg:w-1/2 relative group w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square w-full max-w-xl bg-gray-50 rounded-sm flex items-center justify-center p-12 overflow-hidden shadow-inner"
            >
              <div className="absolute inset-0 border-[1px] border-fcm-yellow/20 rounded-full scale-75 animate-pulse" />
              <Image 
                src="/images/products/ps-50-60.png" 
                alt="FIBRA PS60" 
                fill
                className="object-contain p-12 z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>

          {/* Info Principal */}
          <div className="lg:w-1/2">
            <span className="text-fcm-yellow font-black tracking-[0.5em] text-[10px] mb-6 block uppercase">
              Macro fibra sintética para refuerzo estructural
            </span>
            <h1 className="text-fcm-blue text-7xl md:text-9xl font-black uppercase mb-8 tracking-tighter leading-none relative">
              FIBRA <br /> 
              <span className="text-gray-100 absolute -bottom-4 md:-bottom-8 left-0 -z-10 opacity-50 uppercase">PS60</span>
              <span className="relative z-10">PS60</span>
            </h1>
            
            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-lg border-l-4 border-fcm-yellow pl-8">
              <p>
                La macrofibra <strong className="text-fcm-blue font-black uppercase">PS60</strong> incrementa notablemente la tenacidad del concreto gracias a su excelente agarre.
              </p>
              <p>
                Es la <strong className="text-fcm-blue font-black uppercase">revolución en shotcrete</strong>, ofreciendo un rendimiento superior en sostenimiento.
              </p>
              <p className="text-sm font-bold italic text-gray-400">
                Presentación: Fibras macro de Polipropileno de 60 mm.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Minería Subterránea", "Shotcrete", "Alto Desempeño"].map((tag) => (
                <span key={tag} className="bg-fcm-blue text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest shadow-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Grid Técnico (Bento Box Industrial) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 shadow-2xl overflow-hidden rounded-sm">
          {/* Beneficios Clave */}
          <div className="bg-white p-12">
            <h3 className="text-fcm-blue text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
              <HiOutlineShieldCheck className="text-fcm-yellow text-xl" /> Beneficios Clave
            </h3>
            <ul className="space-y-6">
              {[
                {b: "Libre de corrosión", d: "Durabilidad garantizada en ambientes agresivos."},
                {b: "Seguridad", d: "Más seguro y ligero de manipular que el acero."},
                {b: "Eficiencia", d: "Aumenta la productividad comparado con la malla de acero."},
                {b: "Sostenibilidad", d: "Menor impacto ambiental."},
                {b: "Ahorro en Equipos", d: "Menor desgaste de mangueras de bombeo."},
                {b: "Economía", d: "Menor costo por Joule – Fibra."}
              ].map((item, i) => (
                <li key={i} className="text-[11px] leading-tight group">
                  <span className="text-fcm-blue font-black uppercase block mb-1 group-hover:text-fcm-yellow transition-colors tracking-widest">{item.b}</span>
                  <span className="text-gray-400 font-bold uppercase">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aplicaciones */}
          <div className="bg-white p-12">
            <h3 className="text-fcm-blue text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
              <HiOutlineCube className="text-fcm-yellow text-xl" /> Aplicaciones
            </h3>
            <p className="text-[10px] font-black text-gray-300 uppercase mb-6 tracking-widest">
              Obras de alta absorción de energía:
            </p>
            <ul className="space-y-6">
              {[
                "Shotcrete en minería subterránea.",
                "Túneles y taludes.",
                "Pavimentos y losas industriales de alta carga."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 text-[11px] font-black text-gray-400 uppercase tracking-widest italic">
                  <span className="text-fcm-yellow text-lg">/</span> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Ficha Técnica */}
          <div className="bg-fcm-blue p-12 text-white">
            <h3 className="text-fcm-yellow text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
              <HiOutlineChartBar className="text-xl" /> Ficha Técnica
            </h3>
            <div className="space-y-3">
              {technicalData.map((data, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-2 text-[10px] uppercase tracking-[0.2em] font-black">
                  <span className="text-white/40">{data.label}</span>
                  <span className="text-fcm-yellow text-right">{data.value}</span>
                </div>
              ))}
            </div>
            <a 
              href="/archives/fichas/ficha-tecnica-polystark-ps-60.pdf" 
              target="_blank"
              className="w-full mt-10 bg-fcm-yellow text-fcm-blue py-5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all block text-center shadow-lg shadow-black/20"
            >
              Descargar Ficha Técnica PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
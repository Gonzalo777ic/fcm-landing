'use client';

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ConstructionContent() {
  return (
    <section className="bg-white pb-24">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-xs font-bold uppercase tracking-widest flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/aplicaciones" className="text-fcm-yellow hover:underline">Aplicaciones</Link>
            <span className="text-gray-400">/</span>
            <span className="text-fcm-blue">Construcción</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          {/* Imagen de Cabecera - Trabajador en obra */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/trabajador-martillo.png" 
                alt="Construcción Civil FCM" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Información Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-8">Construcción</h1>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                En obras de <strong className="text-fcm-blue">construcción civil y prefabricados</strong>, las fibras sintéticas FCM mejoran la <strong className="text-fcm-blue">resistencia a fisuración y cohesión del concreto</strong>, optimizando la eficiencia de colocación y durabilidad estructural.
              </p>
              <p>
                Sustituyen refuerzos secundarios (mallas electrosoldadas), <strong className="text-fcm-blue uppercase">simplificando el proceso constructivo</strong> y reduciendo los tiempos de ejecución sin comprometer la calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Técnico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-100 pt-20">
          
          {/* Beneficios y Aplicaciones Típicas */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Beneficios Claves</h3>
              </div>
              <ul className="space-y-5">
                {[
                  { t: "Acabado superior:", d: "Mejora la trabajabilidad y el acabado superficial." },
                  { t: "Vida útil:", d: "Aumenta la durabilidad del concreto a largo plazo." },
                  { t: "Economía:", d: "Reduce fisuras tempranas y costos de mantenimiento." },
                  { t: "Versatilidad:", d: "Compatible con cualquier tipo de dosificación o mezcla." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <span className="text-fcm-yellow font-bold mt-1 text-xl">✓</span>
                    <p><strong className="text-fcm-blue">{item.t}</strong> {item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones Típicas</h3>
              </div>
              <ul className="space-y-4 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><span className="text-fcm-yellow text-xl">✓</span> Elementos prefabricados (muros, vigas, paneles).</li>
                <li className="flex items-center gap-3"><span className="text-fcm-yellow text-xl">✓</span> Concretos arquitectónicos y decorativos.</li>
                <li className="flex items-center gap-3"><span className="text-fcm-yellow text-xl">✓</span> Obras hidráulicas, losas y cimentaciones.</li>
              </ul>
            </div>
          </div>

          {/* Productos Recomendados y Detalle de Refuerzo */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-fcm-yellow"></div>
              <h3 className="text-fcm-blue text-xl font-bold uppercase">Productos Recomendados</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "FIBRA PS60", desc: "Máxima resistencia para condiciones extremas.", link: "/productos/ps60" },
                { name: "FIBRA PS50", desc: "Refuerzo estructural de alto desempeño.", link: "/productos/ps50" },
              ].map((prod, i) => (
                <Link key={i} href={prod.link} className="group block bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-fcm-yellow/50 transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-fcm-blue font-black text-lg">{prod.name}</h4>
                      <p className="text-gray-500 text-sm">{prod.desc}</p>
                    </div>
                    <HiArrowNarrowRight className="text-fcm-yellow text-2xl group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Imagen del Detalle Multidireccional */}
            <div className="pt-8">
              <div className="relative h-64 rounded-xl overflow-hidden border border-gray-100 shadow-lg">
                <Image src="/images/bloque.png" alt="Detalle de refuerzo" fill className="object-contain bg-white p-4" />
              </div>
              <p className="text-center text-xs italic text-gray-400 mt-4 uppercase tracking-widest">
                Detalle de refuerzo multidireccional con fibra.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Proyectos (Mosaico) */}
        <div className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-6 bg-fcm-yellow"></div>
            <h3 className="text-fcm-blue text-2xl font-black uppercase">Proyectos Realizados</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[650px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/images/subiendo-escaleras.jpg" alt="Obra en altura" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/vaciado.png" alt="Vaciado de losas" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/vehiculo.png" alt="Planta de concreto" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
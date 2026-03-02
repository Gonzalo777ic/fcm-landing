'use client';

import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function PavementsContent() {
  return (
    <section className="bg-white pb-24">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6 md:px-12 text-xs font-bold uppercase tracking-widest flex gap-2">
          <Link href="/" className="text-fcm-yellow hover:text-fcm-blue">Inicio</Link>
          <span className="text-gray-300">/</span>
          <Link href="/aplicaciones" className="text-fcm-yellow hover:text-fcm-blue">Aplicaciones</Link>
          <span className="text-gray-300">/</span>
          <span className="text-fcm-blue">Pavimentos</span>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          {/* Imagen de Cabecera - Vaciado de Pavimento */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/vaciado.png" 
                alt="Pavimentos Industriales FCM" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Información Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-8">Pavimentos</h1>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Los <strong className="text-fcm-blue">pavimentos industriales y rígidos</strong> demandan concreto de <strong className="text-fcm-blue uppercase">alta resistencia y durabilidad</strong>, capaz de soportar cargas dinámicas y tráfico intenso.
              </p>
              <p>
                Las <strong className="text-fcm-blue uppercase">fibras sintéticas FCM</strong> aportan <strong className="text-fcm-blue">tenacidad, control de fisuras y mejor distribución de esfuerzos</strong>, reemplazando el acero tradicional con una solución más eficiente y libre de corrosión.
              </p>
              <p className="italic text-gray-500 border-l-4 border-fcm-yellow pl-4">
                El resultado: <strong className="text-fcm-blue">mayor vida útil</strong>, menor mantenimiento y tiempos de ejecución más cortos.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Técnico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-100 pt-20">
          
          {/* Aplicaciones Típicas y Beneficios */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones Típicas</h3>
              </div>
              <ul className="space-y-4 text-gray-600 font-medium">
                {[
                  "Pavimentos industriales de alto tránsito.",
                  "Pisos de almacenes y plataformas logísticas.",
                  "Aeropuertos, patios de maniobra y zonas de carga.",
                  "Losas sobre terreno y pavimentos rígidos."
                ].map((app, i) => (
                  <li key={i} className="flex items-center gap-3 italic">
                    <span className="text-fcm-yellow text-xl">✓</span> {app}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Beneficios Claves</h3>
              </div>
              <ul className="space-y-5">
                {[
                  { t: "Capacidad de carga:", d: "Incrementa la ductilidad y resistencia del concreto." },
                  { t: "Control de fisuras:", d: "Reduce el agrietamiento y la fatiga estructural." },
                  { t: "Optimización:", d: "Mejora el rendimiento y uniformidad del refuerzo." },
                  { t: "Eficiencia:", d: "Acelera los tiempos de colocación y mejora la eficiencia global." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <span className="text-fcm-yellow font-bold mt-1 text-xl">✓</span>
                    <p><strong className="text-fcm-blue">{item.t}</strong> {item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Productos Recomendados e Imagen Técnica */}
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

            {/* Imagen Técnica: Distribución Homogénea */}
            <div className="pt-8">
              <div className="relative h-64 rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white p-4">
                <Image src="/images/bloque.png" alt="Matriz de concreto" fill className="object-contain" />
              </div>
              <p className="text-center text-xs italic text-gray-400 mt-4 uppercase tracking-widest">
                Distribución homogénea de fibra en la matriz de concreto.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Proyectos (Mosaico) */}
        <div className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-6 bg-fcm-yellow"></div>
            <h3 className="text-fcm-blue text-2xl font-black uppercase">Proyectos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            {/* Imagen Grande de Pavimento */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/images/vaciado.png" alt="Obra de Pavimentos" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            {/* Columna de Imágenes Pequeñas */}
            <div className="flex flex-col gap-6">
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/tunel.png" alt="Infraestructura" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/trabajador-pico.png" alt="Personal de Obra" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
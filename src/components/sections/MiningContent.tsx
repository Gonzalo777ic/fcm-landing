import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function MiningContent() {
  return (
    <section className="bg-white pb-24">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-xs font-bold uppercase tracking-widest flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-300">/</span>
            <Link href="/aplicaciones" className="text-fcm-yellow hover:underline">Aplicaciones</Link>
            <span className="text-gray-300">/</span>
            <span className="text-fcm-blue">Minería</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          {/* Imagen de Cabecera */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/trabajador-pico.png" 
                alt="Minería Subterránea FCM" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Información Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-8">Minería</h1>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                En la <strong className="text-fcm-blue">minería subterránea</strong>, la seguridad y la resistencia del concreto proyectado son factores críticos.
              </p>
              <p>
                Las <strong className="text-fcm-blue uppercase">fibras sintéticas FCM</strong> sustituyen el refuerzo metálico tradicional, aportando <strong className="text-fcm-blue">mayor ductilidad, adherencia y control de fisuras</strong> en cada proyección. Su rendimiento comprobado en <strong className="text-fcm-blue">shotcrete para túneles, rampas y taludes</strong> permite aumentar la eficiencia operativa y reducir costos logísticos.
              </p>
            </div>
          </div>
        </div>

        {/* Beneficios y Productos Recomendados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-100 pt-20">
          {/* Beneficios */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-fcm-yellow"></div>
              <h3 className="text-fcm-blue text-xl font-bold uppercase">Beneficios Claves</h3>
            </div>
            <ul className="space-y-5">
              {[
                { t: "Refuerzo homogéneo", d: "sin riesgo de corrosión." },
                { t: "Reducción de rebote", d: "y desperdicio de material." },
                { t: "Ahorro en transporte", d: "y tiempo de aplicación." },
                { t: "Mayor seguridad", d: "para el personal en frente de trabajo." },
                { t: "Optimización logística:", d: "Menor peso y volumen que la malla electrosoldada." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700">
                  <span className="text-fcm-yellow font-bold mt-1 text-xl">✓</span>
                  <p><strong className="text-fcm-blue">{item.t}</strong> {item.d}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Recomendados y Ensayo */}
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

            {/* Imagen del Ensayo */}
            <div className="pt-8">
              <div className="relative h-64 rounded-xl overflow-hidden border border-gray-100 shadow-lg">
                <Image src="/images/bloque.png" alt="Ensayo de tenacidad" fill className="object-contain bg-white p-4" />
              </div>
              <p className="text-center text-xs italic text-gray-400 mt-4 uppercase tracking-widest">
                Ensayo de tenacidad en bloque reforzado con fibra.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Proyectos (Mosaico solicitado) */}
        <div className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-6 bg-fcm-yellow"></div>
            <h3 className="text-fcm-blue text-2xl font-black uppercase">Proyectos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/images/trabajador-martillo.png" alt="Obra civil" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/tunel.png" alt="Túnel minero" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-lg group">
                <Image src="/images/vaciado.png" alt="Vaciado de concreto" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

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
    <section className="bg-white pb-20">
      {/* Breadcrumb con margen para el Navbar sticky */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-sm font-bold uppercase tracking-widest flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-fcm-yellow hover:underline">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-fcm-blue">Fibra PS60</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Imagen - Estilo Industrial con el gráfico de túnel */}
          <div className="lg:w-1/2 relative flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/products/ps-50-60.png" 
                alt="FIBRA PS60 - Revolución en Shotcrete" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Columna Info Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-2 tracking-tighter">FIBRA PS60</h1>
            <h2 className="text-fcm-yellow text-xl font-bold uppercase tracking-[0.2em] mb-8 leading-tight">
              Macro fibra sintética para refuerzo estructural
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                La macrofibra <strong className="text-fcm-blue">PS60</strong> incrementa notablemente la tenacidad del concreto gracias a su excelente agarre. Es la <strong className="text-fcm-blue uppercase">revolución en shotcrete</strong>, ofreciendo un rendimiento superior en sostenimiento.
              </p>
              <p className="italic text-base text-gray-500 border-l-2 border-fcm-yellow pl-4">
                Presentación: Fibras macro de Polipropileno de 60 mm.
              </p>
            </div>

            {/* Tags de Desempeño */}
            <div className="flex flex-wrap gap-4">
              {["Minería Subterránea", "Shotcrete", "Alto Desempeño"].map((tag) => (
                <span key={tag} className="bg-fcm-blue text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Técnica Inferior - Grid de 2 columnas */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-100 pt-20">
          
          <div className="space-y-12">
            {/* Beneficios Clave */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Beneficios Clave</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { b: "Libre de corrosión", d: "Durabilidad garantizada en ambientes agresivos." },
                  { b: "Seguridad", d: "Más seguro y ligero de manipular que el acero." },
                  { b: "Eficiencia", d: "Aumenta la productividad comparado con la malla de acero." },
                  { b: "Sostenibilidad", d: "Menor impacto ambiental." },
                  { b: "Ahorro en Equipos", d: "Menor desgaste de mangueras de bombeo." },
                  { b: "Economía", d: "Menor costo por Joule – Fibra." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-fcm-yellow font-bold mt-1">✓</span>
                    <p><strong className="text-fcm-blue">{item.b}:</strong> {item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aplicaciones Específicas */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones</h3>
              </div>
              <p className="text-gray-600 mb-6 font-medium">Diseñada específicamente para obras que requieren alta absorción de energía:</p>
              <ul className="space-y-3">
                {["Shotcrete en minería subterránea.", "Túneles y taludes.", "Pavimentos y losas industriales de alta carga."].map((app, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium italic">
                    <span className="text-fcm-yellow text-xl">✓</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabla Ficha Técnica */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-fcm-yellow"></div>
              <h3 className="text-fcm-blue text-xl font-bold uppercase">Ficha Técnica</h3>
            </div>
            <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-100">
              {technicalData.map((data, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between items-center p-5 transition-colors hover:bg-fcm-yellow/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <span className="font-bold text-fcm-blue uppercase text-xs tracking-wider">{data.label}</span>
                  <span className="text-gray-600 text-sm font-semibold">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
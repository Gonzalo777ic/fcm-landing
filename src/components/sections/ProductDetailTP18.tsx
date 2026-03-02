import Image from "next/image";
import Link from "next/link";

export default function ProductDetailTP18() {
  const technicalData = [
    { label: "Material base", value: "Polipropileno" },
    { label: "Diámetro equivalente", value: "30 μm" },
    { label: "Longitud", value: "18 mm" },
    { label: "Densidad relativa", value: "0.90 – 0.92" },
    { label: "Resistencia Química", value: "Alta" },
    { label: "Punto de Fusión", value: "150 °C – 170 °C" },
    { label: "Absorción de agua", value: "0 %" },
    { label: "Conductividad eléctrica", value: "Nula" },
    { label: "Fibras por kg", value: "> 50 x 10⁶" },
  ];

  return (
    <section className="bg-white pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-sm font-bold uppercase tracking-widest flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-fcm-yellow hover:underline">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-fcm-blue">Fibra TP18</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Imagen con Círculo Dorado */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-8">
              <div className="absolute inset-0 border-[12px] border-fcm-yellow/20 rounded-full scale-90" />
              <Image 
                src="/images/products/tp18.png" 
                alt="FIBRA TP18" 
                width={400} 
                height={400} 
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Columna Info Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-2">FIBRA TP18</h1>
            <h2 className="text-fcm-yellow text-xl font-bold uppercase tracking-widest mb-6">
              Micro Fibra Sintética para Acabados Perfectos
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                La TP18 cuenta con un <strong className="text-fcm-blue">diámetro ultra delgado (30 µm)</strong> que le permite dispersarse en la mezcla con gran homogeneidad. Está diseñada para dejar un <strong className="text-fcm-blue">acabado superficial impecable</strong> y aumentar la durabilidad del concreto.
              </p>
              <p className="italic text-base text-gray-500">
                Cumple con la norma ASTM C 1116. Presentación en bolsa de 600 g.
              </p>
            </div>

            {/* Tags de Características */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Acabado Impecable", "Control de Fisuras", "Microfibra"].map((tag) => (
                <span key={tag} className="bg-gray-100 text-fcm-blue px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Técnica Inferior */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Beneficios y Aplicaciones */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Beneficios Principales</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { b: "Anti-fisuras", d: "Disminuye el agrietamiento en estado fresco y endurecido." },
                  { b: "Manejabilidad", d: "No afecta notoriamente la fluidez (slump) de la mezcla." },
                  { b: "Durabilidad", d: "Mejora la resistencia a la tracción y compresión." },
                  { b: "Resistencia", d: "Alta resistencia a ataques químicos y álcalis." },
                  { b: "Seguridad", d: "Libre de corrosión, seguro y fácil de utilizar." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-fcm-yellow font-bold">✓</span>
                    <p><strong className="text-fcm-blue">{item.b}:</strong> {item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Shotcrete en minería subterránea.",
                  "Túneles y taludes.",
                  "Pavimentos y losas industriales.",
                  "Concretos arquitectónicos de alto acabado."
                ].map((app, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-fcm-yellow font-bold">✓</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabla Ficha Técnica */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-fcm-yellow"></div>
              <h3 className="text-fcm-blue text-xl font-bold uppercase">Ficha Técnica</h3>
            </div>
            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-lg">
              {technicalData.map((data, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between p-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <span className="font-bold text-fcm-blue uppercase tracking-tight">{data.label}</span>
                  <span className="text-gray-600">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
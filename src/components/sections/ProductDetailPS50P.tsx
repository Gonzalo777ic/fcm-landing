import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPS50P() {
  const technicalData = [
    { label: "Material base", value: "Polipropileno" },
    { label: "Textura", value: "Moleteado" },
    { label: "Longitud", value: "50 mm" },
    { label: "Diámetro equivalente", value: "0.88 mm" },
    { label: "Densidad relativa", value: "0.90 – 0.92" },
    { label: "Tensión a la rotura", value: "400 MPa" },
    { label: "Punto de Fusión", value: "150 °C – 170 °C" },
    { label: "Absorción de agua", value: "Nula" },
    { label: "Conductividad eléctrica", value: "Nula" },
    { label: "Resistencia Química", value: "Excelente" },
    { label: "Fibras por kg", value: "> 32,500" },
  ];

  return (
    <section className="bg-white pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-sm font-bold uppercase tracking-widest flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-fcm-yellow hover:underline">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-fcm-blue">Fibra PS50P</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Imagen con Círculo Dorado */}
          <div className="lg:w-1/2 relative flex justify-center w-full">
            <div className="relative w-full max-w-md aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 border-[15px] border-fcm-yellow/20 rounded-full scale-90" />
              <Image 
                src="/images/products/ps50p.png" 
                alt="FIBRA PS50P" 
                width={400} 
                height={400} 
                className="relative z-10 drop-shadow-2xl object-contain" 
              />
            </div>
          </div>

          {/* Info Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-2 tracking-tighter">FIBRA PS50P</h1>
            <h2 className="text-fcm-yellow text-xl font-bold uppercase tracking-[0.2em] mb-8">
              Macro fibra sintética para refuerzo estructural
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                Diseñada para tener una <strong className="text-fcm-blue">mayor unión interfacial</strong> y brindar al concreto resistencia residual y reducción del agrietamiento.
              </p>
              <p>
                Su textura especial permite obtener una <strong className="text-fcm-blue uppercase">excelente adherencia</strong>, mientras que su flexibilidad mejora el acabado superficial. <strong className="text-fcm-blue">Reemplaza a la malla de acero</strong> y fibras metálicas.
              </p>
              <p className="italic text-base text-gray-500 border-l-2 border-fcm-yellow pl-4">
                Cumple con normas ASTM C 1116 / C 1116 M y EN-14889-2 (Clase II).
              </p>
            </div>

            {/* Tags de Aplicación */}
            <div className="flex flex-wrap gap-4">
              {["Pavimentos", "Losas", "Prefabricados"].map((tag) => (
                <span key={tag} className="bg-gray-100 text-fcm-blue px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sección Técnica Inferior */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-100 pt-20">
          
          <div className="space-y-12">
            {/* Descripción */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Descripción</h3>
              </div>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                  La macro fibra sintética estructural PS50p está diseñada y usada como refuerzo de concreto. Gracias a su <strong className="text-fcm-blue">mayor flexibilidad y menor memoria</strong>, se logra un acabado superficial superior en comparación con otras fibras.
                </p>
                <p className="italic">
                  Es la solución ideal para sustituir el refuerzo convencional en aplicaciones donde se busca control de fisuración y durabilidad sin riesgo de corrosión.
                </p>
              </div>
            </div>

            {/* Aplicaciones */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { t: "Pavimentos y Caminos", d: "Resistencia residual >1MPa." },
                  { t: "Losas de Concreto", d: "Resistencia superior sin mallas de acero." },
                  { t: "Elementos Prefabricados", d: "Mejora cohesión y resistencia al impacto." },
                  { t: "Reparación de Estructuras", d: "" },
                  { t: "Infraestructuras Marinas", d: "Protección total contra la corrosión." }
                ].map((app, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-fcm-yellow font-bold mt-1">✓</span>
                    <p><strong className="text-fcm-blue">{app.t}:</strong> {app.d}</p>
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
                  className={`flex justify-between items-center p-4 transition-colors hover:bg-fcm-yellow/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
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
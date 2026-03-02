import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPS50() {
  const technicalData = [
    { label: "Material base", value: "Polipropileno" },
    { label: "Textura", value: "Moleteado" },
    { label: "Longitud", value: "50 mm" },
    { label: "Diámetro equivalente", value: "0.88 mm" },
    { label: "Densidad relativa", value: "0.90 – 0.92" },
    { label: "Tensión a la rotura", value: "400 MPa" },
    { label: "Punto de Fusión", value: "150 °C – 170 °C" },
    { label: "Absorción de agua", value: "Nula" },
    { label: "Conductividad Eléctrica", value: "Nula" },
    { label: "Resistencia Química", value: "Excelente" },
    { label: "Fibras por kg", value: "> 32,500" },
  ];

  return (
    // CAMBIO: Añadimos pt-20 aquí para empujar todo el contenido debajo del Navbar fijo
    <section className="bg-white pb-20 pt-20"> 
      
      {/* Breadcrumb */}
      {/* CAMBIO: Eliminamos mt-20 de este div para que se pegue al tope del contenedor padre */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-[10px] font-bold uppercase tracking-[0.2em] flex gap-2">
            <Link href="/" className="text-fcm-yellow hover:underline">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-fcm-yellow hover:underline">Productos</Link>
            <span className="text-gray-400">/</span>
            <span className="text-fcm-blue">Fibra PS50</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Imagen con Estilo Industrial */}
          <div className="lg:w-1/2 relative flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/products/ps-50-60.png" 
                alt="FIBRA PS50 Aplicación" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fcm-blue/20 to-transparent" />
            </div>
          </div>

          {/* Columna Info Principal */}
          <div className="lg:w-1/2">
            <h1 className="text-fcm-blue text-5xl font-black uppercase mb-2 tracking-tighter">FIBRA PS50</h1>
            <h2 className="text-fcm-yellow text-xl font-bold uppercase tracking-[0.2em] mb-8">
              Macro fibra sintética para refuerzo estructural
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                Aporta <strong className="text-fcm-blue">mayor resistencia post-fisura</strong>, ductilidad y tenacidad, garantizando un refuerzo estructural eficiente con menor peso y costos de colocación.
              </p>
              <div className="bg-fcm-blue text-white p-6 rounded-sm border-l-8 border-fcm-yellow shadow-lg">
                <p className="leading-relaxed">
                  La <span className="font-bold text-fcm-yellow text-xl">PS50</span> es una fibra macro sintética desarrollada para <span className="uppercase font-bold tracking-tight">sustituir parcial o totalmente las mallas de acero</span> en concretos proyectados o pavimentos.
                </p>
              </div>
            </div>

            {/* Tags de Aplicación */}
            <div className="flex flex-wrap gap-4">
              {["Shotcrete Minero", "Túneles", "Pavimentos Industriales"].map((tag) => (
                <span key={tag} className="bg-fcm-blue text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 shadow-md">
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
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-2 border-gray-100 pl-6">
                "La macro fibra sintética estructural para concreto PS50 se caracteriza por tener un excelente agarre con el concreto e incrementar notablemente la tenacidad. PS50 refuerza el concreto en 3 dimensiones."
              </p>
            </div>

            {/* Aplicaciones */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-fcm-yellow"></div>
                <h3 className="text-fcm-blue text-xl font-bold uppercase">Aplicaciones</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Shotcrete en minería subterránea.",
                  "Túneles y taludes.",
                  "Pavimentos y losas industriales."
                ].map((app, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
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
              <h3 className="text-fcm-blue text-xl font-bold uppercase text-right">Ficha Técnica</h3>
            </div>
            <div className="grid grid-cols-1 gap-0 shadow-2xl rounded-xl overflow-hidden border border-gray-100">
              {technicalData.map((data, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between items-center p-4 transition-colors hover:bg-fcm-yellow/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <span className="font-bold text-fcm-blue uppercase text-xs tracking-wider">{data.label}</span>
                  <span className="text-gray-600 text-sm font-medium">{data.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
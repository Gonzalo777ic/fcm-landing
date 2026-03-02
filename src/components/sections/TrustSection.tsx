import Image from "next/image";

const benefits = [
  {
    title: "Más de 10 años de experiencia",
    description: "especializados en fibras para concreto.",
  },
  {
    title: "Asesoramiento personalizado",
    description: "técnico y operativo en obra.",
  },
  {
    title: "Calidad asegurada y certificada",
    description: "bajo estándares internacionales.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Columna de Texto */}
        <div className="lg:w-1/2">
          <h2 className="text-fcm-blue text-4xl md:text-5xl font-bold leading-tight mb-8 uppercase">
            Concretamos confianza junto a líderes del sector
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              FCM participa en proyectos de <span className="font-bold">infraestructura, minería y construcción</span> en todo el país, proporcionando <span className="font-bold">fibras sintéticas de refuerzo</span> que superan los estándares de desempeño.
            </p>
            <p>
              Nuestra experiencia con empresas como <span className="font-bold">Unicon, Cerro Lindo, Volcán y Condestable</span> respalda nuestra capacidad técnica y operativa.
            </p>
          </div>

          {/* Lista de Beneficios con Checkmarks */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-md border-2 border-fcm-yellow flex items-center justify-center mt-1">
                  <svg 
                    className="w-5 h-5 text-fcm-yellow" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-fcm-blue leading-tight uppercase text-sm md:text-base">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="lg:w-1/2 w-full h-[500px] md:h-[600px] relative rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/subiendo-escaleras.jpg"
            alt="Personal de FCM en obra"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
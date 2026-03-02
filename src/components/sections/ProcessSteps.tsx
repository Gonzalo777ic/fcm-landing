import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "EVALUACIÓN",
    description: "Análisis de requerimientos estructurales en obra para definir la dosificación exacta.",
    image: "/images/tunel.png",
  },
  {
    number: "02",
    title: "PROPUESTA",
    description: "Recomendación de la fibra idónea y entrega de ficha técnica de diseño.",
    image: "/images/casco.png",
  },
  {
    number: "03",
    title: "ENTREGA",
    description: "Logística inmediata desde planta local para cumplir el cronograma.",
    image: "/images/vehiculo.png",
  },
  {
    number: "04",
    title: "SOPORTE",
    description: "Supervisión técnica del mezclado y aplicación in-situ.",
    image: "/images/trabajador-martillo.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h3 className="text-fcm-yellow font-bold tracking-widest text-sm mb-2 uppercase">
            Cómo funciona
          </h3>
          <h2 className="text-fcm-blue text-3xl md:text-4xl font-bold uppercase">
            Nuestro proceso asegura eficiencia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative h-[450px] group overflow-hidden rounded-lg shadow-xl"
            >
              {/* Imagen de fondo */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay oscuro para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Número en la esquina superior derecha */}
              <span className="absolute top-4 right-6 text-fcm-yellow text-5xl font-black z-20 opacity-90">
                {step.number}
              </span>

              {/* Contenido de la tarjeta */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h4 className="text-fcm-yellow text-xl font-bold mb-3 tracking-wide">
                  {step.title}
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
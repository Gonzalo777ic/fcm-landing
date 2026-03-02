import { FaAward, FaUserTie, FaHistory, FaMapMarkerAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaMapMarkerAlt />,
    text: "Empresa 100% peruana"
  },
  {
    icon: <FaHistory />,
    text: "Más de 15 años de experiencia"
  },
  {
    icon: <FaAward />,
    text: "Calidad de productos garantizada",
    highlight: true // Para el círculo dorado distintivo
  },
  {
    icon: <FaUserTie />,
    text: "Asesoramiento de venta personalizada"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-fcm-blue py-24 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight">
          ¿Por qué elegir las fibras sintéticas de <br /> FCM para tu obra?
        </h2>
        <p className="text-gray-300 italic text-lg mb-8 max-w-3xl mx-auto font-light">
          «Cuando su estructura exige rendimiento y durabilidad, necesita un socio que domine el refuerzo con fibras para concreto.»
        </p>
        <div className="w-16 h-1 bg-fcm-yellow mx-auto mb-20"></div>

        {/* Grilla de Razones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icon Container */}
              <div className={`
                w-24 h-24 rounded-full flex items-center justify-center text-3xl mb-6 transition-all duration-500
                ${reason.highlight 
                  ? "border-2 border-fcm-yellow text-white bg-white/5" 
                  : "bg-white/10 text-white group-hover:bg-white/20"}
              `}>
                {reason.icon}
              </div>
              
              {/* Texto */}
              <p className="text-lg font-medium leading-snug max-w-[200px] mx-auto group-hover:text-fcm-yellow transition-colors">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
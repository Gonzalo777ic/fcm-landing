'use client';
import { useState } from "react";

const faqs = [
  {
    question: "¿Las fibras sintéticas pueden reemplazar completamente al acero?",
    answer: "Sí, en muchos casos las fibras macro sintéticas pueden sustituir el refuerzo metálico, ofreciendo resistencia equivalente o superior, sin los problemas de corrosión y con una colocación más rápida y segura. Sin embargo, la sustitución depende de las especificaciones estructurales y normativas de cada proyecto."
  },
  {
    question: "¿Qué tipo de fibra debo utilizar para mi proyecto?",
    answer: "Para control de fisuras plásticas o acabados finos, se utilizan fibras micro como PS0P. Para refuerzo estructural (shotcrete, túneles, pavimentos), se recomiendan las fibras macro como TP18, PS50 o PS60."
  },
  {
    question: "¿Las fibras afectan el proceso de mezclado o el acabado del concreto?",
    answer: "Cuando se utilizan correctamente, las fibras no alteran el proceso de mezclado ni el acabado. Por el contrario, mejoran la cohesión y la trabajabilidad del concreto, reduciendo la segregación."
  },
  {
    question: "¿Ofrecen soporte técnico o acompañamiento en obra?",
    answer: "Sí. En FCM contamos con un equipo técnico especializado que brinda asesoría en diseño, dosificación, aplicación y control de calidad en obra."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
        
        {/* Título Izquierda */}
        <div className="lg:w-1/3">
          <h3 className="text-fcm-yellow font-bold tracking-widest text-sm mb-2 uppercase">
            Más sobre nuestros productos
          </h3>
          <h2 className="text-fcm-blue text-4xl font-bold uppercase leading-tight">
            Preguntas <br /> frecuentes
          </h2>
        </div>

        {/* Acordeón Derecha */}
        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border-l-4 border-fcm-yellow overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-fcm-blue font-bold text-lg pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-fcm-yellow flex items-center justify-center text-fcm-blue font-bold transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  <span className="text-xl">+</span>
                </div>
              </button>
              
              <div className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
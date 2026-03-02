'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Las fibras sintéticas pueden reemplazar completamente al acero?",
    answer: "Sí, en muchos casos las fibras macro sintéticas pueden sustituir el refuerzo metálico, ofreciendo resistencia equivalente o superior, sin los problemas de corrosión y con una colocación más rápida y segura. Sin embargo, la sustitución depende de las especificaciones estructurales y normativas de cada proyecto."
  },
  {
    question: "¿Qué tipo de fibra debo utilizar para mi proyecto?",
    answer: "Para control de fisuras plásticas o acabados finos, se utilizan fibras micro como TP18. Para refuerzo estructural (shotcrete, túneles, pavimentos), se recomiendan las fibras macro como PS50 o PS60."
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
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Título Izquierda - Estilo Industrial */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-4 uppercase">
              Soporte y Conocimiento
            </h3>
            <h2 className="text-fcm-blue text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter">
              Preguntas <br /> <span className="text-gray-300">Frecuentes</span>
            </h2>
            <div className="w-16 h-1.5 bg-fcm-yellow mt-10" />
          </motion.div>
        </div>

        {/* Acordeón Derecha - Minimalista y Fluido */}
        <div className="lg:w-2/3">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-b border-gray-100 transition-colors duration-500 ${openIndex === index ? 'bg-gray-50/50' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-8 text-left group"
              >
                <span className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-fcm-yellow' : 'text-fcm-blue group-hover:text-fcm-yellow/70'}`}>
                  {faq.question}
                </span>
                
                {/* Icono animado minimalista */}
                <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <div className={`absolute w-full h-0.5 bg-fcm-yellow transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                  <div className={`absolute w-0.5 h-full bg-fcm-yellow transition-transform duration-500 ${openIndex === index ? 'rotate-90 opacity-0' : ''}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10">
                      <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
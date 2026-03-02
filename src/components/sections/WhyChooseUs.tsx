'use client';

import { useState, useEffect, useRef } from "react";
import { FaAward, FaUserTie, FaHistory, FaMapMarkerAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaMapMarkerAlt />,
    text: "Empresa 100% peruana",
    targetNumber: 100,
    suffix: "%"
  },
  {
    icon: <FaHistory />,
    text: "Más de 15 años de experiencia",
    targetNumber: 15,
    suffix: "+"
  },
  {
    icon: <FaAward />,
    text: "Calidad de productos garantizada",
    targetNumber: 100,
    suffix: "%"
  },
  {
    icon: <FaUserTie />,
    text: "Asesoramiento de venta personalizada",
    targetNumber: 24,
    suffix: "/7"
  }
];

// Sub-componente para el contador animado con Intersection Observer
function Counter({ target, duration = 2000, startAnimation }: { target: number; duration?: number; startAnimation: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return; // No inicia si no es visible

    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);

  return <span>{count}</span>;
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-fcm-blue py-24 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-tight">
          ¿Por qué elegir <span className="text-fcm-yellow">FCM</span> <br className="hidden md:block" /> para tu obra?
        </h2>
        
        <p className="text-gray-300 italic text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light leading-relaxed">
          «Cuando su estructura exige rendimiento y durabilidad, necesita un socio que domine el refuerzo con fibras para concreto.»
        </p>
        
        <div className="w-24 h-1.5 bg-fcm-yellow mx-auto mb-20 shadow-[0_0_10px_rgba(246,179,52,0.5)]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              <div className="w-28 h-28 rounded-full flex items-center justify-center text-4xl mb-8 transition-all duration-500 border-2 border-white/10 bg-white/5 text-white group-hover:border-fcm-yellow group-hover:bg-fcm-yellow/10 group-hover:shadow-[0_0_25px_rgba(246,179,52,0.2)]">
                {reason.icon}
              </div>
              
              <div className="text-5xl font-black text-fcm-yellow mb-3 tracking-tighter">
                <Counter target={reason.targetNumber} startAnimation={isVisible} />
                {reason.suffix}
              </div>

              <p className="text-xl md:text-2xl font-bold leading-tight max-w-[250px] mx-auto group-hover:text-fcm-yellow transition-colors duration-300 uppercase tracking-tight">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
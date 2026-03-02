'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Encabezado con Estilo Editorial - Texto Original */}
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-4 uppercase">
              Trayectoria y Compromiso
            </h3>
            <h1 className="text-fcm-blue text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              Quiénes <br /> <span className="text-gray-300">Somos</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 border-l-4 border-fcm-yellow pl-8"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Somos una empresa peruana productora de <strong className="text-fcm-blue">macro fibra sintética de polipropileno</strong> con más de 30 años de experiencia atendiendo clientes nacionales e internacionales. 
              Contamos con un <strong className="text-fcm-blue">producto de calidad garantizada</strong> por nuestra certificación <strong className="text-fcm-blue">ISO 9001:2015</strong>, porque sabemos que la seguridad es lo primero.
            </p>
          </motion.div>
        </div>

        {/* Bloque Central: Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Columna de Imagen con Elementos Decorativos */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-sm overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
            >
              <Image
                src="/images/casco.png"
                alt="Seguridad y Calidad FCM"
                fill
                className="object-cover transition-transform duration-[10s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fcm-blue/40 to-transparent" />
            </motion.div>
            
            {/* Sello de Calidad Flotante */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-fcm-blue text-white p-8 rounded-sm shadow-2xl z-20 max-w-[220px]">
              <p className="text-fcm-yellow font-black text-2xl mb-1">ISO 9001</p>
              <p className="text-[10px] uppercase tracking-widest leading-tight">
                Calidad certificada en todos nuestros procesos.
              </p>
            </div>
          </div>

          {/* Columna de Misión y Visión: Tarjetas Modernas */}
          <div className="lg:col-span-5 space-y-8">
            {/* MISIÓN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 border border-gray-100 rounded-sm hover:border-fcm-yellow transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-0.5 bg-fcm-yellow transition-all group-hover:w-16" />
                <h2 className="text-fcm-blue text-2xl font-black uppercase tracking-tighter">Misión</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Somos una empresa dedicada a la elaboración y comercialización de macro fibra sintética estructural, brindamos productos de calidad y un alto nivel de servicio, lo cual nos permite satisfacer las necesidades de nuestros clientes.
              </p>
            </motion.div>

            {/* VISIÓN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-gray-50 border border-gray-100 rounded-sm hover:border-fcm-yellow transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-0.5 bg-fcm-yellow transition-all group-hover:w-16" />
                <h2 className="text-fcm-blue text-2xl font-black uppercase tracking-tighter">Visión</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Ser reconocidos en el mercado nacional e internacional, fortaleciendo nuestra marca a través de un amplio portafolio de productos, así como la optimización de nuestro sistema de distribución y la atención excepcional a nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineDocumentText, HiOutlineShieldCheck, HiOutlineDownload, HiOutlineEye } from "react-icons/hi";

const sections = [
  {
    title: "Fichas Técnicas",
    icon: <HiOutlineDocumentText className="text-2xl" />,
    docs: [
      { name: "Fibra POLYSTARK TP18", type: "PDF", size: "1.2 MB", path: "/archives/fichas/ficha-microfibra-polystark-tp18.pdf" },
      { name: "Ficha Técnica Polystark PS 50p", type: "PDF", size: "1.5 MB", path: "/archives/fichas/ficha-tecnica-polystark-ps-50p.pdf" },
      { name: "Ficha Técnica Polystark PS 60-1", type: "PDF", size: "1.8 MB", path: "/archives/fichas/ficha-tecnica-polystark-ps-60.pdf" },
      { name: "Ficha Técnica Polystark PS 50", type: "PDF", size: "1.4 MB", path: "/archives/fichas/ficha-tecnica-polystark-ps-50-g.pdf" },
    ]
  },
  {
    title: "Calidad y Certificaciones",
    icon: <HiOutlineShieldCheck className="text-2xl" />,
    docs: [
      { name: "Certificado ISO 9001:2015", type: "ISO", size: "2.1 MB", path: "/archives/calidad/certificado-iso-9001.pdf" },
      { name: "Política del SGC", type: "PDF", size: "0.8 MB", path: "/archives/calidad/politica-del-sgc.pdf" },
    ]
  },
  {
    title: "Garantías y Legal",
    icon: <HiOutlineDocumentText className="text-2xl" />,
    docs: [
      { name: "Política de Garantía 2025 – FCM", type: "PDF", size: "0.5 MB", path: "/archives/garantia/politica-de-garantia.pdf" },
    ]
  }
];

export default function DocCenter() {
  return (
    <section className="bg-white pb-32">
      {/* Hero de Documentación */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden bg-fcm-blue">
        <Image 
          src="/images/documentacion-fondo.png" 
          alt="Centro de Documentación" 
          fill 
          className="object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fcm-blue/0 via-fcm-blue/60 to-white" />
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-fcm-yellow font-black tracking-[0.4em] text-[10px] mb-4 uppercase">
              Recursos Técnicos
            </h3>
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Centro de <br /> <span className="text-fcm-yellow">Documentación</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-20 relative z-20">
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6 pl-2">
                <div className="w-12 h-12 rounded-full bg-fcm-blue text-fcm-yellow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h2 className="text-fcm-blue text-2xl font-black uppercase tracking-tight">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {section.docs.map((doc, docIdx) => (
                  <div 
                    key={docIdx} 
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 hover:bg-white border border-gray-100 hover:border-fcm-yellow/40 rounded-sm hover:shadow-2xl hover:shadow-fcm-blue/5 transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className={`w-14 h-14 flex flex-col items-center justify-center rounded-sm font-black text-[10px] transition-transform group-hover/item:-rotate-3 ${doc.type === 'ISO' ? 'bg-fcm-blue text-white' : 'bg-red-600 text-white'}`}>
                        <span className="text-xs uppercase">{doc.type}</span>
                        <div className="w-4 h-0.5 bg-white/30 mt-1" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-fcm-blue text-lg tracking-tight uppercase leading-none mb-1">
                          {doc.name}
                        </span>
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                          Tamaño de archivo: {doc.size}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link 
                        href={doc.path} 
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 border border-fcm-blue/20 text-fcm-blue font-black text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-fcm-blue hover:text-white transition-all"
                      >
                        <HiOutlineEye className="text-sm" />
                        VER
                      </Link>
                      <a 
                        href={doc.path} 
                        download 
                        className="flex items-center gap-2 px-6 py-3 bg-fcm-yellow text-fcm-blue font-black text-[10px] uppercase tracking-[0.2em] rounded-sm hover:bg-fcm-blue hover:text-white shadow-lg shadow-fcm-yellow/20 hover:shadow-fcm-blue/20 transition-all active:scale-95"
                      >
                        <HiOutlineDownload className="text-sm" />
                        DESCARGAR
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN ACTUALIZADA: ENTIDADES CERTIFICADORAS Y HOMOLOGACIONES */}
        <div className="mt-40 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-fcm-blue font-black uppercase tracking-[0.3em] text-sm mb-16"
            >
                Entidades Certificadoras y Homologaciones
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-12 md:gap-24 bg-white p-12 md:p-20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-6xl mx-auto"
            >
                <div className="relative group transition-all duration-500 hover:scale-110">
                    <Image 
                        src="/images/certificaciones/registro.jpeg" 
                        alt="INACAL Registro" 
                        width={240} 
                        height={110} 
                        className="object-contain drop-shadow-sm group-hover:drop-shadow-md" 
                    />
                </div>

                <div className="relative group transition-all duration-500 hover:scale-110">
                    <Image 
                        src="/images/certificaciones/iso-9001.jpeg" 
                        alt="Certificación ISO 9001" 
                        width={240} 
                        height={110} 
                        className="object-contain drop-shadow-sm group-hover:drop-shadow-md" 
                    />
                </div>

                <div className="relative group transition-all duration-500 hover:scale-110">
                    <Image 
                        src="/images/certificaciones/bureau-veritas.jpeg" 
                        alt="Bureau Veritas Verified" 
                        width={240} 
                        height={110} 
                        className="object-contain drop-shadow-sm group-hover:drop-shadow-md" 
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
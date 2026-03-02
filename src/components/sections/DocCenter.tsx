import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Fichas Técnicas",
    docs: [
      { name: "Fibra POLYSTARK TP18", type: "PDF", path: "/archives/fichas/ficha-microfibra-polystark-tp18.pdf" },
      { name: "Ficha Técnica Polystark PS 50p", type: "PDF", path: "/archives/fichas/ficha-tecnica-polystark-ps-50p.pdf" },
      { name: "Ficha Técnica Polystark PS 60-1", type: "PDF", path: "/archives/fichas/ficha-tecnica-polystark-ps-60.pdf" },
      { name: "Ficha Técnica Polystark PS 50", type: "PDF", path: "/archives/fichas/ficha-tecnica-polystark-ps-50-g.pdf" },
    ]
  },
  {
    title: "Sistema de Gestión de la Calidad",
    docs: [
      { name: "Certificado ISO 9001:2015", type: "ISO", path: "/archives/calidad/certificado-iso-9001.pdf" },
      { name: "Política del SGC", type: "PDF", path: "/archives/calidad/politica-del-sgc.pdf" },
    ]
  },
  {
    title: "Políticas de Garantía",
    docs: [
      { name: "Política de Garantía 2025 – FCM", type: "PDF", path: "/archives/garantia/politica-de-garantia.pdf" },
    ]
  }
];

export default function DocCenter() {
  return (
    <section className="bg-gray-100 pb-20">
      {/* Hero de Documentación */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/documentacion-fondo.png" 
          alt="Centro de Documentación" 
          fill 
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-6">
          <div className="bg-fcm-blue/80 backdrop-blur-md border border-white/20 p-10 rounded-sm shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">Centro de Documentación</h1>
            <p className="text-fcm-yellow font-bold uppercase tracking-[0.2em] text-sm">
              Fichas técnicas, certificados de calidad y garantías
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-10 relative z-20">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-fcm-blue px-8 py-5">
                <h2 className="text-white text-xl font-bold uppercase tracking-wide">{section.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {section.docs.map((doc, docIdx) => (
                  <div key={docIdx} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-lg font-black text-xs ${doc.type === 'ISO' ? 'bg-fcm-blue text-white' : 'bg-red-500 text-white'}`}>
                        {doc.type}
                      </div>
                      <span className="font-bold text-fcm-blue text-lg">{doc.name}</span>
                    </div>

                    <div className="flex gap-3">
                      {/* Botón VER (Abre en pestaña nueva) */}
                      <Link 
                        href={doc.path} 
                        target="_blank"
                        className="px-6 py-2 border-2 border-fcm-blue text-fcm-blue font-black text-xs uppercase tracking-widest rounded-sm hover:bg-fcm-blue hover:text-white transition-all"
                      >
                        VER
                      </Link>
                      {/* Botón DESCARGAR (Descarga directa) */}
                      <a 
                        href={doc.path} 
                        download 
                        className="px-6 py-2 bg-fcm-yellow text-fcm-blue font-black text-xs uppercase tracking-widest rounded-sm hover:bg-yellow-500 shadow-md transition-all active:scale-95"
                      >
                        DESCARGAR
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logos de Certificación Final */}
<div className="mt-28 mb-10 text-center">
    <h3 className="text-fcm-blue font-black uppercase tracking-[0.25em] text-sm mb-12">
        Certificaciones y Homologaciones
    </h3>
    
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 bg-white p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 max-w-6xl mx-auto">
        {/* Logo INACAL */}
        <div className="relative group transition-all duration-500 hover:scale-125">
            <Image 
                src="/images/certificaciones/registro.jpeg" 
                alt="INACAL Registro" 
                width={220} 
                height={100} 
                className="object-contain drop-shadow-sm group-hover:drop-shadow-xl" 
            />
        </div>

        {/* Logo ISO 9001 */}
        <div className="relative group transition-all duration-500 hover:scale-125">
            <Image 
                src="/images/certificaciones/iso-9001.jpeg" 
                alt="Certificación ISO 9001" 
                width={220} 
                height={100} 
                className="object-contain drop-shadow-sm group-hover:drop-shadow-xl" 
            />
        </div>

        {/* Logo Bureau Veritas */}
        <div className="relative group transition-all duration-500 hover:scale-125">
            <Image 
                src="/images/certificaciones/bureau-veritas.jpeg" 
                alt="Bureau Veritas Verified" 
                width={220} 
                height={100} 
                className="object-contain drop-shadow-sm group-hover:drop-shadow-xl" 
            />
        </div>
    </div>
</div>
      </div>
    </section>
  );
}
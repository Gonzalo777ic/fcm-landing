import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F6B334] text-[#0A3B4B] py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Sección Superior: Eslogan y Contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Eslogan Grande */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              No solo fortalecemos el concreto, fortalecemos confianza en cada obra.
            </h2>
          </div>

          {/* Dirección */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Dirección</h4>
            <address className="not-italic text-lg leading-snug">
              Av. Tomas Alva Edison 245,<br />
              Urb. Ind. Santa Rosa Ate,<br />
              Lima, Perú
            </address>
          </div>
        </div>

        {/* Sección Media: Teléfonos, Horario y Redes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* Teléfonos con Enlace a WhatsApp */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Nuestros Teléfonos</h4>
            <div className="text-lg space-y-1">
              {/* Enlace para el primer celular */}
              <a 
                href="https://wa.me/51905437077?text=Hola%20FCM,%20deseo%20información%20sobre%20sus%20productos." 
                target="_blank"
                className="flex items-center gap-2 hover:opacity-70 transition-all"
              >
                <FaWhatsapp className="text-xl" /> +51 905 437 077
              </a>
              {/* Enlace para el segundo número (Fijo o Celular) */}
              <a 
              >
                +51 1 480 0034
              </a>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Horario</h4>
            <div className="text-lg space-y-1">
              <p>Lunes a Viernes</p>
              <p>07:00 a 5:00 PM</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Síguenos en nuestras redes</h4>
            <div className="flex gap-4">
              <Link 
                href="https://www.facebook.com/p/FCM-SAC-100069341406210/" 
                target="_blank"
                className="w-12 h-12 rounded-full border border-[#0A3B4B] flex items-center justify-center hover:bg-[#0A3B4B] hover:text-[#F6B334] transition-all"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link 
                href="https://pe.linkedin.com/company/fibraparaconcretoperu" 
                target="_blank"
                className="w-12 h-12 rounded-full border border-[#0A3B4B] flex items-center justify-center hover:bg-[#0A3B4B] hover:text-[#F6B334] transition-all"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea Divisoria Punteada */}
        <div className="border-t border-dashed border-[#0A3B4B]/30 pt-8">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
            <Link href="/nosotros" className="hover:opacity-70 transition">Nosotros</Link>
            <Link href="/productos" className="hover:opacity-70 transition">Productos</Link>
            <Link href="/aplicaciones" className="hover:opacity-70 transition">Aplicaciones</Link>
            <Link href="/documentos" className="hover:opacity-70 transition">Documentos</Link>
            {/* PUBLICACIONES ELIMINADO CORRECTAMENTE */}
          </nav>
        </div>
      </div>
    </footer>
  );
}
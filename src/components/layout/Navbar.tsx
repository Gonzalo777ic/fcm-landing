import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#002B36] w-full z-50 sticky top-0 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo con el logo_blanco.png solicitado */}
        <div className="flex items-center">
          <Image
            src="/images/logo_blanco.png" 
            alt="FCM Logo"
            width={140} 
            height={50}
            className="object-contain"
            priority
          />
        </div>
        
        <div className="hidden lg:flex space-x-6 items-center text-[13px] font-medium tracking-widest text-white/90">
          <Link href="#nosotros" className="hover:text-[#EAB308] transition-colors">NOSOTROS</Link>
          <Link href="#productos" className="hover:text-[#EAB308] transition-colors flex items-center gap-1">
            PRODUCTOS <span className="text-[10px]">▼</span>
          </Link>
          <Link href="#aplicaciones" className="hover:text-[#EAB308] transition-colors flex items-center gap-1">
            APLICACIONES <span className="text-[10px]">▼</span>
          </Link>
          <Link href="#documentos" className="hover:text-[#EAB308] transition-colors">DOCUMENTOS</Link>
          <Link href="#publicaciones" className="hover:text-[#EAB308] transition-colors">PUBLICACIONES</Link>
          
          <Link 
            href="#contacto" 
            className="bg-[#F4B41A] text-[#002B36] px-5 py-2.5 rounded-sm font-bold hover:bg-[#E5A300] transition-all uppercase text-xs tracking-tighter"
          >
            CONTÁCTANOS
          </Link>
        </div>
      </div>
    </nav>
  );
}
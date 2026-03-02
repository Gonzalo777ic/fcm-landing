import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/sections/AboutContent";
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // Nuevo

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Banner de Bienvenida */}
      <div className="bg-fcm-blue pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
          <p className="text-fcm-yellow font-bold tracking-[0.3em] text-xs uppercase mb-4">Nuestra Empresa</p>
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase">Sobre Nosotros</h1>
        </div>
      </div>
      
      <AboutContent />
      <WhyChooseUs /> {/* El prefooter único */}
      
      <Footer />
    </main>
  );
}
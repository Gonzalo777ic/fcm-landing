import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationsGrid from "@/components/sections/ApplicationsGrid";
import ContactPreFooter from "@/components/sections/ContactPreFooter";

export default function AplicacionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Banner Superior sutil para contexto */}
      <div className="bg-[#002B36] pt-32 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-fcm-yellow font-bold tracking-[0.3em] text-[10px] uppercase opacity-80">Proyectos e Ingeniería</p>
        </div>
      </div>

      <ApplicationsGrid />
      
      <ContactPreFooter />
      <Footer />
    </main>
  );
}
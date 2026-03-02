import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConstructionContent from "@/components/sections/ConstructionContent";
import ContactPreFooter from "@/components/sections/ContactPreFooter";

export default function ConstruccionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ConstructionContent />
      <ContactPreFooter />
      <Footer />
    </main>
  );
}
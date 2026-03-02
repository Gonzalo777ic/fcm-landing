import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PavementsContent from "@/components/sections/PavementsContent";
import ContactPreFooter from "@/components/sections/ContactPreFooter";

export default function PavimentosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PavementsContent />
      <ContactPreFooter />
      <Footer />
    </main>
  );
}
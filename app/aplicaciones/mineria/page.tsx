import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MiningContent from "@/components/sections/MiningContent";
import ContactPreFooter from "@/components/sections/ContactPreFooter";

export default function MineriaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MiningContent />
      <ContactPreFooter />
      <Footer />
    </main>
  );
}
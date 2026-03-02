import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DocCenter from "@/components/sections/DocCenter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function DocumentosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DocCenter />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
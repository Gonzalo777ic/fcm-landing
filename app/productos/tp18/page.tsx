import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailTP18 from "@/components/sections/ProductDetailTP18";
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // Reutilizamos tu prefooter azul

export default function TP18Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetailTP18 />
      <WhyChooseUs /> {/* Añadido al final como en tu referencia */}
      <Footer />
    </main>
  );
}
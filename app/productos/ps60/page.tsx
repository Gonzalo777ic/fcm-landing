import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailPS60 from "@/components/sections/ProductDetailPS60";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function PS60Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetailPS60 />
      {/* Prefooter azul de confianza reutilizable */}
      <WhyChooseUs /> 
      <Footer />
    </main>
  );
}
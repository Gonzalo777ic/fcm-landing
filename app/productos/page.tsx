import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsContent from "@/components/sections/ProductsContent";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductsContent />
            <WhyChooseUs /> {/* El prefooter único */}
      
      <Footer />
    </main>
  );
}
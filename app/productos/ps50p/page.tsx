import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailPS50P from "@/components/sections/ProductDetailPS50P";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function PS50PPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetailPS50P />
      <WhyChooseUs /> 
      <Footer />
    </main>
  );
}
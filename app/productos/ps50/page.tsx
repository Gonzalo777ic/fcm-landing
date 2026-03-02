import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailPS50 from "@/components/sections/ProductDetailPS50";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function PS50Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetailPS50 />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Espaciador para el navbar sticky */}
      <div className="pt-20">
        <ContactForm />
      </div>
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
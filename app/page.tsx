import Navbar from "@/components/layout/Navbar";
import Hero, { HeroSubtext } from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TrustSection from "@/components/sections/TrustSection";
import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import ContactPreFooter from "@/components/sections/ContactPreFooter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HeroSubtext />
      <ProcessSteps />
      <TrustSection />
      <Clients />
      <FAQ />
      <ContactPreFooter />
      <Footer />
    </main>
  );
}
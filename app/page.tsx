import Navbar from "@/components/layout/Navbar";
import Hero, { HeroSubtext } from "@/components/sections/Hero";
import ProcessSteps from "@/components/sections/ProcessSteps";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HeroSubtext />
      <ProcessSteps />
    </main>
  );
}
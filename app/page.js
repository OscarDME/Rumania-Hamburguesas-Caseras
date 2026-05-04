import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Steps from "@/components/Steps";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import CarouselSection from "@/components/CarouselSection";
import Bonuses from "@/components/Bonuses";
import Recap from "@/components/Recap";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <Story />
      <Steps />
      <Benefits />
      <Features />
      <CarouselSection />
      <Bonuses />
      <Recap />
      <Testimonials />
      <FinalCta />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}

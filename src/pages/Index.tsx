import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyLabubuSection from "@/components/WhyLabubuSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhyLabubuSection />
        <MenuSection />
        <TestimonialsSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

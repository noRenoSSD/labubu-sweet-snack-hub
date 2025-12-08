import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";
import mascot from "@/assets/mascot.png";
import { MessageCircle, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-purple-soft">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-medium/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Inovasi Camilan Semarang</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-purple">LABUBU</span>
              <br />
              <span className="text-foreground">Lumpia Ubi Ungu</span>
              <br />
              <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                Sehat & Kaya Serat
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Kombinasi rasa unik: renyah di luar, lelehan coklat/keju di dalam, 
              <span className="text-primary font-semibold"> tanpa pewarna buatan</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/6285867838437" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Pesan Sekarang!
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("menu")} className="w-full sm:w-auto">
                Lihat Menu
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start pt-4 text-sm sm:text-base">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Alami</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">GI Rendah</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Aman Diabetes</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">Serat</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Tinggi</p>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.3s" }}>
            {/* Mascot */}
            <img
              src={mascot}
              alt="Labubu Mascot"
              className="hidden sm:absolute -top-8 -left-3 sm:-top-10 sm:-left-5 lg:left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 animate-bounce-slow z-20"
            />
            
            {/* Main Product Image */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 gradient-hero rounded-3xl blur-2xl opacity-30 scale-110" />
              <img
                src={heroProduct}
                alt="Labubu - Lumpia Ubi Ungu dengan isian coklat dan keju"
                className="relative w-full rounded-3xl shadow-card border-4 border-card"
              />
              
              {/* Floating price tag */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:bottom-8 lg:-right-8 bg-card rounded-2xl shadow-card p-3 sm:p-4 animate-bounce-slow text-sm sm:text-base" style={{ animationDelay: "1s" }}>
                <p className="text-xs text-muted-foreground">Mulai dari</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">Rp 12.000</p>
                <p className="text-xs text-muted-foreground">/pcs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll ke tentang kami"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;

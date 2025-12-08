import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyLabubuSection from "@/components/WhyLabubuSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import FAQSection from "@/components/FAQSection";

const documentationData = [
  {
    title: "Bazar PMW",
    images: ["/docs/pmw1.jpeg", "/docs/pmw2.jpeg"],
    description: "Partisipasi kami di Bazar Program Mahasiswa Wirausaha (PMW) yang diselenggarakan oleh universitas.",
  },
  {
    title: "Bazar Tata Niaga Polines",
    images: ["/placeholder.svg"],
    description: "Coming Soon",
  },
  {
    title: "CFD SiKatak Undip",
    images: ["/docs/cfdsikatak1.jpeg", "/docs/cfdsikatak2.jpeg"],
    description: "Kami turut meramaikan Car Free Day (CFD) di area SiKatak, Universitas Diponegoro.",
  },
];

const DocumentationSection = () => {
  return (
    <section id="documentation" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dokumentasi Kami</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Momen-momen yang berhasil kami abadikan di berbagai acara.
            </p>
          </div>
        </div>
        {/* Please install the following packages to make this section work: */}
        {/* npm install embla-carousel-react embla-carousel-autoplay */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {documentationData.map((item, index) => (
              <CarouselItem key={index} className="basis-full md:basis-full lg:basis-full">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="aspect-video object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>{item.description}</DialogDescription>
                      </DialogHeader>
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                          {item.images.map((image, i) => (
                            <CarouselItem key={i}>
                              <img src={image} alt={`${item.title} - ${i + 1}`} className="w-full h-auto" />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhyLabubuSection />
        <MenuSection />
        <TestimonialsSection />
        <DocumentationSection />
        <FAQSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

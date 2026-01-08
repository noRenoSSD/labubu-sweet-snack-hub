import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, MapPin, Clock, Truck } from "lucide-react";
// Import baru untuk logo asli
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const OrderSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-64 gradient-purple-soft opacity-50" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Cara Pesan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pesan <span className="text-gradient-purple">Labubu</span> Sekarang!
          </h2>
        </div>

        {/* Order Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[hsl(142_70%_45%)] flex items-center justify-center mb-4">
              <FaWhatsapp className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-4">Chat langsung untuk order cepat dan tanya-tanya produk</p>
            <Button variant="whatsapp" className="w-full" asChild>
              <a href="https://wa.me/6285867838437" target="_blank" rel="noopener noreferrer">
                Chat Sekarang
              </a>
            </Button>
          </div>

          {/* Social Media (Instagram only) */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
            
            {/* BAGIAN 1: Icon dengan Background Signature Instagram */}
            {/* Saya mengganti 'gradient-hero' dengan gradasi kuning-pink-ungu */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <FaInstagram className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">Social Media</h3>
            <p className="text-muted-foreground text-sm mb-4">DM kami di Instagram untuk pemesanan</p>
            
            <div className="flex gap-2">
              {/* BAGIAN 2: Tombol dengan Background Signature Instagram */}
              {/* Saya menghapus variant="outline" dan menambahkan class gradasi manual */}
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white border-0 hover:opacity-90" 
                asChild
              >
                <a href="https://www.instagram.com/eatlumpia.labubu/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
            </div>
        </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* PO System */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Sistem PO</h4>
              <p className="text-sm text-muted-foreground">Pre-order batch setiap minggu untuk kualitas terjamin</p>
            </div>
          </div>

          {/* Delivery Area */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Area Layanan</h4>
              <p className="text-sm text-muted-foreground">Tembalang, Semarang City & sekitarnya</p>
            </div>
          </div>

          {/* Courier */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50">
            <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pengiriman</h4>
              <p className="text-sm text-muted-foreground">Tersedia via J&T, JNE untuk frozen product</p>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center p-8 rounded-3xl gradient-card border border-border shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-4">Siap Mencoba Labubu?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Pesan sekarang dan rasakan sensasi lumpia ubi ungu yang sehat, enak, dan bikin nagih!
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/6285867838437" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-5 h-5" />
              Pesan via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;

import mascot from "@/assets/mascot.png";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div id="contact" className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={mascot} alt="Labubu Mascot" className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold">LABUBU</h3>
                <p className="text-background/70 text-sm">Lumpia Ubi Ungu</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Inovasi camilan Semarang yang menggabungkan cita rasa tradisional dengan kesehatan modern. 
              Sehat, enak, dan tanpa pewarna buatan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Menu</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#menu" className="hover:text-background transition-colors">Produk</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">Tentang Kami</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-background/70">
              <li>📍 Tembalang, Semarang</li>
              <li>📞 +62 858 6783 8437</li>
              <li>📧 eatlumpia@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
          <p className="text-background/50 text-sm mb-4 md:mb-0">
            © {currentYear} LABUBU. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/eatlumpia.labubu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6285867838437"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

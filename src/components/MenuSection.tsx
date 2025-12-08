import { Button } from "@/components/ui/button";
import productChocolate from "@/assets/product-chocolate.jpg";
import productMatcha from "@/assets/product-matcha.jpg";
import productTiramisu from "@/assets/product-tiramisu.jpg";
import { MessageCircle } from "lucide-react";

const toppings = [
  {
    name: "Saus Coklat",
    image: productChocolate,
    description: "Saus coklat premium yang manis dan creamy",
    popular: true,
  },
  {
    name: "Matcha",
    image: productMatcha,
    description: "Bubuk matcha Jepang dengan rasa earthy yang unik",
    popular: false,
  },
  {
    name: "Tiramisu",
    image: productTiramisu,
    description: "Kombinasi kopi dan mascarpone yang elegan",
    popular: false,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-purple-light/50 via-transparent to-gold-light/20 blur-3xl -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Menu Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pilih Topping <span className="text-gradient-purple">Favoritmu</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Semua varian tersedia dengan isian <span className="font-semibold text-primary">Coklat</span> atau <span className="font-semibold text-primary">Keju</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {toppings.map((topping, index) => (
            <div
              key={topping.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Popular Badge */}
              {topping.popular && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full gradient-gold text-xs font-bold text-secondary-foreground">
                  Favorit!
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={topping.image}
                  alt={`Labubu topping ${topping.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2">{topping.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{topping.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Ready to Eat */}
          <div className="relative p-6 rounded-2xl bg-card border-2 border-primary shadow-card overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gradient-hero rounded-full blur-2xl opacity-20 translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                Ready To Eat
              </span>
              <p className="text-4xl font-bold text-foreground mb-1">
                Rp 12.000<span className="text-lg font-normal text-muted-foreground">/pcs</span>
              </p>
              <p className="text-muted-foreground text-sm">Langsung santap, hangat & renyah</p>
            </div>
          </div>

          {/* Frozen */}
          <div className="relative p-6 rounded-2xl bg-card border-2 border-secondary shadow-gold overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gradient-gold rounded-full blur-2xl opacity-20 translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-4">
                Frozen
              </span>
              <p className="text-4xl font-bold text-foreground mb-1">
                Rp 30.000<span className="text-lg font-normal text-muted-foreground">/pack</span>
              </p>
              <p className="text-muted-foreground text-sm">Simpan di freezer, goreng kapan saja</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/6285867838437" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Pesan Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

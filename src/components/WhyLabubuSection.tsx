import { Heart, Leaf, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Indeks Glikemik Rendah",
    description: "Aman untuk penderita diabetes dan menjaga kadar gula darah tetap stabil.",
  },
  {
    icon: Heart,
    title: "Kaya Serat Tinggi",
    description: "Membantu pencernaan dan membuat kenyang lebih lama.",
  },
  {
    icon: Shield,
    title: "Vitamin A, C & Mineral",
    description: "Mendukung kesehatan mata, kulit, dan sistem imun tubuh.",
  },
  {
    icon: Sparkles,
    title: "Tanpa Pewarna Buatan",
    description: "Warna ungu alami dari ubi ungu asli, 100% natural.",
  },
];

const WhyLabubuSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        {/* Problem Statement */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            Mengapa Labubu?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Camilan Manis yang <span className="text-gradient-purple">Sehat</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Di era kesadaran kesehatan yang tinggi (56% peduli fisik, 36% peduli mental), 
            <span className="text-primary font-semibold"> 1 dari 10 orang</span> berisiko diabetes 
            akibat konsumsi gula tinggi. Labubu hadir sebagai solusi ngemil manis tanpa rasa bersalah.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Main Ingredient Highlight */}
        <div className="mt-16 p-8 rounded-3xl gradient-card border border-border shadow-soft">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🍠</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Bahan Utama: Ubi Ungu</h3>
              <p className="text-muted-foreground">
                Ubi ungu kaya akan antosianin (antioksidan), karbohidrat kompleks, dan serat tinggi. 
                Camilan lokal unik dengan sentuhan modern yang bikin nagih!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLabubuSection;

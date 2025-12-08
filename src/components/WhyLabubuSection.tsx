import { useEffect, useState } from "react";

const benefits = [
  {
    image: "/docs/info1.jpeg",
    title: "Kaya Serat Tinggi",
    description: "Membantu pencernaan dan membuat kenyang lebih lama.",
  },
  {
    image: "/docs/info2.jpeg",
    title: "Vitamin",
    description: "Sumber vitamin A, C, dan mineral yang mendukung kesehatan tubuh.",
  },
  {
    image: "/docs/info3.jpeg",
    title: "Tanpa Pewarna Buatan",
    description: "Warna ungu alami dari ubi ungu asli, 100% natural.",
  },
];

const ubiUnguFullDescription = "Ubi ungu (Ipomoea batatas L. var. Ayamurasaki) adalah jenis umbi-umbian yang kaya akan nutrisi lengkap. Kandungan antosianin dalam ubi ungu adalah pigmen alami yang memberikan warna ungu dan berfungsi sebagai antioksidan kuat untuk melawan radikal bebas. Selain itu, ubi ungu mengandung karbohidrat kompleks yang dicerna lebih lambat, sehingga tidak menyebabkan lonjakan gula darah yang drastis. Tingginya kandungan serat membantu pencernaan dan membuat Anda merasa lebih lama kenyang. Ubi ungu juga kaya akan kalium, vitamin C, vitamin A, dan mineral penting lainnya yang mendukung kesehatan mata, kulit, dan sistem imun tubuh. Dengan tekstur yang lembut dan rasa yang alami manis, ubi ungu menjadi bahan baku sempurna untuk camilan sehat yang lezat tanpa perlu menambahkan pewarna atau pemanis buatan.";

const WhyLabubuSection = () => {
  const ubiImages = ["/docs/ubi1.jpeg", "/docs/ubi2.jpeg"];
  const [currentUbi, setCurrentUbi] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentUbi((p) => (p + 1) % ubiImages.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32 bg-card relative overflow-hidden">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-44 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Ingredient Highlight (formatted like benefit cards) */}
        <div className="mt-16">
          <div className="group rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-card overflow-hidden">
            <div className="w-full h-44 md:h-56 lg:h-64 overflow-hidden relative">
              <img
                src={ubiImages[currentUbi]}
                alt="Bahan Utama Ubi Ungu"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Bahan Utama: Ubi Ungu</h3>
              <p className="text-muted-foreground mb-4">
                {ubiUnguFullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyLabubuSection;

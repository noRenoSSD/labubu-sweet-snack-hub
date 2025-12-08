import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dinda Pratiwi",
    role: "Mahasiswa UNDIP",
    content: "Enak banget! Ubi ungunya lembut, coklat di dalamnya meleleh sempurna. Jadi camilan favorit pas belajar!",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    content: "Sebagai penderita diabetes, akhirnya bisa ngemil manis yang aman. Rasa tidak kalah dengan camilan biasa!",
    rating: 5,
    avatar: "BS",
  },
  {
    name: "Maya Kusuma",
    role: "Food Blogger",
    content: "Konsep yang unik! Perpaduan tradisional dan modern. Wajib coba kalau ke Semarang.",
    rating: 5,
    avatar: "MK",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apa Kata <span className="text-gradient-purple">Mereka?</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Programs */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LABUBU Challenge */}
          <div className="p-6 rounded-2xl gradient-card border border-border shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">LABUBU Challenge</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ikuti tantangan bulanan dengan hashtag <span className="text-primary font-semibold">#LabubuSnackChallenge</span> dan menangkan hadiah menarik!
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Lihat Challenge →</a>
              </div>
            </div>
          </div>

          {/* LABUBU Story */}
          <div className="p-6 rounded-2xl gradient-card border border-border shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📸</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">LABUBU Story</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Share pengalaman Labubu-mu di media sosial dan dapatkan kesempatan di-repost di akun kami!
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Bagikan Ceritamu →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

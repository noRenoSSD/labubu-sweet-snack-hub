import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Apakah Labubu aman untuk penderita diabetes?",
    a: "Labubu menggunakan ubi ungu yang memiliki indeks glikemik lebih rendah dibandingkan camilan manis biasa. Namun, jika Anda memiliki kondisi medis, konsultasikan terlebih dahulu dengan dokter.",
  },
  {
    q: "Apakah Labubu mengandung pewarna atau pengawet?",
    a: "Tidak. Warna ungu pada Labubu berasal dari ubi ungu asli (antasianin), tanpa pewarna buatan atau pengawet.",
  },
  {
    q: "Bagaimana cara penyimpanan dan masa simpan Labubu?",
    a: "Simpan di tempat sejuk dan kering. Untuk hasil terbaik, konsumsi dalam 2-3 hari setelah pembelian atau ikuti instruksi penyimpanan pada kemasan jika disimpan di lemari es.",
  },
  {
    q: "Apakah tersedia varian rasa?",
    a: "Ya, saat ini tersedia varian isi coklat dan keju. Kami berencana menambah varian baru sesuai permintaan pelanggan.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="text-muted-foreground mt-2">Pertanyaan umum seputar produk dan pemesanan Labubu.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground mb-3">Masih punya pertanyaan?</p>
            <Button asChild variant="hero">
              <a href="https://wa.me/6285867838437" target="_blank" rel="noopener noreferrer">Tanya via WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

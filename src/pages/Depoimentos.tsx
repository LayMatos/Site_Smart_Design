import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Depoimentos = () => {
  const depoimentos = [
    {
      name: "Ana Clara",
      comment: "Fui ou nore 50 nes de Dispiritieset.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Urea & repellz simasta de eleosre! eal",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Itos orm do coniennde terieis tio indrime beletol",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Oarres te endoliies ata moend tie nms e klat",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Fue Design trensilide stipape potis ie arprovner klerm-Hannsells.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Yesi stess a calads de Horts stirre mid e nuns de cosmessize tetipe broges.",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main id="content" className="flex-1">
        {/* Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12">
              O QUE DIZEM NOSSOS CLIENTES
            </h1>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4" />
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(depoimento.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground mb-4">"{depoimento.comment}"</p>
                  <p className="text-sm font-medium text-foreground">- {depoimento.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Depoimentos;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import kitchenHero from "@/assets/kitchen-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const testimonials = [
    {
      name: "Ana Clara",
      comment: "Fui ao nore 50 nes de dispiritieait.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Urea & repelle stransto de elosere! eal",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Itos orm do coniennde terieis tio indrime beletol",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main id="content" className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  COZINHAS DOS SEUS SONHOS.
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Design personalizado e funcionalidade para o coração da sua casa.
                </p>
                <Link to="/projetos">
                  <Button variant="secondary" size="lg">
                    VER PROJETOS
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={kitchenHero}
                  alt="Cozinha moderna"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              O QUE DIZEM NOSSOS CLIENTES
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4" />
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="text-sm font-medium text-foreground">- {testimonial.name}</p>
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

export default Home;

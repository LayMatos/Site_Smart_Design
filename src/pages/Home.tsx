import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Layers, Cube, ShieldCheck, Clock, Handshake, PiggyBank, Quote } from "lucide-react";
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
              <div className="animate-in slide-in-from-left-6 fade-in-0">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                  COZINHAS DOS SEUS SONHOS.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
                  Design personalizado e funcionalidade para o coração da sua casa.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/projetos">
                    <Button variant="secondary" size="lg">
                      VER PROJETOS
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      FALE CONOSCO
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-border animate-in slide-in-from-right-6 fade-in-0">
                <img
                  src={kitchenHero}
                  alt="Cozinha moderna"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                NOSSOS DIFERENCIAIS
              </h2>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="h-[2px] w-10 bg-secondary" />
                <span className="h-[2px] w-10 bg-secondary/70" />
                <span className="h-[2px] w-10 bg-secondary/50" />
              </div>
              <a
                href="https://wa.me/5565992450630?text=Olá,%20quero%20fazer%20meu%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  QUERO FAZER MEU ORÇAMENTO!
                </Button>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">MATÉRIA PRIMA DE QUALIDADE</h3>
                <p className="text-sm text-muted-foreground">
                  Usamos as madeiras e MDFs de melhor qualidade do mercado. Somos irredutíveis quanto à qualidade de nossos projetos.
                </p>
              </div>
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <Cube className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">PROJETO 3D E ACOMPANHAMENTO</h3>
                <p className="text-sm text-muted-foreground">
                  Design personalizado e visualização 3D sem custo extra. Acompanhamos cada etapa, com visitas semanais para garantir a qualidade do projeto.
                </p>
              </div>
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">GARANTIA E DURABILIDADE</h3>
                <p className="text-sm text-muted-foreground">
                  Nossos móveis são feitos para durar. Caso ocorra algum (raro) defeito, você estará assegurado(a) pela nossa garantia.
                </p>
              </div>
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">ENTREGA NO PRAZO</h3>
                <p className="text-sm text-muted-foreground">
                  Somos conhecidos por nossa pontualidade para finalizar a entrega dos projetos.
                </p>
              </div>
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">FORNECEDORES HOMOLOGADOS</h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos apenas fornecedores selecionados, garantindo a excelência e exclusividade em cada projeto.
                </p>
              </div>
              <div className="group bg-card rounded-lg shadow p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
                <div className="w-12 h-12 rounded-full bg-secondary/30 text-primary flex items-center justify-center mb-3">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">PREÇO COMPETITIVO</h3>
                <p className="text-sm text-muted-foreground">
                  Você não encontrará um custo-benefício melhor. Entregamos alta qualidade com um preço extremamente competitivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
              O QUE DIZEM NOSSOS CLIENTES
            </h2>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="h-[2px] w-10 bg-secondary" />
              <span className="h-[2px] w-10 bg-secondary/70" />
              <span className="h-[2px] w-10 bg-secondary/50" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-md text-center border hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Quote className="h-8 w-8 text-muted-foreground" />
                  </div>
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

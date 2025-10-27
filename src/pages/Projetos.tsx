import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Lightbulb, Handshake, Trees } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projetos = () => {
  const projetos = projects;

  const valores = [
    {
      icon: Lightbulb,
      title: "Inovação e Criatividade",
      subtitle: "emite pqs pattraf.",
    },
    {
      icon: Handshake,
      title: "Comprissmo e Qualidade",
      subtitle: "en d as kirssio de pessat",
    },
    {
      icon: Trees,
      title: "Foilesiáldnirio as ellems peutersen de",
      subtitle: "palete dig tirae Eliice",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main id="content" className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-10 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12">
              NOSSOS PROJETOS RECENTES
            </h1>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {projetos.map((projeto) => (
                <div key={projeto.slug} className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src={projeto.image} alt={projeto.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{projeto.title}</h3>
                    <p className="text-muted-foreground mb-4">{projeto.subtitle}</p>
                    <Link to={`/projetos/${projeto.slug}`}>
                      <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                        VER DETALHES
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              NOSSOS VISĨÃ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {valor.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{valor.subtitle}</p>
                    <p className="text-sm text-foreground mt-4">- Ana Clara</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projetos;

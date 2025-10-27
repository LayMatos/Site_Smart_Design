import { Button } from "@/components/ui/button";
import type React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Share2, Youtube, Linkedin } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main id="content" className="flex-1">
        {/* Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12">
              FALE CONOSCO
            </h1>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Image & Form */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                  <img
                    src={teamMeeting}
                    alt="Nossa equipe"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-primary mb-6">
                  ENVIE UMA MESSAGEN
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Nome:"
                    className="bg-card"
                  />
                  <Input
                    type="email"
                    placeholder="- email:"
                    className="bg-card"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefone:"
                    className="bg-card"
                  />
                  <Textarea
                    placeholder="Mensagem:"
                    rows={4}
                    className="bg-card"
                  />
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    ENVIAR MENSAGEN
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4">
                  War etıp ute ststin le cde mss ps erecte dullwca pee csi ir qs tisnillas
                  tiorsta roa ea er pultioet ctia tiaqia.
                </p>
              </div>

              {/* Right Column - Map & Contact Info */}
              <div>
                <div className="bg-muted rounded-lg h-96 mb-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground">Smart Design</p>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    NOSSOS CONTATOS
                  </h2>
                  
                  <div className="space-y-3 mb-8">
                    <div>
                      <span className="font-medium text-foreground">Telefone:</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">- email:</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Telefone:</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Email:</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Endereço:</span>
                      <span className="text-foreground">- Ana Clara</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Share2 className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;

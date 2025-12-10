import { Button } from "@/components/ui/button";
import type React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Share2, Youtube, Linkedin } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "Olá, Smart Design!",
      name && `Nome: ${name}`,
      email && `E-mail: ${email}`,
      phone && `Telefone: ${phone}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean);

    const text = lines.join("\n");
    const url = `https://wa.me/5565992450630?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
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
                  ENVIE UMA MENSAGEM
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    className="bg-card"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-card"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    className="bg-card"
                  />
                  <Textarea
                    name="message"
                    placeholder="Mensagem"
                    rows={4}
                    required
                    className="bg-card"
                  />
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    ENVIAR MENSAGEM
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4">
                  War etıp ute ststin le cde mss ps erecte dullwca pee csi ir qs tisnillas
                  tiorsta roa ea er pultioet ctia tiaqia.
                </p>
              </div>

              {/* Right Column - Map & Contact Info */}
              <div>
                <div className="rounded-lg overflow-hidden h-96 mb-8 border">
                  <iframe
                    title="Mapa - Smart Design"
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("Rua Oitis Silvestres, lote 13, Qd. 26, bairro Jardim dos Ipês, Cuiabá MT") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    NOSSOS CONTATOS
                  </h2>
                  
                  <a
                    href="https://wa.me/5565992450630"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-11 rounded-md mb-6 bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
                    aria-label="Falar no WhatsApp"
                  >
                    Falar no WhatsApp
                  </a>

                  {/* <div className="space-y-2 mb-8">
                    <p className="text-sm text-foreground">
                      | Fábrica de móveis planejados de alto padrão;
                    </p>
                    <p className="text-sm text-foreground">
                      | Tecnologia e acabamento premium;
                    </p>
                    <p className="text-sm text-foreground">
                      | Garantia de 5 anos
                    </p>
                  </div> */}

                  <div className="border-t pt-6 mt-6 space-y-3">
                    <h3 className="text-base font-semibold text-foreground">Onde estamos</h3>
                    <div>
                      <div className="text-sm text-muted-foreground">Localizados:</div>
                      <p className="text-sm text-foreground">
                        Rua Oitis Silvestres, lote 13, Qd. 26, bairro Jardim dos Ipês, Cuiabá MT
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-semibold text-foreground">Horário de funcionamento:</div>
                      <p className="text-sm text-foreground">Segunda a sexta-feira: 08:00 às 11:00 e das 13:00 às 17:00</p>
                      <p className="text-sm text-foreground">Sábado: 08:00 às 12:00</p>
                    </div>
                  </div>

                  <div className="border-t pt-6 mt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                      Copyright © 2025 - Smart Design Planejados - Todos os direitos reservados
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      CNPJ: 58.996.956/0001-75
                    </p>
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

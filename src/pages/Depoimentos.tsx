import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Depoimentos = () => {
  const depoimentos = [
    {
      name: "Arquiteto parceiro",
      comment: "Indiquei a Smart Design ao meu cliente com total confiança, e o resultado confirmou a escolha. A fidelidade ao projeto, a qualidade da execução e o cuidado na entrega fizeram toda a diferença. É uma empresa que entende o olhar do arquiteto e valoriza cada detalhe do projeto.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Desde o primeiro atendimento até a entrega final, tudo foi conduzido com muito profissionalismo. O resultado superou nossas expectativas, tanto no design quanto no acabamento.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Os móveis foram entregues exatamente conforme o projeto aprovado. Qualidade impecável, montagem cuidadosa e atenção aos detalhes que realmente fazem a diferença.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "Ficamos impressionados com a organização do processo e o cumprimento dos prazos. A entrega foi tranquila e o resultado final valorizou muito o ambiente.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "É perceptível o padrão elevado dos materiais e do acabamento. A equipe foi extremamente cuidadosa durante a entrega e montagem. Recomendo sem hesitar.",
      stars: 5,
    },
    {
      name: "Ana Clara",
      comment: "A experiência foi excelente do início ao fim. A entrega ocorreu dentro do prazo combinado e os móveis ficaram ainda melhores do que imaginávamos.",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main id="content" className="flex-1">
        {/* Header */}
        <section className="py-9 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
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

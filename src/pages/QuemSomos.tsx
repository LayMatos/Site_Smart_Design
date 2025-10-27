import teamMeeting from "@/assets/team-meeting.jpg";
import homeOffice from "@/assets/home-office.jpg";
import { Ruler, Cog, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const QuemSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="content" className="flex-1">
        {/* Citação destaque */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/90">
                "Não fabricamos apenas móveis — criamos espaços onde histórias ganham forma e onde cada detalhe traduz emoções."
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                Luana Manulany · Sócia Proprietária · Smart Design | Marcenaria Moderna
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Sobre nós */}
        <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">SOBRE NÓS</h2>
              <div className="border-l-2 border-secondary pl-5">
                <p className="text-foreground/80 mb-3">
                  Somos uma empresa especializada na fabricação de móveis planejados de alto padrão para residências e empresas.
                </p>
                <p className="text-foreground/80 mb-3">
                  Cada móvel é produzido de forma única e personalizada, unindo estilo, bom gosto e sofisticação para atender às necessidades de cada projeto.
                </p>
                <p className="text-foreground/80">
                  Acompanhamos todas as etapas — do planejamento à execução — utilizando processos industriais modernos e máquinas automáticas, garantindo alta qualidade, precisão em cada corte e um acabamento impecável.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={teamMeeting} alt="Equipe Smart Design" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Conceito */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div className="rounded-lg overflow-hidden shadow">
              <img src={homeOffice} alt="Esboços e referências" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">CONCEITO</h3>
              <div className="flex items-start gap-4">
                <div className="w-2 h-24 rounded bg-secondary" />
                <p className="text-foreground/80">
                  Unimos design inteligente, funcionalidade e acabamento de alto padrão para transformar espaços em ambientes únicos. Nosso conceito vai além do mobiliário: buscamos criar experiências personalizadas, onde cada detalhe reflete a personalidade e o estilo de vida de quem utiliza. Valorizamos a combinação entre tecnologia de produção, excelência estética e compromisso com a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processos */}
        <section className="py-14 bg-[var(--color-surface,#efeae5)]/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-primary tracking-wide mb-10">PROCESSOS</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl shadow p-6 border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Ruler className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">PLANEJAMENTO</h4>
                <p className="text-sm text-foreground/80">
                  Desenvolvemos o projeto em 3D junto com o projeto executivo para antecipar e mitigar erros, otimizando recursos e reduzindo desperdícios.
                </p>
              </div>
              <div className="bg-card rounded-xl shadow p-6 border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">EXECUÇÃO</h4>
                <p className="text-sm text-foreground/80">
                  Investimos em maquinário de alta precisão, garantindo prazos mais curtos, cortes precisos e acabamento superior.
                </p>
              </div>
              <div className="bg-card rounded-xl shadow p-6 border">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/30 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">PÓS‑VENDA</h4>
                <p className="text-sm text-foreground/80">
                  Oferecemos garantia e suporte de uma equipe técnica especializada para sua tranquilidade após a entrega.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fecho */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl font-semibold text-foreground">
                Qualidade e requinte em primeiro lugar
              </p>
              <p className="text-foreground/80 mt-2">
                Cada etapa do nosso processo — do planejamento à pós‑venda — é pensada para entregar móveis com excelência, durabilidade e sofisticação.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;

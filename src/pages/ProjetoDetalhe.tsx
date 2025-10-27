import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { findProject } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjetoDetalhe = () => {
  const { slug } = useParams();
  const project = slug ? findProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="content" className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-2xl font-semibold mb-4">Projeto não encontrado</h1>
          <Link to="/projetos">
            <Button variant="outline">Voltar para projetos</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="content" className="flex-1">
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-2">{project.title}</h1>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg object-cover" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
              <p className="text-foreground/80 mb-6">{project.description}</p>
              <h3 className="font-semibold mb-2">Destaques</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/projetos">
                <Button variant="outline">Voltar</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjetoDetalhe;



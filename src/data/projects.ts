export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
};

// Basic seed using existing images; you can expand freely
export const projects: Project[] = [
  {
    slug: "apartamento-central-1",
    title: "APARTAMENTO CENTRAL",
    subtitle: "Renovação Completa",
    image: "/src/assets/project-1.jpg",
    description:
      "Projeto completo de renovação com foco em funcionalidade e iluminação natural.",
    features: ["Cozinha integrada", "Marcenaria sob medida", "Iluminação indireta"],
  },
  {
    slug: "casa-de-campo-1",
    title: "CASA DE CAMPO",
    subtitle: "Design Moderno",
    image: "/src/assets/project-2.jpg",
    description:
      "Ambientes acolhedores com materiais naturais e paleta de cores orgânica.",
    features: ["Sala ampla", "Painéis de madeira", "Vista para o jardim"],
  },
  {
    slug: "loft-urbano-1",
    title: "LOFT URBANO",
    subtitle: "Estilo Contemporâneo",
    image: "/src/assets/project-3.jpg",
    description:
      "Espaço compacto com soluções inteligentes e acabamento industrial leve.",
    features: ["Planta livre", "Metais escovados", "Iluminação técnica"],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);



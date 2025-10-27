const projects = [
  { name: "Quarto Casal", img: "https://images.unsplash.com/photo-1600585154526-990dced4dfc1" },
  { name: "Home Office", img: "https://images.unsplash.com/photo-1586105251261-72a756497a12" },
  { name: "Home Estúdio", img: "https://images.unsplash.com/photo-1598300053650-e15b5b9b8b3c" },
  { name: "Sala de Estar", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-10">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-slate-700 text-center">Projetos Recentes</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-white border border-[var(--color-surface)] shadow-sm">
              <img src={project.img} alt={project.name} className="h-36 w-full object-cover" />
              <div className="flex items-center justify-between px-3 py-2">
                <div className="text-sm font-medium text-slate-700">{project.name}</div>
                <span className="text-xs px-2 py-1 border rounded text-[var(--color-primary)] border-[var(--color-primary)]">ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



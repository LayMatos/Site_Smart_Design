const services = [
  {
    title: "Planejamento Inteligente",
    desc: "Desenvolvemos layouts eficientes e práticos para seu espaço.",
    icon: "📐",
  },
  {
    title: "Móveis Sob Medida",
    desc: "Projetos personalizados com materiais de alta qualidade.",
    icon: "🪵",
  },
  {
    title: "Design Sustentável",
    desc: "Soluções ecológicas e duradouras para o seu lar.",
    icon: "🌿",
  },
];

export default function Services() {
  return (
    <section id="sobre" className="py-10">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-slate-700">Nossos Serviços</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-[var(--color-surface)] shadow-sm">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h4 className="font-semibold text-lg text-slate-800 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



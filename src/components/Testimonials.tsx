const testimonials = [
  {
    name: "Ana Clara",
    comment: "Fui muito bem atendida, trabalho impecável!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ana Clara",
    comment: "Smart Design transformou minha casa! Profissionais incríveis!",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ana Clara",
    comment: "Voz e estilo sob medida. Excelente!",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-10">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl border border-[var(--color-surface)] p-6">
          <h3 className="text-2xl font-semibold mb-6 text-slate-700 text-center">O que dizem nossos clientes</h3>
          <div className="grid md:grid-cols-4 gap-6 items-start">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                <p className="text-gray-600 italic mb-2">“{t.comment}”</p>
                <h4 className="font-semibold text-slate-800">{t.name}</h4>
              </div>
            ))}
            <div id="contato" className="h-48 w-full rounded-lg overflow-hidden border border-[var(--color-surface)]">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9559253153159!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAxLjkiUyAxNDTCsDU3JzI1LjMiRQ!5e0!3m2!1spt-BR!2sbr!4v1614034547889!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



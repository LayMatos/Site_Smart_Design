export default function Hero() {
  return (
    <section id="home" className="py-8">
      <div className="container mx-auto grid md:grid-cols-[1fr_540px] items-start gap-8 px-6">
        <div className="space-y-4 pt-4">
          <h2 className="text-4xl font-bold text-slate-800 leading-tight uppercase">
            Cozinhas dos seus <span className="text-[var(--color-primary)]">sonhos</span>.
          </h2>
          <p className="text-gray-600 max-w-md">
            Design personalizado e funcionalidade para o coração da sua casa.
          </p>
          <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-2 rounded hover:bg-[var(--color-primary)] hover:text-white transition">
            Ver Projetos
          </button>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Cozinha moderna"
            className="rounded-md shadow-lg border-8 border-white w-full h-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}



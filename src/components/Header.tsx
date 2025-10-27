export default function Header() {
  return (
    <header className="bg-[var(--color-primary)] text-white shadow-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-white/10 border border-white/20" />
          <h1 className="text-xl font-semibold tracking-wide">SMART DESIGN</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide">
          <a href="#home" className="hover:text-[var(--color-accent)]">Home</a>
          <a href="#sobre" className="hover:text-[var(--color-accent)]">Quem Somos</a>
          <a href="#projetos" className="hover:text-[var(--color-accent)]">Projetos</a>
          <a href="#depoimentos" className="hover:text-[var(--color-accent)]">Depoimentos</a>
          <a href="#contato" className="hover:text-[var(--color-accent)]">Contato</a>
        </nav>
      </div>
      <div className="h-[6px] bg-[var(--color-primary)]/90 border-t border-white/10" />
    </header>
  );
}



import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/quem-somos", label: "QUEM SOMOS" },
    { path: "/projetos", label: "PROJETOS" },
    { path: "/depoimentos", label: "DEPOIMENTOS" },
    { path: "/contato", label: "CONTATO" },
  ];

  return (
    <nav className="bg-primary/95 supports-[backdrop-filter]:bg-primary/80 backdrop-blur text-primary-foreground sticky top-0 z-50 shadow-sm border-b border-white/10" role="navigation" aria-label="Principal">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-primary-foreground focus:text-primary px-3 py-2">Pular para o conteúdo</a>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Smart Design - Página inicial">
            <img src={logo} alt="Smart Design" className="h-12 sm:h-14 w-auto" />
          </Link>
          
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `text-sm tracking-wide font-medium transition-colors pb-1 ${isActive ? "border-b-2 border-primary-foreground" : "hover:opacity-90"}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu */}
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function MobileMenu({ navLinks }: { navLinks: { path: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)} className="inline-flex items-center justify-center rounded-md px-2 py-1 ring-2 ring-white/30">
        <span className="sr-only">Abrir menu</span>
        ☰
      </button>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-20 bg-primary text-primary-foreground shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {navLinks.map((l) => (
              <NavLink key={l.path} to={l.path} onClick={() => setOpen(false)} className={({ isActive }) => `text-sm ${isActive ? "font-semibold" : "opacity-90"}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

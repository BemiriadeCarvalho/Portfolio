// =============================================================================
//  Navbar.tsx — Barra de navegação fixa + botão Dark Mode
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `nav`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  /* Dark mode: lê preferência do localStorage ou do sistema */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  /* Fundo glassmorphism ao fazer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — usa primeiro nome do shortName */}
        <a href="#top" className="font-sans text-2xl font-semibold tracking-tight text-foreground">
          {portfolio.profile.shortName.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Links desktop — vêm de portfolio.nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {portfolio.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Botão Dark Mode */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground hover:bg-accent transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {/* Download CV */}
          <a
            href={portfolio.profile.cvUrl}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
          >
            Download CV
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {portfolio.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={portfolio.profile.cvUrl}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft"
            >
              Download CV
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

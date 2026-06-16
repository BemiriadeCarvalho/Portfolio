// =============================================================================
//  Hero.tsx — Secção principal com foto, nome, cargo e CTAs
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campos `profile` e `hero`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { ArrowDown, Mail } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Hero() {
  const { profile, hero } = portfolio;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-in">
          {/* Badge disponibilidade */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {hero.badge}
          </span>

          {/* Nome — divide em 2 linhas: 2 primeiros nomes + resto em destaque */}
          <h1 className="mt-6 font-sans text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-foreground font-semibold">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* Cargo + tagline */}
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            <span className="font-medium text-foreground">{profile.role}</span>
            {" "}· {profile.tagline}
          </p>

          {/* Botões CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              {hero.ctaPrimary} <ArrowDown size={16} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Mail size={16} /> {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Foto de perfil + badges flutuantes */}
        <div className="relative mx-auto md:mx-0 animate-fade-in">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl overflow-hidden border border-border shadow-card bg-card">
            <img
              src={profile.photo}
              alt={profile.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Badge idade */}
          <div className="absolute -bottom-4 -left-4 sm:-left-6 rounded-xl bg-card border border-border shadow-card px-4 py-3 animate-float [animation-delay:-2s]">
            <p className="text-xs text-muted-foreground">{hero.photoBadgeAgeLabel}</p>
            <p className="font-sans text-2xl font-semibold text-foreground">{profile.age}</p>
          </div>
          {/* Badge foco */}
          <div className="absolute -top-4 -right-4 sm:-right-6 rounded-xl bg-card border border-border shadow-card px-4 py-3 animate-float">
            <p className="text-xs text-muted-foreground">{hero.photoBadgeFocusLabel}</p>
            <p className="font-sans text-lg font-semibold text-foreground">{hero.photoBadgeFocusValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

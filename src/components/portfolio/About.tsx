// =============================================================================
//  About.tsx — Secção "Sobre mim" + métricas/destaques
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `about`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { portfolio } from "@/content/portfolio";

export function About() {
  const { about } = portfolio;

  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12">
        {/* Coluna esquerda: rótulo + título */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            {about.sectionLabel}
          </p>
          <h2 className="mt-3 font-sans text-4xl sm:text-5xl leading-tight text-foreground font-semibold">
            {about.headline}
          </h2>
        </div>

        {/* Coluna direita: bio + métricas */}
        <div className="space-y-5">
          {about.bio.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 pt-6">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-card p-5 shadow-card"
              >
                <p className="font-sans text-3xl font-semibold text-primary">{h.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

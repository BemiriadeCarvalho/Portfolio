// =============================================================================
//  Skills.tsx — Categorias de tecnologias em cartões
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `skills`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { portfolio } from "@/content/portfolio";

export function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            {skills.sectionLabel}
          </p>
          <h2 className="mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold">
            {skills.headline}
          </h2>
        </div>

        {/* Grid de categorias */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills.categories).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <h3 className="font-sans text-2xl font-semibold text-foreground mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary text-secondary-foreground border border-border px-3.5 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

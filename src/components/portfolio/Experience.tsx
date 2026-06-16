// =============================================================================
//  Experience.tsx — Timeline vertical de experiência profissional
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `experience`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { portfolio } from "@/content/portfolio";

export function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            {experience.sectionLabel}
          </p>
          <h2 className="mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold">
            {experience.headline}
          </h2>
        </div>

        <ol className="relative border-l border-border pl-8 space-y-10">
          {experience.items.map((item, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background shadow-soft" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.period}
              </p>
              <h3 className="mt-1 font-sans text-2xl font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="text-primary font-medium">{item.company}</p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

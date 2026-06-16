// =============================================================================
//  Projects.tsx — Grid de cartões de projeto
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `projects`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { ArrowUpRight, Github } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projetos" className="py-24 sm:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              {projects.sectionLabel}
            </p>
            <h2 className="mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold">
              {projects.headline}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {projects.description}
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.items.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sans text-2xl font-semibold text-foreground">{p.name}</h3>
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="rounded-full p-2 hover:bg-secondary text-foreground"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Demo"
                      className="rounded-full p-2 bg-primary text-primary-foreground hover:shadow-glow transition-shadow"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-accent/60 text-accent-foreground px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

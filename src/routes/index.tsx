// =============================================================================
//  index.tsx — Página principal (SEO + montagem das secções)
// =============================================================================
//  Editar ordem das secções: reordenar componentes no <main> abaixo
//  Editar SEO: ajustar meta tags em `head()`
// =============================================================================

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";
import { portfolio } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.profile.shortName} — Software Engineer` },
      {
        name: "description",
        content: `Portfólio de ${portfolio.profile.name}, Software Engineer. ${portfolio.profile.tagline}`,
      },
      { property: "og:title", content: `${portfolio.profile.shortName} — Software Engineer` },
      { property: "og:description", content: portfolio.profile.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/*
        Reordenar secções: basta mover as linhas abaixo.
        Exemplo: para por Skills antes de Projects, move <Skills /> acima de <Projects />.
      */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Toaster />
    </main>
  );
}

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-Bv_qDxJi.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const profile = "/assets/Gemini_Generated_Image_brr5t0brr5t0brr5-Dqg53som.png";
const portfolio = {
  // ─── PERFIL ───────────────────────────────────────────────────────────────
  profile: {
    name: "Bemíria Bernarda Muzobo de Carvalho",
    shortName: "Bemíria Carvalho",
    role: "Software Engineer",
    tagline: "Unindo lógica e estética para construir a próxima geração de produtos digitais.",
    age: 21,
    photo: profile,
    // substituir por um URL externo, se preferires
    cvUrl: "#",
    // link para o teu CV em PDF
    email: "bmiriacarvalho@email.com",
    socials: {
      github: "https://github.com/BemiriadeCarvalho",
      linkedin: "https://www.linkedin.com/in/bem%C3%ADria-de-carvalho-662132302/"
    }
  },
  // ─── NAVEGAÇÃO ───────────────────────────────────────────────────────────
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#contacto", label: "Contacto" }
  ],
  // ─── HERO ────────────────────────────────────────────────────────────────
  hero: {
    badge: "Disponível para novos projetos",
    ctaPrimary: "Ver Projetos",
    ctaSecondary: "Contactar-me",
    photoBadgeAgeLabel: "Idade",
    photoBadgeFocusLabel: "Foco",
    photoBadgeFocusValue: "DevOps"
  },
  // ─── SOBRE ───────────────────────────────────────────────────────────────
  about: {
    sectionLabel: "Sobre Mim",
    headline: "Curiosa, criativa, e sempre a construir.",
    bio: [
      "Olá! Sou a Bemíria, DevOps Engineer focada em otimizar o ciclo de vida do software e garantir entregas rápidas, seguras e escaláveis. Especializada em automatizar processos e gerir infraestrutura moderna, faço a ponte entre o desenvolvimento de produtos e a estabilidade operacional. Acredito que a verdadeira eficiência nasce da automação inteligente, da resiliência dos sistemas e de uma cultura de colaboração transparente entre equipas.."
    ],
    highlights: [
      { value: "2+", label: "Anos a programar" },
      { value: "5+", label: "Projetos concluídos" },
      { value: "∞", label: "Curiosidade" }
    ]
  },
  // ─── PROJETOS ────────────────────────────────────────────────────────────
  projects: {
    sectionLabel: "Projetos",
    headline: "Trabalho selecionado",
    description: "Projectos Concluidos.",
    items: [
      {
        name: "Metaverso",
        description: "Desenvolvimento de aplicação web full-stack (Metaverso) em tempo real com Sockets, autenticação de utilizadores, gestão de sessões e arquitetura cliente-servidor.",
        tech: ["React", "Nginx", "Docker", "Nest", "WebRTC", "API", "R3F"],
        github: "https://github.com/"
      },
      {
        name: "Webserv",
        description: "Implementação de servidor HTTP em C, com gestão de conexões, parsing de requests, sockets e múltiplos clientes.",
        tech: ["C++", "Sockets", "POO", "NGINX"],
        github: "https://github.com/"
      },
      {
        name: "Minishell",
        description: "Implementação de uma shell UNIX completa em C, com comportamento semelhante ao bash.",
        tech: ["C", "Processos", "Pipes", "Sinais"],
        github: "https://github.com/"
      },
      {
        name: "Cub3D",
        description: "Desenvolvimento de um motor gráfico 3D utilizando técnica de raycasting, inspirado no Wolfenstein 3D.",
        tech: ["Raycasting", "MinilibX", "Texturas"],
        github: "https://github.com/",
        demo: ""
      }
    ]
  },
  // ─── SKILLS ───────────────────────────────────────────────────────────────
  skills: {
    sectionLabel: "Skills",
    headline: "Ferramentas do ofício",
    categories: {
      Frontend: ["React", "Native"],
      Backend: ["Node.js", "C", "C++"],
      Tools: ["GitHub", "VS Code", "Docker", "Nginx"]
    }
  },
  // ─── EXPERIÊNCIA ───────────────────────────────────────────────────────────
  experience: {
    sectionLabel: "Experiência",
    headline: "Percurso até aqui",
    items: [
      {
        role: "Engenharia de Software",
        company: "42 Luanda",
        period: "2024 — 2026",
        description: "Experiência prática no desenvolvimento de aplicações em ambiente C/Unix, com foco na resolução de prolemas complexos, otimização de desempenho e produção de código com qualidade."
      },
      {
        role: " Engenharia Eletrónica e Telecomunicações",
        company: "IMETRO-Universidade",
        period: "2024 — Presente",
        description: "Desenvolvimento de projetos em eletrónica e sistemas de comunicação, com colaboração ativa em equipas multidisciplinares."
      },
      {
        role: "Eletrónica Industrial e Automação",
        company: "IPIL",
        period: "2020 — 2024"
      }
    ]
  },
  // ─── CONTACTO ────────────────────────────────────────────────────────────
  contact: {
    sectionLabel: "Contacto",
    headline: "Vamos construir algo juntos",
    description: "Tens um projeto em mente ou apenas queres dizer olá? Envia-me uma mensagem.",
    form: {
      nameLabel: "Nome",
      namePlaceholder: "O teu nome",
      emailLabel: "Email",
      emailPlaceholder: "email@exemplo.com",
      messageLabel: "Mensagem",
      messagePlaceholder: "Conta-me sobre o teu projeto…",
      submitLabel: "Enviar mensagem",
      validation: {
        nameRequired: "Indica o teu nome",
        emailInvalid: "Email inválido",
        messageRequired: "Escreve uma mensagem",
        genericError: "Verifica os campos",
        successToast: "A abrir o teu cliente de email…"
      }
    },
    footer: (name) => `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${name}. Feito com cuidado.`
  }
};
const $$splitComponentImporter = () => import("./index-CO3l-Vs2.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: `${portfolio.profile.shortName} — Software Engineer`
    }, {
      name: "description",
      content: `Portfólio de ${portfolio.profile.name}, Software Engineer. ${portfolio.profile.tagline}`
    }, {
      property: "og:title",
      content: `${portfolio.profile.shortName} — Software Engineer`
    }, {
      property: "og:description",
      content: portfolio.profile.tagline
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  portfolio as p,
  router as r
};

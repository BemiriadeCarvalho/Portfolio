import profile from "../assets/Gemini_Generated_Image_brr5t0brr5t0brr5.png";

// =============================================================================
//  PORTFOLIO CONFIG — Editar apenas aqui
// =============================================================================
// Todos os textos, dados e links do site centralizados neste ficheiro.
// Não é necessário alterar os componentes React para mudar conteúdo.
// =============================================================================

export const portfolio = {
  // ─── PERFIL ───────────────────────────────────────────────────────────────
  profile: {
    name: "Bemíria Bernarda Muzobo de Carvalho",
    shortName: "Bemíria Carvalho",
    role: "Software Engineer",
    tagline:
      "Unindo lógica e estética para construir a próxima geração de produtos digitais.",
    age: 21,
    location: "Disponível para trabalho remoto",
    photo: profile, // substituir por um URL externo, se preferires
    cvUrl: "#", // link para o teu CV em PDF
    email: "bmiriacarvalho@email.com",
    socials: {
      github: "https://github.com/BemiriadeCarvalho",
      linkedin: "https://www.linkedin.com/in/bem%C3%ADria-de-carvalho-662132302/",
    },
  },
  // ─── NAVEGAÇÃO ───────────────────────────────────────────────────────────
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#contacto", label: "Contacto" },
  ],

  // ─── HERO ────────────────────────────────────────────────────────────────
  hero: {
    badge: "Disponível para novos projetos",
    ctaPrimary: "Ver Projetos",
    ctaSecondary: "Contactar-me",
    badgeLabel: "Disponível para novos projetos",
    photoBadgeAgeLabel: "Idade",
    photoBadgeFocusLabel: "Foco",
    photoBadgeFocusValue: "DevOps",
  },

  // ─── SOBRE ───────────────────────────────────────────────────────────────
  about: {
    sectionLabel: "Sobre Mim",
    headline: "Curiosa, criativa, e sempre a construir.",
    bio: [
      "Olá! Sou a Bemíria, DevOps Engineer focada em otimizar o ciclo de vida do software e garantir entregas rápidas, seguras e escaláveis. Especializada em automatizar processos e gerir infraestrutura moderna, faço a ponte entre o desenvolvimento de produtos e a estabilidade operacional. Acredito que a verdadeira eficiência nasce da automação inteligente, da resiliência dos sistemas e de uma cultura de colaboração transparente entre equipas..",
    ],
    highlights: [
      { value: "2+", label: "Anos a programar" },
      { value: "5+", label: "Projetos concluídos" },
      { value: "∞", label: "Curiosidade" },
    ],
  },

   // ─── PROJETOS ────────────────────────────────────────────────────────────
  projects: {
    sectionLabel: "Projetos",
    headline: "Trabalho selecionado",
    description:
      "Projectos Concluidos.",
    items: [
      {
        name: "Metaverso",
        description:
          "Desenvolvimento de aplicação web full-stack (Metaverso) em tempo real com Sockets, autenticação de utilizadores, gestão de sessões e arquitetura cliente-servidor.",
        tech: ["React", "Nginx", "Docker", "Nest", "WebRTC", "API", "R3F"],
        github: "https://github.com/",
      },
      {                                                                name: "Webserv",
        description:                                                     "Implementação de servidor HTTP em C, com gestão de conexões, parsing de requests, sockets e múltiplos clientes.",
        tech: ["C++", "Sockets", "POO", "NGINX"],
        github: "https://github.com/",
      },
       {
        name: "Minishell",
        description:
          "Implementação de uma shell UNIX completa em C, com comportamento semelhante ao bash.",
        tech: ["C", "Processos", "Pipes", "Sinais"],
        github: "https://github.com/",
      },
      {
        name: "Cub3D",
        description:
          "Desenvolvimento de um motor gráfico 3D utilizando técnica de raycasting, inspirado no Wolfenstein 3D.",
        tech: ["Raycasting", "MinilibX", "Texturas"],
        github: "https://github.com/",
        demo: "",
      },
    ],
  },

    // ─── SKILLS ───────────────────────────────────────────────────────────────
  skills: {
    sectionLabel: "Skills",
    headline: "Ferramentas do ofício",
    categories: {
      Frontend: ["React", "Native"],
      Backend: ["Node.js", "C", "C++"],
      Tools: ["GitHub", "VS Code", "Docker", "Nginx"],
    } as Record<string, string[]>,
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
        description:
          "Experiência prática no desenvolvimento de aplicações em ambiente C/Unix, com foco na resolução de prolemas complexos, otimização de desempenho e produção de código com qualidade.",
      },
      {                                                                role: " Engenharia Eletrónica e Telecomunicações",             company: "IMETRO-Universidade",
        period: "2024 — Presente",
        description:
          "Desenvolvimento de projetos em eletrónica e sistemas de comunicação, com colaboração ativa em equipas multidisciplinares.",
      },
       {
        role: "Eletrónica Industrial e Automação",
        company: "IPIL",
        period: "2020 — 2024",
         },
    ],
  },

  // ─── CONTACTO ────────────────────────────────────────────────────────────
  contact: {
    sectionLabel: "Contacto",
    headline: "Vamos construir algo juntos",
    description:
      "Tens um projeto em mente ou apenas queres dizer olá? Envia-me uma mensagem.",
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
        successToast: "A abrir o teu cliente de email…",
      },
    },
    footer: (name: string) => `© ${new Date().getFullYear()} ${name}. Feito com cuidado.`,
  },
};

export type Portfolio = typeof portfolio;


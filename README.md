# Portfólio — Bemíria Carvalho

Website de portfólio pessoal construído com **TanStack Start + React + TypeScript + Tailwind CSS**.

## 🗂️ Estrutura do projeto

```
src/
├── assets/
│   └── profile.jpg              ← Foto de perfil (substitui este ficheiro)
│
├── content/
│   └── portfolio.ts             ← ⭐ TODO o conteúdo editável vive aqui
│                                   (nome, bio, projetos, skills, experiência…)
│
├── components/
│   └── portfolio/               ← Secções da página, uma por ficheiro
│       ├── Navbar.tsx           ← Navegação + toggle de Dark Mode
│       ├── Hero.tsx             ← Secção principal com foto
│       ├── About.tsx            ← Sobre mim + métricas
│       ├── Skills.tsx           ← Tecnologias por categoria
│       ├── Projects.tsx         ← Grid de projetos
│       ├── Experience.tsx       ← Timeline de experiência
│       └── Contact.tsx          ← Formulário de contacto
│
├── routes/
│   ├── __root.tsx               ← Shell HTML
│   └── index.tsx                ← Página principal + SEO
│
└── styles.css                   ← Design system: cores, fontes, animações
```

## ✏️ Como editar

### 1. Informações pessoais, projetos, skills
Abre **`src/content/portfolio.ts`**. Todo o conteúdo está aqui em objetos simples.

```ts
profile: {
  name: "O teu nome",
  email: "teu@email.com",
  socials: { github: "...", linkedin: "..." },
  cvUrl: "/cv.pdf",
}
```

### 2. Trocar a foto de perfil
Substitui **`src/assets/profile.jpg`** (mantém o nome), ou aponta
`portfolio.profile.photo` para um URL externo.

### 3. Adicionar um novo projeto
Em `src/content/portfolio.ts`, adiciona ao array `projects`:

```ts
{
  name: "Nome do projeto",
  description: "Descrição curta.",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  demo: "https://...",
}
```

### 4. Mudar cores / tema
Edita as variáveis em **`src/styles.css`** — `:root` (claro) e `.dark` (escuro).

### 5. Reordenar / remover secções
Em **`src/routes/index.tsx`**, reorganiza os componentes dentro de `<main>`.

## 🚀 Desenvolvimento

```bash
bun install
bun run dev
```

## ✨ Funcionalidades
- Design corporativo (paleta neutra + azul profissional)
- 🌙 Dark mode com persistência
- 📱 Totalmente responsivo
- 🔍 SEO básico (meta tags, Open Graph)
- 🎨 Animações suaves de entrada
- 📧 Formulário validado com Zod

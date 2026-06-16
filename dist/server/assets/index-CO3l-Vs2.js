import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Sun, Moon, X, Menu, ArrowDown, Mail, Github, ArrowUpRight, Linkedin, Send } from "lucide-react";
import { p as portfolio } from "./router-B2y8Ypee.js";
import { toast, Toaster as Toaster$1 } from "sonner";
import { z } from "zod";
import "@tanstack/react-query";
import "@tanstack/react-router";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-sans text-2xl font-semibold tracking-tight text-foreground", children: [
            portfolio.profile.shortName.split(" ")[0],
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "." })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: portfolio.nav.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }) }, l.href)) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": "Alternar tema",
                className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground hover:bg-accent transition-colors",
                children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: portfolio.profile.cvUrl,
                className: "inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-shadow",
                children: "Download CV"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": "Alternar tema",
                className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground",
                children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "text-foreground",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in", children: /* @__PURE__ */ jsxs("ul", { className: "px-6 py-4 flex flex-col gap-4", children: [
          portfolio.nav.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block text-foreground", children: l.label }) }, l.href)),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: portfolio.profile.cvUrl,
              className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft",
              children: "Download CV"
            }
          )
        ] }) })
      ]
    }
  );
}
function Hero() {
  const { profile, hero } = portfolio;
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "top",
      className: "relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-background",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-fade-in", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
            hero.badge
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-sans text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-foreground font-semibold", children: [
            profile.name.split(" ").slice(0, 2).join(" "),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: profile.name.split(" ").slice(2).join(" ") })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 text-lg text-muted-foreground max-w-xl", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: profile.role }),
            " ",
            "· ",
            profile.tagline
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#projetos",
                className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5",
                children: [
                  hero.ctaPrimary,
                  " ",
                  /* @__PURE__ */ jsx(ArrowDown, { size: 16 })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contacto",
                className: "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Mail, { size: 16 }),
                  " ",
                  hero.ctaSecondary
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto md:mx-0 animate-fade-in", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl overflow-hidden border border-border shadow-card bg-card", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: profile.photo,
              alt: profile.name,
              width: 1024,
              height: 1024,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 sm:-left-6 rounded-xl bg-card border border-border shadow-card px-4 py-3 animate-float [animation-delay:-2s]", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: hero.photoBadgeAgeLabel }),
            /* @__PURE__ */ jsx("p", { className: "font-sans text-2xl font-semibold text-foreground", children: profile.age })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 -right-4 sm:-right-6 rounded-xl bg-card border border-border shadow-card px-4 py-3 animate-float", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: hero.photoBadgeFocusLabel }),
            /* @__PURE__ */ jsx("p", { className: "font-sans text-lg font-semibold text-foreground", children: hero.photoBadgeFocusValue })
          ] })
        ] })
      ] })
    }
  );
}
function About() {
  const { about } = portfolio;
  return /* @__PURE__ */ jsx("section", { id: "sobre", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary font-medium", children: about.sectionLabel }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-sans text-4xl sm:text-5xl leading-tight text-foreground font-semibold", children: about.headline })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      about.bio.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: p }, i)),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 pt-6", children: about.highlights.map((h) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-xl border border-border bg-card p-5 shadow-card",
          children: [
            /* @__PURE__ */ jsx("p", { className: "font-sans text-3xl font-semibold text-primary", children: h.value }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: h.label })
          ]
        },
        h.label
      )) })
    ] })
  ] }) });
}
function Projects() {
  const { projects } = portfolio;
  return /* @__PURE__ */ jsx("section", { id: "projetos", className: "py-24 sm:py-32 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-6 mb-12 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary font-medium", children: projects.sectionLabel }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold", children: projects.headline })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md", children: projects.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: projects.items.map((p) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-sans text-2xl font-semibold text-foreground", children: p.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity", children: [
              p.github && /* @__PURE__ */ jsx(
                "a",
                {
                  href: p.github,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "GitHub",
                  className: "rounded-full p-2 hover:bg-secondary text-foreground",
                  children: /* @__PURE__ */ jsx(Github, { size: 16 })
                }
              ),
              p.demo && /* @__PURE__ */ jsx(
                "a",
                {
                  href: p.demo,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Demo",
                  className: "rounded-full p-2 bg-primary text-primary-foreground hover:shadow-glow transition-shadow",
                  children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: p.description }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs rounded-full bg-accent/60 text-accent-foreground px-3 py-1",
              children: t
            },
            t
          )) })
        ]
      },
      p.name
    )) })
  ] }) });
}
function Skills() {
  const { skills } = portfolio;
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary font-medium", children: skills.sectionLabel }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold", children: skills.headline })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: Object.entries(skills.categories).map(([category, items]) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-xl border border-border bg-card p-7 shadow-card",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-sans text-2xl font-semibold text-foreground mb-5", children: category }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: items.map((skill) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "rounded-full bg-secondary text-secondary-foreground border border-border px-3.5 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default",
              children: skill
            },
            skill
          )) })
        ]
      },
      category
    )) })
  ] }) });
}
function Experience() {
  const { experience } = portfolio;
  return /* @__PURE__ */ jsx("section", { id: "experiencia", className: "py-24 sm:py-32 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary font-medium", children: experience.sectionLabel }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-sans text-4xl sm:text-5xl text-foreground font-semibold", children: experience.headline })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "relative border-l border-border pl-8 space-y-10", children: experience.items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background shadow-soft" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: item.period }),
      /* @__PURE__ */ jsx("h3", { className: "mt-1 font-sans text-2xl font-semibold text-foreground", children: item.role }),
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium", children: item.company }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: item.description })
    ] }, i)) })
  ] }) });
}
const schema = z.object({
  name: z.string().trim().min(1, portfolio.contact.form.validation.nameRequired).max(100),
  email: z.string().trim().email(portfolio.contact.form.validation.emailInvalid).max(255),
  message: z.string().trim().min(1, portfolio.contact.form.validation.messageRequired).max(1e3)
});
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { profile, contact } = portfolio;
  const onSubmit = (e) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? portfolio.contact.form.validation.genericError);
      return;
    }
    const subject = encodeURIComponent(`Contacto de ${res.data.name}`);
    const body = encodeURIComponent(
      `${res.data.message}

— ${res.data.name} (${res.data.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success(portfolio.contact.form.validation.successToast);
  };
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-card overflow-hidden relative", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 relative", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-primary font-medium", children: contact.sectionLabel }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-sans text-4xl sm:text-5xl text-foreground leading-tight font-semibold", children: contact.headline }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: contact.description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: profile.socials.github,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "GitHub",
              className: "rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow",
              children: /* @__PURE__ */ jsx(Github, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: profile.socials.linkedin,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "LinkedIn",
              className: "rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow",
              children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `mailto:${profile.email}`,
              "aria-label": "Email",
              className: "rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow",
              children: /* @__PURE__ */ jsx(Mail, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-muted-foreground", children: contact.form.nameLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: form.name,
              onChange: (e) => setForm({ ...form, name: e.target.value }),
              maxLength: 100,
              className: "mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition",
              placeholder: contact.form.namePlaceholder
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-muted-foreground", children: contact.form.emailLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: form.email,
              onChange: (e) => setForm({ ...form, email: e.target.value }),
              maxLength: 255,
              className: "mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition",
              placeholder: contact.form.emailPlaceholder
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs text-muted-foreground", children: contact.form.messageLabel }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              value: form.message,
              onChange: (e) => setForm({ ...form, message: e.target.value }),
              maxLength: 1e3,
              className: "mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition resize-none",
              placeholder: contact.form.messagePlaceholder
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-shadow",
            children: [
              contact.form.submitLabel,
              " ",
              /* @__PURE__ */ jsx(Send, { size: 16 })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-muted-foreground mt-10", children: contact.footer(profile.name) })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
export {
  Index as component
};

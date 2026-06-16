// =============================================================================
//  Contact.tsx — Formulário de contacto + redes sociais + footer
// =============================================================================
//  Editar conteúdo: src/content/portfolio.ts → campo `contact`
//  Alterar layout: editar JSX abaixo (Tailwind classes)
// =============================================================================

import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { portfolio } from "@/content/portfolio";

/* Validação Zod — mensagens vêm de portfolio.ts */
const schema = z.object({
  name: z.string().trim().min(1, portfolio.contact.form.validation.nameRequired).max(100),
  email: z.string().trim().email(portfolio.contact.form.validation.emailInvalid).max(255),
  message: z.string().trim().min(1, portfolio.contact.form.validation.messageRequired).max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { profile, contact } = portfolio;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? portfolio.contact.form.validation.genericError);
      return;
    }
    const subject = encodeURIComponent(`Contacto de ${res.data.name}`);
    const body = encodeURIComponent(
      `${res.data.message}\n\n— ${res.data.name} (${res.data.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success(portfolio.contact.form.validation.successToast);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-card overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-10 relative">
            {/* Coluna esquerda: info + redes */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                {contact.sectionLabel}
              </p>
              <h2 className="mt-3 font-sans text-4xl sm:text-5xl text-foreground leading-tight font-semibold">
                {contact.headline}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {contact.description}
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-full bg-card border border-border p-3 hover:shadow-soft transition-shadow"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Coluna direita: formulário */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground">{contact.form.nameLabel}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder={contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">{contact.form.emailLabel}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder={contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">{contact.form.messageLabel}</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="mt-1 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  placeholder={contact.form.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
              >
                {contact.form.submitLabel} <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          {contact.footer(profile.name)}
        </p>
      </div>
    </section>
  );
}

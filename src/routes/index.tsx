import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Home, Globe, Github, ShieldAlert, Moon } from "lucide-react";
import { toast } from "sonner";
import logo from "../assets/Logo.png";
import pfp from "../assets/Pfp.jpg";
import qrcode from "../assets/pixgg-qrcode.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Script Box — De fã. Para fãs" },
      { name: "description", content: "Script Box: o hub de scripts, automações e hacks para plataformas da Sala do Futuro." },
      { property: "og:title", content: "Script Box — De fã. Para fãs" },
      { property: "og:description", content: "Script Box: o hub de scripts, automações e hacks para plataformas da Sala do Futuro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

type Company = {
  name: string;
  tag: string;
  tagAccent?: boolean;
  description: string;
  site?: { label: string; href: string };
  discord?: string;
  status?: string;
  delay: string;
};

const companies: Company[] = [
  {
    name: "Plataform Destroyer",
    tag: "ALL-IN-ONE",
    description: "Site inteiro que reúne a maioria das plataformas de automação.",
    site: { label: "SITE", href: "https://platformdestroyer.fun/" },
    discord: "https://discord.gg/platformdestroyer",
    delay: "100ms",
  },
  {
    name: "OpenFuture",
    tag: "MULTI-HUB",
    description: "Site completo de scripts para as principais plataformas.",
    site: { label: "WEBSITE", href: "https://openfuture.lol/" },
    discord: "https://discord.gg/openfuture",
    delay: "200ms",
  },
  {
    name: "Zeta",
    tag: "CORE HUB",
    description: "Soluções integradas para as principais plataformas educacionais.",
    site: { label: "PORTAL", href: "https://zetazerohub.xyz/" },
    discord: "https://discord.gg/DUwWasTxk",
    delay: "300ms",
  },
  {
    name: "MoonScripts",
    tag: "BOTS",
    tagAccent: true,
    description: "Migrou todos os scripts para bots no Discord. Atualmente com: Redação Paulista, Matific e Elefante Letrado.",
    discord: "https://discord.gg/moon-scripts-tm-1382157718965456956",
    status: "Apenas Discord",
    delay: "400ms",
  },
];


function CompanyCard({ company }: { company: Company }) {
  return (
    <article
      className="group relative flex flex-col p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 animate-slide-up"
      style={{ animationDelay: company.delay }}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2 mb-3">
        <h2 className="min-w-0 font-bold text-lg text-balance">{company.name}</h2>
        <span
          className={`shrink-0 font-mono text-[10px] px-2 py-1 rounded ${
            company.tagAccent ? "bg-accent/20 text-accent" : "bg-white/5"
          }`}
        >
          {company.tag}
        </span>
      </div>
      {company.status && (
        <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {company.status}
          </span>
        </div>
      )}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {company.description}
      </p>
      <div className={`grid gap-3 ${company.site && company.discord ? "grid-cols-2" : "grid-cols-1"}`}>
        {company.site && (
          <a
            href={company.site.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-xs transition-transform active:scale-95 hover:-translate-y-0.5 bg-foreground text-background"
          >
            <ExternalLinkIcon className="size-3" />
            {company.site.label}
          </a>
        )}

        {company.discord && (
          <a
            href={company.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-card border border-border text-foreground font-semibold text-xs hover:bg-white/5 transition-colors"
          >
            <DiscordIcon className="size-3" />
            DISCORD
          </a>
        )}
      </div>
    </article>
  );
}

function DisclaimerDialog({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-background/80 backdrop-blur-sm animate-slide-up"
    >
      <div className="w-full max-w-md rounded-3xl border border-accent/30 bg-card p-6 shadow-[0_0_60px_rgba(153,41,234,0.25)]">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-accent">
            <ShieldAlert className="size-5" />
          </span>
          <h2
            id="disclaimer-title"
            className="font-display text-2xl uppercase tracking-tight"
          >
            Aviso importante
          </h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Nenhum dos scripts, sites ou automações listados aqui são meus. Todos
          pertencem a organizações independentes, com seus próprios servidores,
          sites, donos e programadores.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A Script Box é apenas um agrupamento de links feito por fã, para fãs —
          sem qualquer vínculo com os projetos citados.
        </p>
        <button
          onClick={handleClose}
          className="mt-6 w-full rounded-lg bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}

function DarkModeDialog() {
  const [open, setOpen] = useState(false);
  const [copiedBookmarklet, setCopiedBookmarklet] = useState(false);

  const bookmarkletCode = "javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/o14bis/AfterClass@main/empresa%20intu.js?t='+Date.now();s.onerror=function(){alert('Falhou ao carregar o script.');};document.body.appendChild(s);})();";

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const copyBookmarklet = async () => {
    try {
      await navigator.clipboard.writeText(bookmarkletCode);
      setCopiedBookmarklet(true);
      setTimeout(() => setCopiedBookmarklet(false), 2000);
    } catch {
      toast("Não foi possível copiar automaticamente");
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="darkmode-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-background/80 backdrop-blur-sm animate-slide-up"
    >
      <div className="w-full max-w-md rounded-3xl border border-highlight/30 bg-card p-6 shadow-[0_0_60px_rgba(250,235,146,0.15)]">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-highlight/15 text-highlight">
            <Moon className="size-5" />
          </span>
          <h2
            id="darkmode-title"
            className="font-display text-2xl uppercase tracking-tight"
          >
            Modo escuro
          </h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Fiz um script pra deixar a Sala do Futuro em modo escuro. Tem duas
          formas de usar:
        </p>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-border bg-white/5 p-4">
            <h3 className="font-bold text-sm mb-2">1. Bookmarklet (manual)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Copia o código abaixo, cria um favorito novo e cola no campo de URL.
              Depois é só clicar no favorito quando estiver na Sala do Futuro.
              Funciona tanto no PC quanto em aparelhos móveis.
            </p>
            <button
              onClick={copyBookmarklet}
              className="w-full rounded-lg bg-card border border-border px-4 py-2.5 text-xs font-mono text-foreground break-all transition-colors hover:border-highlight/50 hover:bg-white/5"
            >
              {copiedBookmarklet ? "Copiado!" : bookmarkletCode}
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-white/5 p-4">
            <h3 className="font-bold text-sm mb-2">2. Automático (Tampermonkey / Violentmonkey)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Pra aplicar automaticamente sempre que abrir a Sala do Futuro,
              instala a extensão Tampermonkey ou Violentmonkey e cola o raw do
              user.js nela.
            </p>
            <a
              href="https://raw.githubusercontent.com/o14bis/AfterClass/refs/heads/main/empresa%20intu.js"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-highlight text-background px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              <ExternalLinkIcon className="size-3" />
              Abrir raw do user.js
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full rounded-lg bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

function SiteMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar opções" : "Abrir opções"}
        aria-expanded={open}
        className="flex size-11 items-center justify-center rounded-xl border border-border bg-card/80 backdrop-blur text-foreground transition-colors hover:border-accent/50 hover:text-accent"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <nav className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur p-2 shadow-[0_0_40px_rgba(0,0,0,0.6)] animate-slide-up">
          <button
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            <Home className="size-4 text-accent" />
            Home
          </button>
          <button
            onClick={() => {
              setOpen(false);
              toast("em desenvolvimento :v");
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            <Globe className="size-4 text-highlight" />
            Sites Unblocker
          </button>
        </nav>
      )}
    </div>
  );
}

function Index() {
  const [showDarkMode, setShowDarkMode] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-grid overflow-hidden">
      <DisclaimerDialog onClose={() => setShowDarkMode(true)} />
      {showDarkMode && <DarkModeDialog />}
      <SiteMenu />

      {/* Animated aurora background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div
          className="aurora-blob size-[60vmax] -top-[20vmax] -left-[15vmax] bg-primary"
          style={{ animationDuration: "24s" }}
        />
        <div
          className="aurora-blob size-[50vmax] top-[30vmax] -right-[15vmax] bg-accent"
          style={{ animationDuration: "30s", animationDelay: "-8s" }}
        />
        <div
          className="aurora-blob size-[40vmax] bottom-[-10vmax] left-[20vmax] bg-highlight"
          style={{ animationDuration: "36s", animationDelay: "-16s" }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative z-10 pt-16 pb-12 px-6 flex flex-col items-center text-center animate-slide-up">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            Database Active
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="Logo da Script Box"
            className="size-16 sm:size-20 object-contain drop-shadow-[0_0_24px_rgba(153,41,234,0.55)]"
          />
          <h1 className="font-display text-6xl sm:text-7xl uppercase tracking-tighter animate-shimmer">
            Script Box
          </h1>
        </div>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          De fã. <span className="text-foreground/40">//</span> Para fãs
        </p>
      </header>

      {/* Content Grid */}
      <main className="relative z-10 px-5 max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

        {/* Apostilas — faixa separada */}
        <section
          className="mt-4 rounded-2xl border border-accent/25 bg-accent/5 p-5 animate-slide-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:flex md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  OpenFuture
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">// extra</span>
              </div>
              <h2 className="mt-1 font-bold text-lg">Apostilas &amp; Livros Didáticos</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Repositório com a maioria das apostilas e livros fornecidos pelas escolas.
              </p>
            </div>
            <a
              href="https://apostilas.nejizzuki.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wide transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              <ExternalLinkIcon className="size-3" />
              Acessar apostilas
            </a>
          </div>
        </section>
      </main>


      {/* Credits Section */}
      <footer className="relative z-10 mt-20 px-6 pb-20 animate-slide-up [animation-delay:600ms]">
        <div className="max-w-md mx-auto p-6 rounded-3xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
              <img
                src={pfp}
                alt="Foto do 14 Bis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl leading-none uppercase tracking-tight">
                14 Bis
              </h3>
              <p className="text-[10px] font-mono text-accent uppercase mt-1">
                Fundador / Criador
              </p>
            </div>
            <a
              href="https://github.com/o14bis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub do 14 Bis"
              className="ml-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github className="size-4" />
            </a>

          </div>
          <blockquote className="text-sm text-pretty text-foreground/80 leading-relaxed font-medium">
            Opa, tudo bem? Eu sou o 14 bis, criador desse site e fundador da
            ScriptBox. Bem, eu fiz esse site com a intenção de facilitar o acesso
            de vários sites diferentes, pq antes eram VÁRIOS sites, e era muito
            difícil de achar a url de cada um deles. Apesar de a maioria dos
            servers terem juntado tudo em um só site, achei legal fazer ele, pq
            é um sonho meu participar dessa comunidade kk
          </blockquote>
        </div>
      </footer>

      {/* Donation Section */}
      <section className="relative z-10 px-6 pb-20 animate-slide-up [animation-delay:700ms]">
        <div className="max-w-md mx-auto p-6 rounded-3xl bg-green-500/10 border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.08)]">
          <div className="flex items-center gap-2 mb-5">
            <span className="size-1.5 rounded-full bg-accent animate-pulse"></span>
            <h3 className="font-display text-xl leading-none uppercase tracking-tight">
              Canto de Doações
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Quer me ajudar a manter o site e a comprar presentes pra minha namorada? Escaneia o QR Code ou usa o link abaixo!
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_0_30px_rgba(255,95,207,0.15)]">
              <img
                src={qrcode}
                alt="QR Code para doação via pixgg.com/14bis"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <a
              href="https://pixgg.com/14bis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wide transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              <ExternalLinkIcon className="size-3" />
              ou acesse esse link!
            </a>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <div className="relative z-10 px-6 pb-8 animate-slide-up [animation-delay:800ms]">
        <div className="max-w-md mx-auto pt-6 border-t border-white/5 flex justify-center">
          <p className="text-[10px] font-mono text-muted-foreground/50">
            © {new Date().getFullYear()} SCRIPTBOX HUB
          </p>
        </div>
      </div>
    </div>
  );
}

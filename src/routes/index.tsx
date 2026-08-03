import { createFileRoute } from "@tanstack/react-router";
import creatorImage from "../assets/creator.jpg.asset.json";
import logoImage from "../assets/scriptbox-logo.png.asset.json";

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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-grid">
      {/* Hero Section */}
      <header className="pt-16 pb-12 px-6 flex flex-col items-center text-center animate-slide-up">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            Database Active
          </span>
        </div>
        <h1 className="font-display text-7xl uppercase tracking-tighter animate-shimmer">
          Script Box
        </h1>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          De fã. <span className="text-foreground/40">//</span> Para fãs
        </p>
      </header>

      {/* Content Grid */}
      <main className="px-5 space-y-4 max-w-md mx-auto">
        {/* Platform Destroyer */}
        <article className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 animate-slide-up [animation-delay:100ms]">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-bold text-lg">Plataform Destroyer</h2>
            <span className="font-mono text-[10px] bg-white/5 px-2 py-1 rounded">
              ALL-IN-ONE
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Site inteiro que reúne a maioria das plataformas de automação.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://platformdestroyer.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-foreground text-background font-semibold text-xs transition-transform active:scale-95"
            >
              <ExternalLinkIcon className="size-3" />
              SITE
            </a>
            <a
              href="https://discord.gg/platformdestroyer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-card border border-border text-foreground font-semibold text-xs hover:bg-white/5 transition-colors"
            >
              <DiscordIcon className="size-3" />
              DISCORD
            </a>
          </div>
        </article>

        {/* OpenFuture */}
        <article className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 animate-slide-up [animation-delay:200ms]">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-bold text-lg text-balance">OpenFuture</h2>
            <span className="font-mono text-[10px] bg-white/5 px-2 py-1 rounded">
              MULTI-HUB
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Site completo de scripts e repositório de apostilas e livros didáticos.
          </p>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://openfuture.lol/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-foreground text-background font-semibold text-xs transition-transform active:scale-95"
              >
                <ExternalLinkIcon className="size-3" />
                WEBSITE
              </a>
              <a
                href="https://discord.gg/openfuture"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-card border border-border text-foreground font-semibold text-xs hover:bg-white/5 transition-colors"
              >
                <DiscordIcon className="size-3" />
                DISCORD
              </a>
            </div>
            <a
              href="https://apostilas.nejizzuki.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent font-semibold text-[11px] uppercase tracking-wide transition-colors hover:bg-accent/20"
            >
              Apostilas & Livros
            </a>
          </div>
        </article>

        {/* Zeta */}
        <article className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 animate-slide-up [animation-delay:300ms]">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-bold text-lg">Zeta</h2>
            <span className="font-mono text-[10px] bg-white/5 px-2 py-1 rounded">
              CORE HUB
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Soluções integradas para as principais plataformas educacionais.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://zetazerohub.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-foreground text-background font-semibold text-xs transition-transform active:scale-95"
            >
              <ExternalLinkIcon className="size-3" />
              PORTAL
            </a>
            <a
              href="https://discord.gg/DUwWasTxk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-card border border-border text-foreground font-semibold text-xs hover:bg-white/5 transition-colors"
            >
              <DiscordIcon className="size-3" />
              DISCORD
            </a>
          </div>
        </article>

        {/* MoonScripts */}
        <article className="group relative p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 animate-slide-up [animation-delay:400ms]">
          <div className="flex justify-between items-start mb-3">
            <h2 className="font-bold text-lg">MoonScripts</h2>
            <span className="font-mono text-[10px] bg-accent/20 text-accent px-2 py-1 rounded">
              TAREFASP
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Organização que prefere sites separados. Atualmente ativa com o TarefaSP.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="https://doritus.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-foreground text-background font-bold text-xs shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-transform active:scale-95"
            >
              <ExternalLinkIcon className="size-3" />
              DORITUS CLOUD
            </a>
          </div>
        </article>
      </main>

      {/* Credits Section */}
      <footer className="mt-20 px-6 pb-20 animate-slide-up [animation-delay:600ms]">
        <div className="max-w-md mx-auto p-6 rounded-3xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
              <img
                src={creatorImage.url}
                alt="Foto do 14 Bis, criador da Script Box"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-display text-xl leading-none uppercase tracking-tight">
                14 Bis
              </h3>
              <p className="text-[10px] font-mono text-accent uppercase mt-1">
                Fundador / Criador
              </p>
            </div>
          </div>
          <blockquote className="text-sm text-pretty text-foreground/80 leading-relaxed font-medium">
            &ldquo;Opa, tudo bem? Eu sou o 14 bis, criador desse site e fundador da
            ScriptBox. Bem, eu fiz esse site com a intenção de facilitar o acesso
            de vários sites diferentes, pq antes eram VÁRIOS sites, e era muito
            difícil de achar a url de cada um deles. Apesar de a maioria dos
            servers terem juntado tudo em um só site, achei legal fazer ele, pq
            é um &ldquo;sonho&rdquo; meu participar dessa comunidade kk&rdquo;
          </blockquote>
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
            <p className="text-[10px] font-mono text-muted-foreground/50">
              © {new Date().getFullYear()} SCRIPTBOX HUB
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

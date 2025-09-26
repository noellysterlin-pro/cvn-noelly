import { Mail, Linkedin, Download } from "lucide-react";
import React from "react";

const PALETTE = { primary: "#7030A0", accent: "#F5E663" } as const;
const SERIF = '"Libre Baskerville","Bookman Old Style",serif';
const PORTRAIT_URL = "/portrait-noelly.jpg"; // ton image dans /public

// Bouton réutilisable (accepte target / rel)
function CTAButton({
  children,
  href = "#",
  variant = "filled",
  className = "",
  target,
  rel,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "filled" | "outline";
  className?: string;
  target?: string;
  rel?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-transform duration-200";
  if (variant === "outline")
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} border ${className}`}
        style={{ backgroundColor: "white", color: PALETTE.primary, borderColor: PALETTE.primary }}
      >
        {children}
      </a>
    );
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${className}`}
      style={{ backgroundColor: PALETTE.accent, color: "#111827" }}
    >
      {children}
    </a>
  );
}

export default function Header({ page, go }: { page: number; go: (to: number) => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/10">
      <div className="bg-[linear-gradient(180deg,#111827_0%,#221f2b_100%)] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Gauche : avatar + intitulé */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full overflow-hidden ring-2" style={{ boxShadow: `0 0 0 2px ${PALETTE.accent}66` }}>
              <img src={PORTRAIT_URL} alt="Portrait Noelly Sterlin" className="h-full w-full object-cover" />
            </div>
            <div>
              <p style={{ fontFamily: SERIF }} className="font-semibold leading-tight tracking-wide uppercase">Noelly Sterlin</p>
              <p className="text-xs" style={{ color: PALETTE.accent }}>
                Science × Stratégie business & développement (Santé, Biotech, Nutrition)
              </p>
            </div>
          </div>

          {/* Centre : onglets */}
          <nav className="flex items-center gap-2" role="tablist" aria-label="Sections du CV">
            <button
              role="tab" aria-selected={page === 0} aria-controls="panel-0" id="tab-0" onClick={() => go(0)}
              className={`px-3 py-2 text-sm rounded-2xl transition duration-300 border border-white/15 ${
                page === 0 ? "bg-[#F5E663] text-[#111827]" : "text-white hover:bg-white/10"
              }`}
            >
              Présentation
            </button>
            <button
              role="tab" aria-selected={page === 1} aria-controls="panel-1" id="tab-1" onClick={() => go(1)}
              className={`px-3 py-2 text-sm rounded-2xl transition duration-300 border border-white/15 ${
                page === 1 ? "bg-[#F5E663] text-[#111827]" : "text-white hover:bg-white/10"
              }`}
            >
              Compétences
            </button>
            <button
              role="tab" aria-selected={page === 2} aria-controls="panel-2" id="tab-2" onClick={() => go(2)}
              className={`px-3 py-2 text-sm rounded-2xl transition duration-300 border border-white/15 ${
                page === 2 ? "bg-[#F5E663] text-[#111827]" : "text-white hover:bg-white/10"
              }`}
            >
              Profil
            </button>
          </nav>

          {/* Droite : icônes + CTA */}
          <div className="flex items-center gap-4 ml-6">
            <div className="flex items-center gap-4 text-2xl">
              <a href="https://www.linkedin.com/in/sterlin-noelly/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition duration-300" aria-label="Profil LinkedIn de Noelly Sterlin">
                <Linkedin />
              </a>
              <a href="mailto:noelly.sterlin.pro@gmail.com" className="text-white/90 hover:text-white transition duration-300" aria-label="Envoyer un email à Noelly Sterlin">
                <Mail />
              </a>
            </div>
            <CTAButton href="/cv_2025_noelly_sterlin.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm whitespace-nowrap">
              <Download size={16} /> Télécharger le CV
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}

// src/components/SlideThree.tsx
import type { ReactNode } from "react";

const PALETTE = {
  primary: "#7030A0",
  accent: "#F5E663",
  dark: "#111827",
  white: "#FFFFFF",
  gray: "#374151",
  border: "#e5e7eb",
  light: "#F3F4F6",
} as const;

const SANS =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"';
const SERIF = '"Libre Baskerville","Bookman Old Style",serif';

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4">
      <h2
        className="text-2xl font-bold"
        style={{ color: PALETTE.dark, fontFamily: SERIF }}
      >
        {children}
      </h2>
      <div
        className="h-1 w-12 rounded mt-2"
        style={{ backgroundColor: PALETTE.primary }}
      />
    </div>
  );
}

// CTA local (accepte target / rel)
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

/** ====== Blocs MBTI + DISC (avec même design de titre que "Vision & ambitions") ====== */
function ProfilMBTI_DISC() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 mt-8">
      {/* MBTI */}
      <SubTitle>Mon profil de pensée – INTJ-A</SubTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Visionnaire & stratège
          </h3>
          <p className="text-gray-700 text-sm">
            <strong>Anticipe les tendances</strong>, relie les signaux faibles
            et structure des plans clairs et pragmatiques.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Orientée résultats
          </h3>
          <p className="text-gray-700 text-sm">
            <strong>Transforme la complexité scientifique</strong> en solutions
            concrètes et mesurables.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Efficace & autonome
          </h3>
          <p className="text-gray-700 text-sm">
            <strong>Optimise les processus</strong>, hiérarchise les priorités
            et décide avec logique et preuves.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Innovante & méthodique
          </h3>
          <p className="text-gray-700 text-sm">
            Conçoit des approches nouvelles et structurées pour résoudre des
            problématiques complexes et créer des solutions durables.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Leadership naturel
          </h3>
          <p className="text-gray-700 text-sm">
            Guide par objectifs clairs, valorise la rigueur et l’expertise
            collective.
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Essentiel pour mon métier
        </h3>
        <p className="text-gray-800 text-sm mt-1">
          Ce profil s’appuie sur mon <strong>intuition stratégique (Ni)</strong>{" "}
          et ma <strong>pensée logique (Te)</strong> : deux leviers clés qui me
          permettent de <strong>faire passer les découvertes du laboratoire au marché</strong>, cœur du rôle en{" "}
          <strong>R&D nutraceutique</strong>.
        </p>
      </div>

      {/* DISC */}
      <div className="mt-12">
        <SubTitle>Mon profil comportemental – DISC</SubTitle>
      </div>

      {/* Légende couleurs */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-xs text-gray-700">
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          Dominance
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          Influence
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
          Stabilité
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          Conformité
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Conformité */}
        <div className="rounded-xl border p-5 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Conformité
            </h3>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              27%
            </span>
          </div>
          <div className="mt-3 border-l-4 border-blue-600 pl-4">
            <p className="text-gray-700 text-sm">
              <strong>Rigueur & qualité</strong> : respect des standards,
              précision d’analyse, exigence sur les résultats.
            </p>
          </div>
        </div>

        {/* Stabilité */}
        <div className="rounded-xl border p-5 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Stabilité
            </h3>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
              24%
            </span>
          </div>
          <div className="mt-3 border-l-4 border-green-600 pl-4">
            <p className="text-gray-700 text-sm">
              <strong>Constance & fiabilité</strong> : écoute, coopération,
              environnements organisés et harmonieux.
            </p>
          </div>
        </div>

        {/* Dominance */}
        <div className="rounded-xl border p-5 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-700">
              Dominance
            </h3>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
              26%
            </span>
          </div>
          <div className="mt-3 border-l-4 border-red-600 pl-4">
            <p className="text-gray-700 text-sm">
              <strong>Décision & pilotage</strong> : action en contexte
              exigeant, prise de responsabilités, orientation objectifs.
            </p>
          </div>
        </div>

        {/* Influence */}
        <div className="rounded-xl border p-5 bg-white">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Influence
            </h3>
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              23%
            </span>
          </div>
          <div className="mt-3 border-l-4 border-amber-500 pl-4">
            <p className="text-gray-700 text-sm">
              <strong>Influence & fédération</strong> : communication claire,
              création de lien, mobilisation des parties prenantes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Essentiel pour mon métier
        </h3>
        <p className="text-gray-800 text-sm mt-1">
          Mes résultats DISC traduisent un <strong>profil équilibré mais affirmé</strong> :
          la <strong>Dominance</strong> et la <strong>Conformité</strong> renforcent ma
          capacité à <strong>décider vite tout en gardant la rigueur</strong>, tandis que
          la <strong>Stabilité</strong> et l’<strong>Influence</strong> soutiennent mon <strong>écoute active</strong>,
          ma <strong>coopération</strong> et ma <strong>faculté à engager les autres</strong>. Cet ensemble me
          permet de <strong>piloter des projets R&D complexes</strong> en combinant efficacité,
          clarté et mobilisation des parties prenantes.
        </p>
      </div>
    </section>
  );
}

export default function SlideThree() {
  const PDF_URL = "/cv_2025_noelly_sterlin.pdf";

  const ambitions = [
    {
      period: "Maintenant (0–2 ans)",
      title: "R&D nutraceutique",
      points: [
        "Ingénieure R&D / Chargée d’étude / Formulation nutraceutique",
        "Objectif : prouver la maîtrise technique appliquée au produit",
        "MBA en cours = montée en management → positionnement au-delà du rôle purement technique",
      ],
      dot: PALETTE.primary,
    },
    {
      period: "Moyen terme (3–5 ans)",
      title: "Développement produit & réglementaire",
      points: [
        "Ingénieure nutraceutique / Nutritionniste – Spécialiste produit",
        "Expertise : nutrition fonctionnelle, claims santé, réglementaire, formulation",
        "Début du pilotage de projets transverses",
      ],
      dot: PALETTE.accent,
    },
    {
      period: "Long terme (5–10 ans)",
      title: "Management BU & Innovation nutraceutique",
      points: [
        "Manager Business Unit / Responsable innovation",
        "Légitimité technique + vision stratégique consolidée",
        "Gestion d’équipe, portefeuille produit, voire d’une BU entière",
      ],
      dot: PALETTE.dark,
    },
  ];

  return (
    <section className="space-y-10" style={{ fontFamily: SANS }}>
      {/* Bandeau + intro personnelle */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl p-6 md:p-8 text-white bg-[linear-gradient(180deg,#111827_0%,#221f2b_100%)]">
          <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide">
            Profil personnel <span className="text-[#F5E663]">&</span> vision
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Qui je suis, ma personnalité et mes ambitions professionnelles
          </p>
        </div>

        {/* Paragraphe indépendant sous le bandeau */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-700">
            Esprit analytique et créatif, je combine la rigueur scientifique et la curiosité intellectuelle avec une vraie capacité à structurer et décider.
            Ce qui me définit : apprendre vite, relier des domaines différents, chercher le sens avant l’action.
            Je me construis sur une vision long terme, avec l’envie d’apporter des solutions concrètes et utiles.
          </p>
        </div>
      </div>

      {/* Blocs MBTI + DISC */}
      <div className="mx-auto max-w-6xl px-4">
        <ProfilMBTI_DISC />
      </div>

      {/* Vision & ambitions */}
      <div className="mx-auto max-w-6xl px-4">
        <SubTitle>Vision & ambitions</SubTitle>
        <p className="text-sm text-gray-700 mb-4">
          J’aime transformer la complexité en clarté. Mon moteur est la recherche de sens, avec la conviction que la science doit servir à améliorer le quotidien.
        </p>

        <ol
          className="relative border-s-2 border-dashed ps-4"
          style={{ borderColor: `${PALETTE.primary}66` }}
        >
          {ambitions.map((a) => (
            <li key={a.period} className="mb-5">
              <div
                className="absolute -start-2.5 mt-1 h-4 w-4 rounded-full"
                style={{ backgroundColor: a.dot }}
              />
              <p className="font-medium" style={{ color: PALETTE.dark }}>
                {a.period}
              </p>
              <p className="text-sm mt-0.5" style={{ color: PALETTE.dark }}>
                <span className="font-semibold" style={{ color: PALETTE.primary }}>
                  {a.title}
                </span>
              </p>
              <ul className="mt-1 list-disc pl-5 text-sm" style={{ color: PALETTE.gray }}>
                {a.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* Bandeau final */}
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="rounded-2xl p-6 text-white"
          style={{ background: "linear-gradient(180deg,#221f2b 0%,#111827 100%)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold" style={{ fontFamily: SERIF }}>
                Travaillons ensemble
              </h3>
              <p className="text-sm text-white/80">
                Email :{" "}
                <a href="mailto:noelly.sterlin.pro@gmail.com" className="underline">
                  noelly.sterlin.pro@gmail.com
                </a>{" "}
                • LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/sterlin-noelly/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  /in/sterlin-noelly
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CTAButton href={PDF_URL} target="_blank" rel="noopener noreferrer">
                Télécharger le CV
              </CTAButton>
              <CTAButton href="mailto:noelly.sterlin.pro@gmail.com" variant="outline">
                Me contacter
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

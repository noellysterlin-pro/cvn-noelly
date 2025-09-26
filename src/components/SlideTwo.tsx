import React, { type ReactNode } from "react";

// Palette et polices (cohérence design)
const PALETTE = {
  primary: "#7030A0",
  accent: "#F5E663",
  dark: "#111827",
  white: "#FFFFFF",
  gray: "#374151",
  border: "#e5e7eb",
  badgeBg: "#FFFEEE",
  badgeBorder: "#e5e7eb",
  light: "#F3F4F6",
  purple: "#7030A0",
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

export default function SlideTwo() {
  const FORMATIONS = [
    {
      title: "MBA Manager Business Unit (en ligne – en cours) – Studi & ESG",
      desc:
        "Pilotage BU, prévisions financières, stratégie de développement, KPI projets.",
      emphasize: true,
    },
    {
      title:
        "MSc Management de projet d’innovation & entrepreneuriat (spécialisation intrapreneuriat) – IRIIG Lyon",
      desc:
        "Missions d’accompagnement de porteurs de projets start-up (consulting) et d’intrapreneuriat : étude de marché, business model canvas, pitch deck, business case chiffré.",
    },
    {
      title:
        "M2 Biologie moléculaire et cellulaire (spécialisation biologie cutanée) – Université Lyon 1",
      desc:
        "Expertise R&D cutanée : modèles in vitro, immunité, recherche cicatrisation.",
    },
    {
      title:
        "M1 Ingénierie de la santé (spécialisation Génie cellulaire) – Université de Poitiers",
      desc:
        "Approfondissement en génie génétique, approches OMICS, gestion de projet, recherche appliquée en ingénierie de la santé.",
    },
    {
      title:
        "Licence Sciences de la vie (génétique & biologie cellulaire) – Université Lyon 1",
      desc:
        "Bases solides en biologie moléculaire, génétique, immunologie, microbiologie et physiologie.",
    },
  ];

  // Outils & data — badges
  const OUTILS_DATA = [
    "Suite Office : Word, Excel, PowerPoint",
    "Pubmed",
    "Zotero",
    "Airtable",
    "GANTT",
    "Image J",
    "Prompting IA",
    "FooDB (Food Database)",
    "Food Plants International (FPI) Database",
    "FoodData Central (USDA)",
    "EFSA Compendium",
    "Novel Food Catalogue",
    "Phenol-Explorer",
    "Union List of Novel Foods (EU Regulation 2017/2470)",
  ];

  return (
    <section className="space-y-10" style={{ fontFamily: SANS }}>
      {/* Bandeau titre */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl p-6 md:p-8 text-white bg-[linear-gradient(180deg,#111827_0%,#221f2b_100%)] border border-white/10">
          <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide">
            Compétences <span style={{ color: PALETTE.primary }}>&</span>{" "}
            formations
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Hard skills, atouts et formations
          </p>
        </div>

        {/* Domaines d’expertise & savoir-faire */}
        <div className="mt-6">
          <SubTitle>
            <>
              Domaines d’expertise{" "}
              <span style={{ color: PALETTE.primary }}>&</span> savoir-faire
            </>
          </SubTitle>

          {/* 3 blocs côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bloc 1 */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <header className="mb-3">
                <h3 className="text-xl font-semibold text-zinc-900">
                  Nutrition & nutraceutique
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Compétences et cas appliqué au secteur
                </p>
              </header>
              <ul className="space-y-2 text-sm">
                <li>Bases en formulation nutraceutique (poudres).</li>
                <li>
                  Bases en nutrition fonctionnelle (microbiote,
                  biodisponibilité, anti-nutriments).
                </li>
                <li>
                  Réglementation EFSA (allégations santé) & HACCP (sécurité
                  alimentaire).
                </li>
              </ul>
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                <h4 className="text-sm font-semibold text-emerald-900">
                  Cas appliqué — KEYAA (superfood & nutraceutique)
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-emerald-950">
                  <li>→ Étude de marché ciblée superfoods</li>
                  <li>→ Idéation formulation (poudre)</li>
                  <li>→ Proposition de valeur & branding/storytelling</li>
                  <li>
                    → <span className="font-medium">Résultat :</span> socle
                    initial d’une BU nutraceutique (alignement marché-produit)
                  </li>
                </ul>
              </div>
            </section>

            {/* Bloc 2 */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <header className="mb-3">
                <h3 className="text-xl font-semibold text-zinc-900">
                  Business / service (conseil & stratégie)
                </h3>
              </header>
              <ul className="space-y-2 text-sm">
                <li>
                  Conseil en financement de l’innovation – crédit d’impôt
                  recherche (CIR).
                </li>
                <li>
                  Études de marché & positionnement stratégique (SAFE, ASTACI).
                </li>
                <li>Business Model Canvas, Business Plan, prévisions financières.</li>
                <li>Pitch deck & présentation stratégique.</li>
                <li>
                  Accompagnement de porteurs de projets (SAFE, ASTACI, KEYAA).
                </li>
              </ul>
            </section>

            {/* Bloc 3 */}
            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <header className="mb-3">
                <h3 className="text-xl font-semibold text-zinc-900">
                  Compétences transverses & opérationnelles
                </h3>
              </header>
              <ul className="space-y-2 text-sm">
                <li>
                  Études consommateurs : enquêtes B2B/B2C, tests de concepts &
                  pricing (ENOV – Ipsos, Kantar, Engie).
                </li>
                <li>
                  Normes alimentaires & HACCP : respect process qualité, gestion
                  flux/stock (McDonald’s).
                </li>
                <li>
                  Organisation & sécurité : contrôle d’accès, logistique
                  salles/stocks, confidentialité (Phone Régie – EDF).
                </li>
                <li>
                  Collecte & coordination terrain : données fiables,
                  coordination d’équipes (Ad’Hoc Research – Keolis).
                </li>
                <li>
                  Relation client & communication : accueil physique &
                  téléphonique, gestion réclamations.
                </li>
              </ul>
            </section>
          </div>

          {/* Background scientifique */}
          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm mt-6">
            <header className="mb-3">
              <h3 className="text-xl font-semibold text-zinc-900">
                Background scientifique
              </h3>
            </header>
            <p className="text-sm text-zinc-800 leading-relaxed">
              Base solide en biologie cellulaire et modèles in vitro,
              développant une rigueur scientifique et des compétences d’analyse
              transférables aux projets en nutrition et nutraceutique.
            </p>
          </section>

          {/* Outils & data — pleine largeur */}
          <div className="mt-6">
            <SubTitle>Outils & data</SubTitle>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm w-full">
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {OUTILS_DATA.map((it, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-full border text-center"
                    style={{
                      borderColor: PALETTE.border,
                      backgroundColor: "#FFFEEE",
                      color: PALETTE.dark,
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formations & certifications */}
      <section className="mt-12 py-10" style={{ backgroundColor: PALETTE.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: PALETTE.dark, fontFamily: SERIF }}
          >
            Formations & certifications
          </h3>
          <div
            className="h-1 w-12 rounded"
            style={{ backgroundColor: PALETTE.purple }}
          />
          <div className="space-y-4">
            {FORMATIONS.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 bg-white border"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="space-y-1">
                  <div className="font-semibold" style={{ color: PALETTE.dark }}>
                    {f.emphasize ? (
                      <strong style={{ color: PALETTE.dark }}>{f.title}</strong>
                    ) : (
                      f.title
                    )}
                  </div>
                  {f.desc && (
                    <p className="text-sm" style={{ color: PALETTE.gray }}>
                      {f.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

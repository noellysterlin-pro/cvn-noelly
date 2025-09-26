import React, { type ReactNode } from "react";

// Palette et polices (identiques à la page 2 pour cohérence)
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

// Composants utilitaires
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

function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-sm rounded-full border"
      style={{
        borderColor: PALETTE.badgeBorder,
        backgroundColor: PALETTE.badgeBg,
        color: PALETTE.dark,
      }}
    >
      {children}
    </span>
  );
}

function CTAButton({
  children,
  href = "#",
  variant = "filled",
}: {
  children: ReactNode;
  href?: string;
  variant?: "filled" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-transform duration-200 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  if (variant === "outline")
    return (
      <a
        href={href}
        className={`${base} border hover:-translate-y-0.5`}
        style={{
          backgroundColor: PALETTE.white,
          color: PALETTE.primary,
          borderColor: PALETTE.primary,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        {children}
      </a>
    );
  return (
    <a
      href={href}
      className={`${base} hover:-translate-y-0.5`}
      style={{
        backgroundColor: PALETTE.accent,
        color: PALETTE.dark,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </a>
  );
}

// ======= PAGE 1 =======
export default function SlideOne() {
  const PORTRAIT_URL = "/portrait-noelly.jpg"; 

  return (
    <section className="space-y-10" style={{ fontFamily: SANS }}>
      {/* Bandeau de présentation */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-14 rounded-2xl p-6 md:p-8 text-white bg-[radial-gradient(800px_400px_at_0%_0%,#221f2b_0%,#111827_60%)] shadow-sm">
        <div className="order-2 md:order-1">
          <h1
            style={{ fontFamily: SERIF }}
            className="text-3xl md:text-4xl font-extrabold leading-tight uppercase tracking-tight"
          >
            Ingénieure R&amp;D nutraceutique →{" "}
            <span style={{ color: PALETTE.accent }}>
              future responsable innovation
            </span>
          </h1>
          <p className="mt-3 text-white/85">
            À la croisée de la{" "}
            <span className="font-bold" style={{ color: PALETTE.accent }}>
              Science biologique
            </span>{" "}
            et du{" "}
            <span className="font-bold" style={{ color: PALETTE.accent }}>
              management stratégique
            </span>
            , j’ai construit un profil capable de transformer la complexité
            scientifique en actions concrètes.
          </p>
          <p className="mt-3 text-white/85">
            Mon approche mobilise la synthèse critique, l’analyse business et
            l’innovation raisonnée pour des solutions pertinentes
            scientifiquement et performantes économiquement.
          </p>
          <div className="mt-6 text-sm" style={{ color: PALETTE.gray }}>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Disponible immédiatement</Badge>
              <Badge>Basée à Lyon</Badge>
            </div>
            <div className="mt-2">
              <Badge>En cours : MBA en ligne Manager Business Unit</Badge>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl"
            style={{ boxShadow: `0 0 0 4px ${PALETTE.primary}66` }}
          >
            <img
              src={PORTRAIT_URL}
              alt="Portrait Noelly Sterlin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Présentation détaillée */}
      <section className="mt-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <SubTitle>Présentation</SubTitle>
              <p
                className="text-base leading-relaxed"
                style={{ color: PALETTE.gray }}
              >
                Ingénieure en biologie moléculaire et cellulaire, en MBA Manager
                Business Unit, je me spécialise désormais dans le développement
                nutraceutique. Mon objectif : mettre à profit ma rigueur
                scientifique et mes compétences transverses pour évoluer vers la
                formulation et l’innovation produit en nutrition santé.
              </p>
            </div>
            <div>
              <div
                className="rounded-2xl p-5 border"
                style={{ backgroundColor: PALETTE.light, borderColor: "#E5E7EB" }}
              >
                <ul className="space-y-2">
                  {[
                    "Profil hybride science-business",
                    "Capacité à collaborer en transversal",
                    "Esprit curieux et critique, moteur d’innovation",
                    "Adaptabilité rapide à de nouveaux environnements scientifiques et sectoriels",
                    "Rigueur et sens de la traçabilité scientifique",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: PALETTE.purple }}
                      />
                      <span style={{ color: PALETTE.dark }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact chiffré & contributions scientifiques */}
      <section className="mt-10">
        <div className="mx-auto max-w-6xl px-4">
          <SubTitle>Impact chiffré &amp; contributions scientifiques</SubTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Valorisation business de la science",
                highlight:
                  "42 dossiers biotech/chimie validés, 200+ argumentaires techniques, ≈ 6 M€ CIR sécurisés, 0 redressement.",
                badges: ["ABGi – Visiativ", "BU Sciences de la vie & Chimie"],
              },
              {
                title: "Recherche appliquée — Projet GENESIS CICAT",
                highlight:
                  "Optimisation d’un modèle de peau reconstruite in vitro, apport de données inédites sur des kératinocytes atypiques pour la cicatrisation.",
                badges: [
                  "CNRS LBTI / Université Lyon 1 & URGO",
                  "Équipe SKIN",
                ],
              },
              {
                title:
                  "Recherche fondamentale (ANR) — Projet PerVaSKIN",
                highlight:
                  "Contribution à la mise au point d’un modèle de derme vascularisé en hydrogel, intégré à une puce microfluidique perfusée pour la modélisation des capillaires cutanés.",
                badges: [
                  "CNRS, ENS Paris & Collège de France",
                  "Hypoxie & angiogenèse",
                ],
              },
            ].map((it) => (
              <div
                key={it.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {it.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    {it.highlight}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {it.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      {b}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-amber-50/0 via-amber-50/40 to-amber-100/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intrapreneuriat et management de projet innovant */}
      <section className="mt-10">
        <div className="mx-auto max-w-6xl px-4">
          <SubTitle>
            Intrapreneuriat et management de projet innovant —{" "}
            <span className="align-middle">
              École IRIIG / Incubateur Start-up
            </span>
          </SubTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {[
              {
                title:
                  "Accompagnement business & consulting — Start-up SAFE (incubée SHAKER)",
                scope:
                  "Cadrage stratégique et go-to-market pour un projet early-stage (formation de formateurs). Besoin de structurer l’offre et le business model.",
                deliverables: [
                  "Étude de marché et executive summary",
                  "Business Model Canvas & Business Plan",
                  "Prévisionnel financier",
                  "Personas et recommandations",
                  "Pitch deck",
                ],
                result:
                  "Socle décisionnel validant le go/no-go et la priorisation des segments ; alignement initial offre-marché.",
                badges: ["SAFE", "Programme SHAKER"],
              },
              {
                title:
                  "Idéation stratégique — Start-up ASTACI (projet pédagogique)",
                scope:
                  "Exploration marché et POC : projet en phase d’exploration avec incertitudes sur le positionnement.",
                deliverables: [
                  "Benchmark de 6 concurrents",
                  "Business Model Canvas",
                  "Proposition de valeur & personas",
                  "Prévisionnel financier",
                  "Pitch stratégique",
                ],
                result:
                  "Clarification du positionnement initial et base chiffrée pour itérations et décision go/no-go.",
                badges: ["ASTACI"],
              },
              {
                title:
                  "Développement d’une Business Unit — Start-up KEYAA (superfood & nutraceutique)",
                scope:
                  "Positionnement stratégique et innovation produit : étude de marché, idéation et brainstorming sur une formulation superfood en poudre ; premiers éléments de branding et storytelling.",
                deliverables: [
                  "Proposition de valeur",
                  "Personas",
                  "Pitch produit",
                ],
                result:
                  "Socle initial pour structurer la BU nutraceutique : alignement marché-produit et récit de marque.",
                badges: ["KEYAA", "Superfood & nutraceutique"],
              },
            ].map((b) => (
              <article
                key={b.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    {b.scope}
                  </p>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      Livrables
                    </h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                      {b.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      Résultat
                    </h4>
                    <p className="mt-1 text-sm text-zinc-800">{b.result}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.badges.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-50/0 via-emerald-50/40 to-emerald-100/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs étudiants / Activités professionnelles annexes */}
      <section className="mt-12 py-10" style={{ backgroundColor: PALETTE.light }}>
        <div className="mx-auto max-w-6xl px-4">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: PALETTE.dark, fontFamily: SERIF }}
          >
            Jobs étudiants / Activités professionnelles annexes
          </h3>
          <div
            className="h-1 w-12 rounded"
            style={{ backgroundColor: PALETTE.purple }}
          />
          <div className="space-y-4 mt-4">
            {[
              {
                title: "Hôtesse évènementiel – PROFIL",
                period: "2023 (2 ans)",
                desc: "Accueil physique : salons, congrès, coupe du monde Rugby, match de football - Groupama Stadium",
              },
              {
                title: "Hôtesse d’accueil standardiste - Phone Régie",
                period: "2021 (4 ans)",
                desc: "Accueil & standard téléphonique, courriers, confidentialité, tenue professionnelle : EDF, ENTPE, REGUS",
              },
              {
                title: "Télé-enquêtrice – ENOV",
                period: "2020 (1 an)",
                desc: "Études marketing et innovation prestation Ipsos, Kantar, Engie…. Études BtoB et BtoC",
              },
              {
                title:
                  "Équipière polyvalente – McDonald’s (Vénissieux, Confluence)",
                period: "2017 (1 an)",
                desc: "Service à table, prise de commande comptoir et drive, propreté du restaurant",
              },
              {
                title: "Chargé d'Enquête Référent – Ad'Hoc Research",
                period: "2017 (2 ans)",
                desc: "Au service de Keolis. Enquêtes terrain dans tous les transports en commun de Lyon",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 bg-white border"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold" style={{ color: PALETTE.dark }}>
                    {exp.title}
                  </div>
                  <div className="text-sm" style={{ color: PALETTE.gray }}>
                    {exp.period}
                  </div>
                </div>
                <p className="text-sm mt-1" style={{ color: PALETTE.gray }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

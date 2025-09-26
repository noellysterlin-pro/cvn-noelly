import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Header from "./components/Header";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";

const PALETTE = { primary: "#7030A0" } as const;

export default function App() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const reduceMotion = useReducedMotion();

  // ——— Navigation
  const clamp = (n: number) => Math.max(0, Math.min(2, n));
  const go = (to: number) => {
    const t = clamp(to);
    setDir(t > page ? 1 : -1);
    setPage(t);
  };

  // Clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(page + 1);
      if (e.key === "ArrowLeft") go(page - 1);
      if (e.key === "1" || e.key === "Home") go(0);
      if (e.key === "2") go(1);
      if (e.key === "3" || e.key === "End") go(2);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page]);

  // Swipe tactile
  const touchStartX = useRef<number | null>(null);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const T = 40;
    if (dx > T) go(page - 1);
    if (dx < -T) go(page + 1);
    touchStartX.current = null;
  };

  // Variants (transition 3D douce + respect reduce motion)
  const slide3D = {
    enter: (d: number) => ({
      x: reduceMotion ? 0 : d > 0 ? "100%" : "-100%",
      rotateY: reduceMotion ? 0 : d > 0 ? -15 : 15,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: "easeInOut" },
    },
    exit: (d: number) => ({
      x: reduceMotion ? 0 : d < 0 ? "100%" : "-100%",
      rotateY: reduceMotion ? 0 : d < 0 ? -15 : 15,
      opacity: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: "easeInOut" },
    }),
  } as const;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER (collant) */}
      <Header page={page} go={go} portraitUrl="/portrait-noelly.jpg" />

      {/* CONTENU avec transitions */}
      <main className="relative overflow-hidden" style={{ perspective: 1200 }}>
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="max-w-6xl mx-auto px-4 py-10 min-h-[60vh]"
        >
          <AnimatePresence custom={dir} mode="wait" initial={false}>
            {page === 0 && (
              <motion.section
                key="panel-0"
                id="panel-0"
                role="tabpanel"
                aria-labelledby="tab-0"
                custom={dir}
                variants={slide3D}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <SlideOne />
              </motion.section>
            )}
            {page === 1 && (
              <motion.section
                key="panel-1"
                id="panel-1"
                role="tabpanel"
                aria-labelledby="tab-1"
                custom={dir}
                variants={slide3D}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <SlideTwo />
              </motion.section>
            )}
            {page === 2 && (
              <motion.section
                key="panel-2"
                id="panel-2"
                role="tabpanel"
                aria-labelledby="tab-2"
                custom={dir}
                variants={slide3D}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <SlideThree />
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Flèches latérales violettes */}
        <div className="absolute inset-y-0 left-0 right-0 z-40 flex items-center justify-between px-2 md:px-4 pointer-events-none">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Page précédente"
            className={
              "pointer-events-auto inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border bg-white/90 backdrop-blur-sm shadow-md transition " +
              (page === 0 ? "opacity-40 cursor-not-allowed" : "hover:-translate-x-0.5")
            }
            style={{ borderColor: PALETTE.primary, color: PALETTE.primary }}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => go(page + 1)}
            disabled={page === 2}
            aria-label="Page suivante"
            className={
              "pointer-events-auto inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border bg-white/90 backdrop-blur-sm shadow-md transition " +
              (page === 2 ? "opacity-40 cursor-not-allowed" : "hover:translate-x-0.5")
            }
            style={{ borderColor: PALETTE.primary, color: PALETTE.primary }}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pastilles en bas */}
        <div className="fixed bottom-4 left-0 right-0 mx-auto w-fit z-50">
          <div className="flex items-center gap-2 rounded-full shadow-lg bg-white border px-2 py-2 border-gray-200">
            {[
              { label: "Présentation", to: 0 },
              { label: "Compétences", to: 1 },
              { label: "Profil", to: 2 },
            ].map(({ label, to }) => (
              <button
                key={label}
                onClick={() => go(to)}
                className={
                  "px-3 py-1.5 text-sm rounded-full transition " +
                  (page === to ? "bg-gray-900 text-white" : "text-gray-900 hover:bg-gray-100")
                }
                aria-current={page === to ? "page" : undefined}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

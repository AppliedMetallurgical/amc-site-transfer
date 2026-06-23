"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  mark: string;
  title: string;
  body: string;
  deliverable: string;
};

const STEPS: Step[] = [
  {
    mark: "Blueprint",
    title: "DFM review",
    body: "Print arrives. Geometry reviewed in SolidWorks for moldability, solidification behavior, and machining strategy. Issues flagged before any tooling spend. Customer iterates with engineering, not with a quote bot.",
    deliverable: "Manufacturability feedback + tooling approach",
  },
  {
    mark: "Pattern",
    title: "Pattern development",
    body: "Patterns produced in-house. 3D-printed sand tooling for complex geometry and rapid prototype runs. Hard tooling cut when production volumes justify it. Pattern iteration in days, not weeks.",
    deliverable: "Validated pattern, ready for pour",
  },
  {
    mark: "Flow",
    title: "Gating + risering",
    body: "Engineered gating and risering system designed to control metal flow and solidification. Defect modes (inclusions, porosity, shrink) anticipated and engineered out at the process level.",
    deliverable: "Process plan, defect-controlled",
  },
  {
    mark: "Heat",
    title: "Pour",
    body: "Sand casting, V-process where applicable. Melt chemistry and pour parameters tuned per alloy and part. Controlled solidification, no shortcuts on metallurgy.",
    deliverable: "As-cast part, ±0.030”–±0.125”",
  },
  {
    mark: "Cut",
    title: "Machine",
    body: "Critical features cut on in-house horizontal CNC. Mastercam programming, Fanuc and Mazak controls, Mazak 8800 capacity, and dedicated Enshu 4-axis medical-part production. Machining strategy planned during DFM so cast geometry supports the finished tolerance.",
    deliverable: "Machined part, ±0.0005”",
  },
  {
    mark: "Proof",
    title: "Inspect + ship",
    body: "Process and dimensional validation. First-article and in-process inspection coordinated with production scheduling. The 2026 inspection clean room supports temperature and humidity controlled CMM measurement to .0001\" on machined surfaces.",
    deliverable: "Validated component, documented",
  },
];

export function ProcessStages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const articles = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>("[data-step]")
    );
    if (articles.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number((visible[0].target as HTMLElement).dataset.idx);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    articles.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        gsap.from(el.querySelectorAll(":scope > *"), {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            once: true,
          },
        });
      });

      gsap.from("[data-rail-progress]", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom 60%",
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative grid grid-cols-12 gap-8">
      <aside className="col-span-12 lg:col-span-3 lg:col-start-1">
        <div className="sticky top-32 hidden lg:block">
          <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
            Shop rhythm
          </div>
          <div className="mt-2 h-px w-16 bg-ink/40" />

          <ol className="relative mt-10 space-y-3">
            <div
              aria-hidden
              className="absolute left-[11px] top-1 bottom-1 w-px bg-rule"
            />
            <div
              aria-hidden
              data-rail-progress
              className="absolute left-[11px] top-1 bottom-1 w-px bg-ember"
              style={{ transformOrigin: "top center" }}
            />

            {STEPS.map((s, i) => {
              const active = i === activeIndex;
              return (
                <li
                  key={s.title}
                  className="relative flex items-center gap-4 pl-0 transition-colors duration-300"
                >
                  <span
                    aria-hidden
                    className={`relative z-10 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border bg-paper transition-colors duration-300 ${
                      active
                        ? "border-ember bg-ember text-paper"
                        : "border-rule text-graphite"
                    }`}
                  />
                  <span
                    className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 ${
                      active ? "text-ink" : "text-graphite"
                    }`}
                  >
                    {s.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      <div className="col-span-12 space-y-24 lg:col-span-9 lg:col-start-4">
        {STEPS.map((s, i) => (
          <article
            key={s.title}
            data-step
            data-idx={i}
            className="border-t border-rule pt-10"
          >
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3">
                <div
                  className="font-sans text-[13px] font-black uppercase tracking-[0.18em] text-ember"
                >
                  {s.mark}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h2
                  className="font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 38px)" }}
                >
                  {s.title}
                </h2>
                <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-ink/85">
                  {s.body}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite mb-3">
                  Deliverable
                </div>
                <div className="text-[15px] leading-snug text-ink/85">
                  {s.deliverable}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

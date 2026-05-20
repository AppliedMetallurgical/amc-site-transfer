"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TILES = [
  {
    n: "01",
    eyebrow: "Design",
    title: "DFM consulting",
    body: "SolidWorks-led manufacturability review before any tooling spend.",
  },
  {
    n: "02",
    eyebrow: "Tooling",
    title: "3D-printed patterns",
    body: "Rapid prototype patterns produced in-house. Iteration in days.",
  },
  {
    n: "03",
    eyebrow: "Cast",
    title: "V-process sand casting",
    body: "Cast iron, steel, ductile and grey iron. 10 to 1,000 lbs pour.",
  },
  {
    n: "04",
    eyebrow: "Process",
    title: "Engineered gating",
    body: "Gating, risering, defect reduction solved at the process level.",
  },
  {
    n: "05",
    eyebrow: "Machine",
    title: "Horizontal CNC",
    body: "Mastercam. Fanuc and Mazak controls. Critical features to ±0.001\".",
  },
  {
    n: "06",
    eyebrow: "Validate",
    title: "Inspection + simulation",
    body: "First-article inspection, process validation, dimensional reports.",
  },
];

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from("[data-cap-eyebrow]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-cap-tile]", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: {
          trigger: "[data-cap-grid]",
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper-deep px-6 py-32 md:px-10 lg:px-16"
      style={{ perspective: "1400px" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-cap-eyebrow className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Capabilities
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <h2
              className="font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 56px)" }}
            >
              Concept to finished component.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink/80">
              Six disciplines, one shop. Vertically integrated from design
              review through final inspection — no handoffs, no schedule
              slippage waiting on someone else&rsquo;s queue.
            </p>
          </div>
        </div>

        <div
          data-cap-grid
          className="grid grid-cols-1 gap-px border border-rule/60 bg-rule/60 md:grid-cols-2 lg:grid-cols-3"
        >
          {TILES.map((t) => (
            <Link
              key={t.n}
              href="/capabilities"
              data-cap-tile
              className="group relative flex flex-col justify-between bg-paper p-8 transition-[transform,background-color,box-shadow] duration-500 ease-out hover:bg-paper-deep md:p-10 lg:min-h-[280px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-baseline justify-between">
                <div
                  className="font-sans font-black leading-[1] tracking-[-0.04em] text-ember"
                  style={{ fontSize: "clamp(2rem, 3vw, 48px)" }}
                >
                  {t.n}
                </div>
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                  {t.eyebrow}
                </div>
              </div>

              <div className="mt-10">
                <h3
                  className="font-sans font-bold leading-[1.1] tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-ember"
                  style={{ fontSize: "clamp(1.25rem, 1.8vw, 24px)" }}
                >
                  {t.title}
                </h3>
                <p className="mt-3 max-w-[44ch] text-[14px] leading-relaxed text-ink/75">
                  {t.body}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-graphite transition-colors duration-300 group-hover:text-ember">
                Open
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <Link
            href="/capabilities"
            className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-sans text-[15px] tracking-[0.04em] text-ink transition-colors hover:border-ember hover:text-ember"
          >
            All capabilities
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

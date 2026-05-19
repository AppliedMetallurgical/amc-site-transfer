"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set("[data-hero-intro]", { opacity: 0, y: 14 });
      gsap.set("[data-hero-headline] > span", { opacity: 0, y: 40 });
      gsap.set("[data-hero-badge]", { opacity: 0, y: 8 });
      gsap.set("[data-hero-cue]", { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(
          "[data-hero-intro]",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        )
        .to(
          "[data-hero-headline] > span",
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
          "-=0.45"
        )
        .to(
          "[data-hero-badge]",
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          "[data-hero-cue]",
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-paper"
    >
      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-12 grid-rows-[auto_1fr_auto] gap-6 px-6 pt-48 pb-12 md:px-10 lg:px-16">
        <div className="col-span-12 self-start lg:col-span-5">
          <p
            data-hero-intro
            className="max-w-[44ch] text-[19px] font-medium leading-relaxed text-ink md:text-[21px]"
          >
            Applied Metallurgical Corp. is a sixteen-person ferrous foundry and
            CNC machine shop in Gilmer, Texas. Cast iron and steel, ten to one
            thousand pounds.
          </p>
        </div>

        <div className="col-span-12 self-center">
          <h1
            data-hero-headline
            className="font-serif font-medium leading-[0.95] tracking-[-0.02em] text-ink"
            style={{
              fontSize: "clamp(3rem, 9.5vw, 148px)",
            }}
          >
            <span className="block">Cast iron and steel,</span>
            <span className="block">machined in Gilmer.</span>
          </h1>
        </div>

        <div className="col-span-6 self-end lg:col-span-6">
          <div
            data-hero-badge
            className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite"
          >
            <div className="mb-1">Est. lineage</div>
            <div className="font-serif text-4xl font-semibold tracking-tight text-ink">
              1912
            </div>
          </div>
        </div>

        <div className="col-span-6 self-end text-right lg:col-span-6">
          <div
            data-hero-cue
            className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite"
          >
            ↓&nbsp; The work
          </div>
        </div>
      </div>
    </section>
  );
}

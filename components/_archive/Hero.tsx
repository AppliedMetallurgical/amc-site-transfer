"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Hero3D = dynamic(() => import("./Hero3D").then((m) => m.Hero3D), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.to("[data-hero-shell]", {
        y: -40,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.from("[data-hero-eyebrow]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from("[data-hero-headline] > span", {
        opacity: 0,
        y: 36,
        duration: 1.0,
        delay: 0.35,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.from("[data-hero-rule]", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.0,
        delay: 0.7,
        ease: "power3.out",
      });
      gsap.from("[data-hero-body]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        delay: 0.85,
        ease: "power3.out",
      });
      gsap.from("[data-hero-meta] > *", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 1.0,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-foundry text-paper"
    >
      {/* 3D scene fills the whole section */}
      <div className="absolute inset-0 -z-0">
        <Hero3D />
      </div>

      {/* Vignette overlay for legibility */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 55%, rgba(232,93,44,0.08) 0%, rgba(10,10,11,0.0) 35%), linear-gradient(180deg, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.0) 25%, rgba(10,10,11,0.0) 65%, rgba(10,10,11,0.85) 100%)",
        }}
      />

      <div
        data-hero-shell
        className="relative z-10 grid min-h-[100dvh] grid-rows-[auto_1fr_auto] px-6 pt-32 pb-12 md:px-10 lg:px-16 xl:px-24"
      >
        {/* Top: eyebrow */}
        <div data-hero-eyebrow className="font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
          Applied Metallurgical Corp.
          <span className="ml-3 text-graphite">/ Gilmer, Texas</span>
        </div>

        {/* Middle: headline + body */}
        <div className="grid grid-cols-12 gap-y-10 self-end pb-12 lg:gap-x-16">
          <h1
            data-hero-headline
            className="col-span-12 font-sans font-black leading-[0.92] tracking-[-0.045em] lg:col-span-9"
            style={{ fontSize: "clamp(2.75rem, 8vw, 116px)" }}
          >
            <span className="block">[PENDING JOSH&nbsp;1]</span>
            <span className="block text-pour">Engineered castings.</span>
            <span className="block">Pour to ship.</span>
          </h1>

          <div className="col-span-12 max-w-[40ch] self-end lg:col-span-3 lg:pb-3">
            <div data-hero-rule className="mb-5 h-px w-24 bg-pour" />
            <p data-hero-body className="text-base leading-relaxed text-cast">
              Cast iron and ductile iron components, 10&nbsp;to 1,000&nbsp;lbs. V-process zero-draft sand casting, 3D-printed sand tooling, in-house CNC machining.
            </p>
          </div>
        </div>

        {/* Bottom: stats / meta strip */}
        <div
          data-hero-meta
          className="grid grid-cols-2 border-t border-mill/60 pt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-graphite md:grid-cols-4"
        >
          <div>
            <div className="text-pour mb-1">As-cast tolerance</div>
            <div className="text-paper">±0.030"–0.125"</div>
          </div>
          <div>
            <div className="text-pour mb-1">Machined tolerance</div>
            <div className="text-paper">±0.001"–0.005"</div>
          </div>
          <div>
            <div className="text-pour mb-1">Pour weight range</div>
            <div className="text-paper">10–1,000 lbs</div>
          </div>
          <div>
            <div className="text-pour mb-1">Heritage</div>
            <div className="text-paper">[PENDING JOSH&nbsp;2]</div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HERO_MEDIA } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

const ensurePlay = (v: HTMLVideoElement | null) => {
  if (!v) return;
  const tryPlay = () => {
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };
  tryPlay();
  v.addEventListener("loadedmetadata", tryPlay, { once: true });
  v.addEventListener("canplay", tryPlay, { once: true });
};

export function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ensurePlay(v1Ref.current);
    ensurePlay(v2Ref.current);
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set("[data-v1-eyebrow]", { opacity: 0, y: 12 });
      gsap.set("[data-v1-headline] > span", { opacity: 0, y: 36 });
      gsap.set("[data-v1-body]", { opacity: 0, y: 14 });
      gsap.set("[data-v1-meta] > *", { opacity: 0, y: 14 });
      gsap.set("[data-v1-scrollcue]", { opacity: 0 });
      gsap.set("[data-v2-frame]", { opacity: 0, y: 24 });

      const intro = gsap.timeline();
      intro
        .to("[data-v1-eyebrow]", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          "[data-v1-headline] > span",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          "[data-v1-body], [data-v1-meta] > *",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          "[data-v1-scrollcue]",
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );

      gsap.to("[data-v1-scrollcue-arrow]", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          pin: true,
          scrub: 1.0,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power2.inOut" },
      });

      tl.fromTo(
        v1Ref.current,
        { scale: 1, opacity: 1, filter: "brightness(0.85)" },
        { scale: 2.6, opacity: 0, filter: "brightness(1.1)" },
        0
      );

      tl.fromTo(
        v2Ref.current,
        { scale: 0.82, opacity: 0, filter: "brightness(0.7)" },
        { scale: 1, opacity: 1, filter: "brightness(0.95)" },
        0.35
      );

      tl.fromTo("[data-v1-overlay]", { opacity: 1 }, { opacity: 0 }, 0);

      tl.fromTo(
        ["[data-v1-eyebrow]", "[data-v1-body]"],
        { opacity: 1, y: 0 },
        { opacity: 0, y: -28 },
        0
      );
      tl.fromTo(
        "[data-v1-headline] > span",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -28, stagger: 0.04 },
        0
      );
      tl.fromTo(
        "[data-v1-meta] > *",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -28, stagger: 0.04 },
        0
      );
      tl.fromTo(
        "[data-v1-scrollcue]",
        { opacity: 1, y: 0 },
        { opacity: 0, y: -20 },
        0
      );

      tl.fromTo(
        "[data-v2-frame]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0 },
        0.65
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100dvh] overflow-hidden bg-foundry text-paper"
    >
      <video
        ref={v2Ref}
        src={HERO_MEDIA.v2.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transformOrigin: "center center", opacity: 0 }}
      />

      <video
        ref={v1Ref}
        src={HERO_MEDIA.v1.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transformOrigin: "center center" }}
      />

      <div
        data-v1-overlay
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 55%, rgba(232,93,44,0.10) 0%, rgba(10,10,11,0.0) 38%), linear-gradient(180deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.15) 22%, rgba(10,10,11,0.15) 60%, rgba(10,10,11,0.85) 100%)",
        }}
      />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] px-6 pt-32 pb-12 md:px-10 lg:px-16 xl:px-24">
        <div
          data-v1-eyebrow
          className="font-mono text-[11px] tracking-[0.32em] uppercase text-pour"
        >
          Applied Metallurgical Corp.
          <span className="ml-3 text-steel">/ Gilmer, Texas</span>
        </div>

        <div className="grid grid-cols-12 gap-y-10 self-end pb-16 lg:gap-x-16">
          <h1
            data-v1-headline
            className="col-span-12 font-sans font-black leading-[0.92] tracking-[-0.045em] lg:col-span-9"
            style={{ fontSize: "clamp(2.75rem, 8vw, 116px)" }}
          >
            <span className="block">Cast iron and steel.</span>
            <span className="block text-pour">Pour to part.</span>
            <span className="block">No hand-offs.</span>
          </h1>

          <div className="col-span-12 max-w-[40ch] self-end lg:col-span-3 lg:pb-3">
            <div className="mb-5 h-px w-24 bg-pour" />
            <p
              data-v1-body
              className="text-base leading-relaxed text-cast"
            >
              16-person foundry in East Texas. V-process zero-draft sand
              casting, 3D-printed sand tooling, in-house horizontal CNC.
              Engineered with you, not for you.
            </p>
          </div>
        </div>

        <div
          data-v1-meta
          className="grid grid-cols-2 border-t border-mill/60 pt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-steel md:grid-cols-4"
        >
          <div>
            <div className="text-pour mb-1">As-cast tolerance</div>
            <div className="text-paper">±0.030&quot;–0.125&quot;</div>
          </div>
          <div>
            <div className="text-pour mb-1">Machined tolerance</div>
            <div className="text-paper">±0.001&quot;–0.005&quot;</div>
          </div>
          <div>
            <div className="text-pour mb-1">Pour weight</div>
            <div className="text-paper">10–1,000 lbs</div>
          </div>
          <div>
            <div className="text-pour mb-1">Heritage</div>
            <div className="text-paper">Since 1912</div>
          </div>
        </div>
      </div>

      <div
        data-v1-scrollcue
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.32em] uppercase text-paper/70"
      >
        <span>Scroll inside</span>
        <svg
          data-v1-scrollcue-arrow
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <div
        data-v2-frame
        className="absolute bottom-12 left-6 right-6 z-10 flex flex-col gap-3 md:left-10 md:right-auto md:max-w-[42ch] lg:left-16"
      >
        <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
          Inside the cell
        </div>
        <p className="text-lg leading-snug text-paper md:text-xl">
          One supplier across casting and machining. Engineering judgment at
          every gate, so the second pour matches the first.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LOGO } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/brand/logo-intro.mp4";
const TEXT_HALO = "0 1px 2px rgba(0,0,0,0.55), 0 0 14px rgba(255,255,255,0.85)";

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      tl.to("[data-cin-svg]", { opacity: 1, duration: 0.05 }, 0)
        .to("[data-cin-video]", { opacity: 0, duration: 0.05 }, 0)
        .to(
          ["[data-cin-badge]", "[data-cin-cue]"],
          { opacity: 0, duration: 0.05 },
          0
        );

      tl.to("[data-cin-svg]", { scale: 6, duration: 0.5 }, 0.05);

      tl.to("[data-cin-svg]", { opacity: 0, duration: 0.1 }, 0.5);

      tl.from(
        "[data-cin-headline] > span",
        {
          y: 90,
          opacity: 0,
          stagger: 0.08,
          duration: 0.18,
          ease: "power3.out",
        },
        0.55
      ).from(
        "[data-cin-intro]",
        {
          y: 50,
          opacity: 0,
          duration: 0.15,
          ease: "power2.out",
        },
        0.78
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-paper"
    >
      <video
        data-cin-video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover will-change-[opacity]"
      />

      <div
        data-cin-svg
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src={LOGO.src}
          alt={LOGO.alt}
          width={LOGO.width}
          height={LOGO.height}
          priority
          className="h-72 w-auto md:h-96 lg:h-[28rem] text-ink dark:text-paper"
          style={{
            filter:
              "drop-shadow(0 0 40px rgba(224, 122, 51, 0.55)) drop-shadow(0 0 96px rgba(255, 142, 71, 0.28)) drop-shadow(0 6px 16px rgba(15, 15, 18, 0.22))",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto max-w-5xl px-6">
        <h1
          data-cin-headline
          className="font-serif text-center font-medium leading-[0.95] tracking-[-0.02em] text-ink"
          style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
        >
          <span className="block">Cast iron and steel,</span>
          <span className="block">machined in Gilmer.</span>
        </h1>
        <p
          data-cin-intro
          className="mx-auto mt-8 max-w-[60ch] text-center text-[19px] leading-relaxed text-ink md:text-[21px]"
        >
          Applied Metallurgical Corp. is a sixteen-person ferrous foundry and
          CNC machine shop in Gilmer, Texas. Cast iron and steel, ten to one
          thousand pounds.
        </p>
      </div>

      <div
        data-cin-badge
        className="absolute bottom-12 left-6 md:bottom-16 md:left-10 lg:left-16"
      >
        <div
          className="mb-1 font-mono text-[12px] tracking-[0.22em] uppercase text-ink"
          style={{ textShadow: TEXT_HALO }}
        >
          Est. lineage
        </div>
        <div
          className="font-serif text-4xl font-semibold tracking-tight text-ink"
          style={{ textShadow: TEXT_HALO }}
        >
          1912
        </div>
      </div>

      <div
        data-cin-cue
        className="absolute bottom-12 right-6 md:bottom-16 md:right-10 lg:right-16"
      >
        <div
          className="font-mono text-[12px] tracking-[0.22em] uppercase text-ink"
          style={{ textShadow: TEXT_HALO }}
        >
          ↓&nbsp; Scroll to explore
        </div>
      </div>
    </section>
  );
}

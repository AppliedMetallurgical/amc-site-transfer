"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LOGO } from "@/lib/media";

const SESSION_KEY = "amc-intro-seen";

export function LogoIntro() {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* no-op */
    }
    if (!seen) {
      setShouldPlay(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* no-op */
      }
      document.body.classList.add("intro-lock");
    }
  }, []);

  useGSAP(
    () => {
      if (!shouldPlay || !overlayRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove("intro-lock");
          setDone(true);
        },
      });

      tl.set("[data-intro-pour]", { scaleY: 0, transformOrigin: "top center" })
        .set("[data-intro-glow]", { opacity: 0, scale: 0.3 })
        .set("[data-intro-logo]", {
          clipPath: "inset(0 0 100% 0)",
          scale: 0.55,
          opacity: 0,
        })
        // Pour drips down from above
        .to("[data-intro-pour]", {
          scaleY: 1,
          duration: 1.05,
          ease: "power3.in",
        })
        // Splash glow at logo position
        .to(
          "[data-intro-glow]",
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.15"
        )
        // Logo reveals top-down (filled by the pour)
        .to(
          "[data-intro-logo]",
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.35"
        )
        // Logo scales up to final
        .to("[data-intro-logo]", {
          scale: 1,
          duration: 0.75,
          ease: "expo.out",
        })
        // Glow + pour fade
        .to(
          ["[data-intro-pour]", "[data-intro-glow]"],
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.in",
          },
          "-=0.15"
        )
        // Overlay fades away
        .to(
          overlayRef.current,
          { opacity: 0, duration: 0.55, ease: "power2.inOut" },
          "-=0.2"
        );

      return () => {
        tl.kill();
      };
    },
    { dependencies: [shouldPlay], scope: overlayRef }
  );

  function skip() {
    document.body.classList.remove("intro-lock");
    setDone(true);
  }

  if (done || !shouldPlay) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      aria-hidden
    >
      {/* Molten pour drip from top */}
      <div
        data-intro-pour
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[55vh] w-[4px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #FF8E47 12%, #E07A33 50%, #B5612C 100%)",
          boxShadow:
            "0 0 36px 8px rgba(224, 122, 51, 0.45), 0 0 96px 24px rgba(255, 142, 71, 0.18)",
          filter: "blur(0.4px)",
        }}
      />

      {/* Splash glow at logo position */}
      <div
        data-intro-glow
        className="pointer-events-none absolute"
        style={{
          width: "640px",
          height: "640px",
          maxWidth: "70vw",
          maxHeight: "70vw",
          background:
            "radial-gradient(circle, rgba(255, 142, 71, 0.55) 0%, rgba(224, 122, 51, 0.25) 30%, transparent 60%)",
        }}
      />

      {/* Logo (revealed by the pour) */}
      <div data-intro-logo className="relative z-10">
        <Image
          src={LOGO.src}
          alt={LOGO.alt}
          width={LOGO.width}
          height={LOGO.height}
          priority
          className="h-56 w-auto md:h-72 lg:h-[22rem] dark:invert"
        />
      </div>

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-8 right-8 font-mono text-[12px] tracking-[0.22em] uppercase text-graphite transition-colors hover:text-ink"
      >
        Skip
      </button>
    </div>
  );
}

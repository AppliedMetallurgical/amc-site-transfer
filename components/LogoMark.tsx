"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LOGO } from "@/lib/media";

const SESSION_KEY = "amc-logo-poured";

export function LogoMark() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animating, setAnimating] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let poured = false;
    try {
      poured = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* no-op */
    }
    if (!poured) {
      setShouldAnimate(true);
      setAnimating(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* no-op */
      }
    }
  }, []);

  useGSAP(
    () => {
      if (!shouldAnimate || !wrapRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => setAnimating(false),
      });

      tl.set("[data-pour-stream]", {
        scaleY: 0,
        transformOrigin: "top center",
        opacity: 1,
      })
        .set("[data-pour-glow]", { opacity: 0, scale: 0.3 })
        .set("[data-pour-logo]", { clipPath: "inset(0 0 100% 0)" })
        .to("[data-pour-stream]", {
          scaleY: 1,
          duration: 0.7,
          ease: "power3.in",
        })
        .to(
          "[data-pour-glow]",
          { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
          "-=0.1"
        )
        .to(
          "[data-pour-logo]",
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          ["[data-pour-stream]", "[data-pour-glow]"],
          { opacity: 0, duration: 0.5, ease: "power2.in" },
          "-=0.15"
        );

      return () => {
        tl.kill();
      };
    },
    { dependencies: [shouldAnimate], scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className="relative">
      {animating && (
        <>
          <div
            data-pour-stream
            aria-hidden
            className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2"
            style={{
              bottom: "calc(100% + 0px)",
              height: "260px",
              width: "3px",
              background:
                "linear-gradient(to bottom, transparent 0%, #FF8E47 8%, #E07A33 50%, #B5612C 100%)",
              boxShadow:
                "0 0 16px 3px rgba(224, 122, 51, 0.55), 0 0 32px 8px rgba(255, 142, 71, 0.25)",
              filter: "blur(0.3px)",
            }}
          />
          <div
            data-pour-glow
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "180px",
              height: "180px",
              background:
                "radial-gradient(circle, rgba(255, 142, 71, 0.55) 0%, rgba(224, 122, 51, 0.2) 35%, transparent 65%)",
            }}
          />
        </>
      )}
      <div data-pour-logo className="relative z-[5]">
        <Image
          src={LOGO.src}
          alt={LOGO.alt}
          width={LOGO.width}
          height={LOGO.height}
          priority
          className="h-16 w-auto md:h-20 lg:h-24"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </div>
  );
}

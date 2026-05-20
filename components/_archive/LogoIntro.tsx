"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { LOGO } from "@/lib/media";

const SESSION_KEY = "amc-intro-seen";
const VIDEO_SRC = "/brand/logo-intro.mp4";

export function LogoIntro() {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [done, setDone] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  function finish() {
    document.body.classList.remove("intro-lock");
    setDone(true);
  }

  // Video path: fade out overlay after video plays
  useEffect(() => {
    if (!shouldPlay || !videoOk) return;
    const video = videoRef.current;
    if (!video) return;

    const onEnd = () => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
        onComplete: finish,
      });
    };

    video.addEventListener("ended", onEnd);
    return () => video.removeEventListener("ended", onEnd);
  }, [shouldPlay, videoOk]);

  // CSS fallback path: original molten-pour GSAP timeline
  useGSAP(
    () => {
      if (!shouldPlay || videoOk || !overlayRef.current) return;

      const tl = gsap.timeline({ onComplete: finish });

      tl.set("[data-intro-pour]", { scaleY: 0, transformOrigin: "top center" })
        .set("[data-intro-glow]", { opacity: 0, scale: 0.3 })
        .set("[data-intro-logo]", {
          clipPath: "inset(0 0 100% 0)",
          scale: 0.55,
          opacity: 0,
        })
        .to("[data-intro-pour]", {
          scaleY: 1,
          duration: 1.05,
          ease: "power3.in",
        })
        .to(
          "[data-intro-glow]",
          { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
          "-=0.15"
        )
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
        .to("[data-intro-logo]", {
          scale: 1,
          duration: 0.75,
          ease: "expo.out",
        })
        .to(
          ["[data-intro-pour]", "[data-intro-glow]"],
          { opacity: 0, duration: 0.55, ease: "power2.in" },
          "-=0.15"
        )
        .to(
          overlayRef.current,
          { opacity: 0, duration: 0.55, ease: "power2.inOut" },
          "-=0.2"
        );

      return () => {
        tl.kill();
      };
    },
    { dependencies: [shouldPlay, videoOk], scope: overlayRef }
  );

  if (done || !shouldPlay) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      aria-hidden
    >
      {videoOk ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          onError={() => setVideoOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
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
        </>
      )}

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-8 right-8 z-10 font-mono text-[12px] tracking-[0.22em] uppercase text-graphite transition-colors hover:text-ink"
      >
        Skip
      </button>
    </div>
  );
}

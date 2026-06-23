"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LOGO } from "@/lib/media";

const INTRO_VIDEO_ALPHA_SRC = "/brand/amc-logo-higgsfield-kling30-letter-alpha-clean.webm?v=nav-kling30-letter-alpha-20260623";
const INTRO_VIDEO_FALLBACK_SRC = "/brand/amc-logo-higgsfield-kling30-5s.mp4?v=nav-kling30-20260623";
const INTRO_DURATION_MS = 5300;
const LOGO_FRAME_CLASS = "block h-12 w-[86px] shrink-0 md:h-14 md:w-[100px] lg:h-16 lg:w-[114px]";
const LOGO_MEDIA_CLASS = "h-full w-full object-contain";

export function LogoMark() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const timer = window.setTimeout(() => {
        setShowIntro(false);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  function finishIntro() {
    setShowIntro(false);
  }

  if (showIntro) {
    return (
      <span className={LOGO_FRAME_CLASS}>
        <video
          muted
          playsInline
          autoPlay
          preload="auto"
          aria-label={LOGO.alt}
          onEnded={finishIntro}
          onError={finishIntro}
          className={LOGO_MEDIA_CLASS}
        >
          <source src={INTRO_VIDEO_ALPHA_SRC} type="video/webm" />
          <source src={INTRO_VIDEO_FALLBACK_SRC} type="video/mp4" />
        </video>
      </span>
    );
  }

  return (
    <span className={LOGO_FRAME_CLASS}>
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        priority
        className={LOGO_MEDIA_CLASS}
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </span>
  );
}

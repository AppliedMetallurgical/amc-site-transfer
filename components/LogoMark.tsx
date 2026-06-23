"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LOGO } from "@/lib/media";

const SESSION_KEY = "amc-nav-logo-intro-played";

export function LogoMark() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadyPlayed = false;

    try {
      alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* no-op */
    }

    if (reduceMotion || alreadyPlayed) return;

    const frame = window.requestAnimationFrame(() => setShowIntro(true));
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* no-op */
    }

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (showIntro) {
    return (
      <video
        src="/brand/logo-intro.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-label={LOGO.alt}
        onEnded={() => setShowIntro(false)}
        onError={() => setShowIntro(false)}
        className="block h-10 w-auto object-contain md:h-12 lg:h-14"
      />
    );
  }

  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority
      className="h-10 w-auto md:h-12 lg:h-14"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    if (window.matchMedia("(pointer: coarse)").matches) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    document.documentElement.classList.add("cursor-none-app");

    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3" });
    const ringXTo = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const ringYTo = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    let isHovering = false;
    const setHover = (hover: boolean) => {
      if (hover === isHovering) return;
      isHovering = hover;
      gsap.to(ring, {
        scale: hover ? 2.2 : 1,
        opacity: hover ? 0.45 : 1,
        borderColor: hover ? "var(--color-pour)" : "var(--color-paper)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: hover ? 0 : 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onMove = (e: MouseEvent) => {
      dotXTo(e.clientX);
      dotYTo(e.clientY);
      ringXTo(e.clientX);
      ringYTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a, button, [data-cursor-hover], input, textarea, select, [role='button']"
      );
      setHover(isInteractive);
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onEnter = () => {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
      gsap.to(ring, { opacity: isHovering ? 0.45 : 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-none-app");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
      >
        <div
          className="h-8 w-8 rounded-full border"
          style={{ borderColor: "var(--color-paper)" }}
        />
      </div>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--color-paper)" }}
        />
      </div>
    </>
  );
}

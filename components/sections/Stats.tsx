"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "1912", label: "Lineage to Universal Electric Foundry, Chicago" },
  { value: "16", label: "People on the floor in Gilmer, Texas" },
  { value: "10–1,000", unit: "lbs", label: "Pour weight range, cast iron and steel" },
  { value: "±0.001", unit: "in", label: "Machined tolerance, in-house horizontal CNC" },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set("[data-stat]", { opacity: 0, y: 28 });

      gsap.to("[data-stat]", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper py-32 px-6 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              02 · By the numbers
            </div>
            <div className="mt-2 h-px w-16 bg-ink/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} data-stat className="border-t border-rule pt-5">
              <div
                className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 72px)",
                }}
              >
                {s.value}
                {s.unit && (
                  <span className="ml-1 font-sans text-base font-medium tracking-normal text-graphite">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-3 max-w-[28ch] text-[16px] font-medium leading-relaxed text-ink">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

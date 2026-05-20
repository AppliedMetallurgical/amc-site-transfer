"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "±0.001\"", label: "Machined tolerance — in-house horizontal CNC" },
  { value: "1,000 lb", label: "Maximum pour weight — cast iron and steel" },
  { value: "112", suffix: "years", label: "Continuous foundry lineage to 1912" },
  { value: "1", suffix: "shop", label: "Design through inspection, no handoffs" },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from("[data-stat-meta]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-stat-card]", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
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
      className="relative bg-iron-deep px-6 py-32 text-light md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div data-stat-meta className="mb-16 max-w-[700px]">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember-bright">
            By the numbers
          </div>
          <h2
            className="mt-6 font-sans font-black leading-[0.98] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 56px)" }}
          >
            Built like the parts we pour.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              data-stat-card
              className="border-t border-light/15 pt-6"
            >
              <div className="flex items-baseline gap-3">
                <div
                  className="font-sans font-black leading-[1] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.75rem, 5vw, 76px)" }}
                >
                  {s.value}
                </div>
                {s.suffix && (
                  <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-light/55">
                    {s.suffix}
                  </div>
                )}
              </div>
              <div className="mt-5 max-w-[28ch] text-[15px] leading-relaxed text-light/75">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

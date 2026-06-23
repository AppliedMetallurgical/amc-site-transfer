"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PART_IMAGE } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

export function FeatureCard() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        "[data-fc-photo]",
        { y: "-6%" },
        {
          y: "6%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        }
      );

      gsap.from("[data-fc-content] > *", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-paper px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="relative grid grid-cols-1 gap-0 overflow-hidden border border-rule/40 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-iron-deep lg:aspect-auto lg:min-h-[600px]">
            <div
              data-fc-photo
              className="absolute -inset-y-8 inset-x-0 will-change-transform"
            >
              <Image
                src={PART_IMAGE.src}
                alt={PART_IMAGE.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div
            data-fc-content
            className="flex flex-col justify-center bg-paper px-8 py-16 md:px-12 md:py-20 lg:px-16"
          >
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              What we make
            </div>

            <h2
              className="mt-6 font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 56px)" }}
            >
              Parts that perform in production.
            </h2>

            <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-ink/80">
              Cast iron and ductile iron components for medical equipment, heavy
              industrial machinery, and OEM transportation. From 10-lb
              prototypes to 1,000-lb structural castings — engineered, poured,
              and machined under one roof.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/capabilities"
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3 font-sans text-[13px] font-semibold tracking-[0.04em] text-paper transition-colors hover:bg-ember"
              >
                Capabilities
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/industries"
                className="group inline-flex items-center gap-3 border border-ink/30 px-6 py-3 font-sans text-[13px] font-semibold tracking-[0.04em] text-ink transition-colors hover:border-ember hover:text-ember"
              >
                Industries
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

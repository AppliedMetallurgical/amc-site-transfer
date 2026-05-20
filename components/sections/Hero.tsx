"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.set("[data-h-eyebrow]", { opacity: 0, y: 12 });
      gsap.set("[data-h-line]", { opacity: 0, y: 60 });
      gsap.set("[data-h-sub]", { opacity: 0, y: 16 });
      gsap.set("[data-h-cta]", { opacity: 0, y: 16 });
      gsap.set("[data-h-foot]", { opacity: 0, y: 8 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to("[data-h-eyebrow]", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          "[data-h-line]",
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          "[data-h-sub]",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          "[data-h-cta]",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          "[data-h-foot]",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-iron-deep text-light"
    >
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-pour.jpg"
          alt="Molten iron poured into a sand mold"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.4) 35%, rgba(10,10,12,0.65) 75%, rgba(10,10,12,0.9) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(224, 122, 51, 0.18) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end gap-10 px-6 pt-44 pb-16 md:px-10 lg:px-16">
        <div className="max-w-[920px]">
          <div
            data-h-eyebrow
            className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember-bright"
          >
            Foundry · Gilmer, Texas
          </div>

          <h1
            className="mt-6 font-sans font-black leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 9vw, 140px)" }}
          >
            <span data-h-line className="block">
              Cast iron and steel.
            </span>
            <span data-h-line className="block text-ember-bright">
              Engineered to spec.
            </span>
          </h1>

          <p
            data-h-sub
            className="mt-10 max-w-[58ch] text-[18px] leading-relaxed text-light/85 md:text-[20px]"
          >
            V-process sand casting and in-house CNC machining. Design review
            through final inspection under one roof.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              data-h-cta
              href="/rfq"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-light px-7 py-4 font-sans text-[14px] font-semibold tracking-[0.04em] text-dark transition-colors duration-300 hover:text-light"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-ember-bright transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10">Send us your print</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              data-h-cta
              href="/capabilities"
              className="group inline-flex items-center gap-3 border-b border-light/40 pb-1 font-sans text-[14px] font-medium tracking-[0.04em] text-light/90 transition-colors hover:border-ember-bright hover:text-ember-bright"
            >
              What we make
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-light/15 pt-8">
          <div data-h-foot className="font-mono text-[11px] tracking-[0.22em] uppercase text-light/60">
            Founded 1912 · Universal Electric Foundry, Chicago
          </div>
          <div data-h-foot className="font-mono text-[11px] tracking-[0.22em] uppercase text-light/60">
            Pouring today · Gilmer, Texas
          </div>
        </div>
      </div>
    </section>
  );
}

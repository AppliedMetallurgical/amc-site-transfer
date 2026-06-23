"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FooterCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from("[data-foot-h] > span", {
        opacity: 0,
        y: 56,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-foot-cta]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-foot-meta] > div", {
        opacity: 0,
        y: 14,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "[data-foot-meta]",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-iron-deep text-light"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(224, 122, 51, 0.16) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember-bright">
              Start an RFQ
            </div>
            <h2
              data-foot-h
              className="mt-8 font-sans font-black leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 8vw, 132px)" }}
            >
              <span className="block">Send us</span>
              <span className="block">your print.</span>
            </h2>
            <p className="mt-8 max-w-[56ch] text-[18px] leading-relaxed text-light/80 md:text-[19px]">
              STEP, IGES, SolidWorks, or PDF. We&rsquo;ll review the geometry,
              flag the manufacturability issues, and quote it back.
            </p>
          </div>

          <div
            data-foot-cta
            className="col-span-12 flex flex-wrap items-end gap-4 self-end lg:col-span-4 lg:justify-end"
          >
            <Link
              href="/rfq"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-light px-7 py-4 font-sans text-[14px] font-semibold tracking-[0.04em] text-dark transition-colors duration-300 hover:text-light"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-ember-bright transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="relative z-10">Start an RFQ</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div
          data-foot-meta
          className="mt-24 grid grid-cols-1 gap-y-8 border-t border-light/15 pt-10 md:grid-cols-3"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-light/55 mb-3">
              Contact
            </div>
            <a
              href="mailto:sales@appliedmetallurgical.com"
              className="text-[15px] text-light/95 transition-colors hover:text-ember-bright"
            >
              sales@appliedmetallurgical.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-light/55 mb-3">
              Located
            </div>
            <div className="text-[15px] text-light/95">Gilmer, Texas</div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-light/55 mb-3">
              Founded
            </div>
            <div className="text-[15px] text-light/95">
              Founded in Gilmer, Texas
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-light/10 pt-6 text-[11px] tracking-[0.22em] uppercase text-light/45 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Applied Metallurgical Corp.</div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Cast iron · Ductile iron · V-process · 3D-printed tooling · CNC</span>
            <Link href="/privacy" className="underline underline-offset-4 hover:text-ember-bright">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

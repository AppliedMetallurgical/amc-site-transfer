"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from("[data-mf-meta]", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from("[data-mf-quote] > span", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-mf-attr]", {
        opacity: 0,
        y: 12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      gsap.from("[data-mf-rule]", {
        scaleX: 0,
        duration: 1.2,
        ease: "power3.out",
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
      className="relative border-b border-rule/40 bg-paper px-6 py-40 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          data-mf-rule
          className="mx-auto h-px w-full origin-left bg-ink/15"
        />

        <div className="mx-auto mt-24 max-w-[1100px] text-center">
          <div
            data-mf-meta
            className="font-mono text-[11px] tracking-[0.28em] uppercase text-graphite"
          >
            On the shop floor
          </div>

          <blockquote
            data-mf-quote
            className="mt-10 font-sans font-medium leading-[1.05] tracking-[-0.025em] text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 76px)" }}
          >
            <span className="block">We bridge the gap between</span>
            <span className="block">engineering intent and</span>
            <span className="block text-ember">manufacturable reality.</span>
          </blockquote>

          <div data-mf-attr className="mt-12 flex flex-col items-center gap-3">
            <div className="h-px w-10 bg-ember" />
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-graphite">
              Bret Hartman · President
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              t: "Engineered first",
              b: "Geometry, gating, and machining strategy reviewed before any tooling spend. Print arrives, engineering responds — not a quote bot.",
            },
            {
              t: "Vertically integrated",
              b: "Design review, pattern, pour, machine, inspect — one shop, one schedule. No handoffs, no waiting on a subcontractor queue.",
            },
            {
              t: "Spec-locked",
              b: "±0.001″ machined tolerance. Material certs and dimensional reports with every shipment. The part performs because the process produced it that way.",
            },
          ].map((p) => (
            <div key={p.t} className="border-t border-ink/15 pt-6">
              <h3 className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-ink">
                {p.t}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-ink/75">
                {p.b}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/process"
            className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-sans text-[14px] font-medium tracking-[0.04em] text-ink transition-colors hover:border-ember hover:text-ember"
          >
            See the process
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

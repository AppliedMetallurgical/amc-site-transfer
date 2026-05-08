"use client";

import Link from "next/link";

const CAPABILITIES = [
  {
    eyebrow: "01 / Casting",
    title: "V-process zero-draft",
    body: "Cast iron and steel, 10 to 1,000 lbs. 3D-printed sand tooling for short lead times on complex geometry.",
    href: "/capabilities/casting",
  },
  {
    eyebrow: "02 / Machining",
    title: "In-house horizontal CNC",
    body: "Mastercam, Fanuc and Mazak controls. Tolerances ±0.001\"–0.005\" machined, integrated with our casting work.",
    href: "/capabilities/cnc-machining",
  },
  {
    eyebrow: "03 / Engineering",
    title: "DFM and gating strategy",
    body: "SolidWorks-led DFM consulting. We engineer the part with you so it works in production, not just on paper.",
    href: "/capabilities/engineering",
  },
  {
    eyebrow: "04 / Prototyping",
    title: "Rapid iteration",
    body: "3D-printed sand molds compress prototyping cycles. Go from concept to first pour without hard tooling.",
    href: "/capabilities/rapid-prototyping",
  },
];

export function CapabilitiesPreview() {
  return (
    <section className="relative bg-foundry py-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Capabilities
            </div>
            <h2 className="max-w-[20ch] font-sans text-4xl font-black leading-[1.0] tracking-[-0.03em] text-paper md:text-6xl">
              Engineering partnership, not a vendor relationship.
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors hover:text-pour"
          >
            All capabilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-mill/50 md:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.href}
              href={cap.href}
              className="group relative bg-foundry p-10 transition-colors hover:bg-iron"
            >
              <div className="mb-6 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                {cap.eyebrow}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-paper">{cap.title}</h3>
              <p className="max-w-[44ch] text-sm leading-relaxed text-cast">{cap.body}</p>
              <div className="mt-8 flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors group-hover:text-pour">
                Read more
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

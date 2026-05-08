import Link from "next/link";

const CAPABILITIES = [
  {
    eyebrow: "01 / Casting",
    title: "V-process zero-draft sand casting",
    body: "Cast iron and steel, 10 to 1,000 lbs. 3D-printed sand tooling for short lead times on complex geometry. No draft angles, near-net pours, repeatable surface finish.",
    href: "/capabilities/casting",
  },
  {
    eyebrow: "02 / Machining",
    title: "In-house horizontal CNC",
    body: "Mastercam programming, Fanuc and Mazak controls. Tolerances ±0.001\"–0.005\" machined, integrated with our casting cell so a part finishes under one roof.",
    href: "/capabilities/cnc-machining",
  },
  {
    eyebrow: "03 / Engineering",
    title: "DFM and gating strategy",
    body: "SolidWorks-led DFM consulting. Gating, metallurgy, geometry — engineered with you before a dollar is spent on tooling.",
    href: "/capabilities/engineering",
  },
  {
    eyebrow: "04 / Prototyping",
    title: "Rapid iteration",
    body: "3D-printed sand molds compress prototyping cycles. Concept to first pour without committing to hard tooling.",
    href: "/capabilities/rapid-prototyping",
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Capabilities
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              From poured iron to a finished, machined part — under one roof.
            </h1>
          </div>
          <p className="col-span-12 max-w-[52ch] self-end text-base leading-relaxed text-cast lg:col-span-4">
            We engineer the part with you. Casting and machining live in the
            same building, run by the same team, scheduled against the same
            calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-mill/50 md:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.href}
              href={cap.href}
              className="group bg-foundry p-12 transition-colors hover:bg-iron"
            >
              <div className="mb-6 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                {cap.eyebrow}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-paper">
                {cap.title}
              </h2>
              <p className="max-w-[50ch] text-base leading-relaxed text-cast">
                {cap.body}
              </p>
              <div className="mt-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors group-hover:text-pour">
                Read more
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

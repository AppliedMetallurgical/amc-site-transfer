import Link from "next/link";

export const metadata = {
  title: "Capabilities — Casting, CNC, DFM, Pattern Development",
  description:
    "Vertically integrated cast iron and steel foundry: V-process sand casting, in-house CNC machining, SolidWorks DFM, Mastercam programming, 3D-printed pattern tooling. ±0.001” machined tolerance.",
};

const CAPABILITIES = [
  {
    eyebrow: "01 / Design",
    title: "Casting design + DFM consulting",
    body: "SolidWorks-led manufacturability analysis before any tooling spend. Geometry adjusted for moldability, solidification behavior, and downstream machining. We catch the problems on the screen, not on the floor.",
    tags: ["SolidWorks", "DFM review", "Concurrent engineering"],
  },
  {
    eyebrow: "02 / Tooling",
    title: "3D-printed pattern development",
    body: "Rapid prototype patterns produced in-house. Pattern iteration in days instead of weeks. Supports low-to-mid volume production and lets customers validate geometry before committing to hard tooling.",
    tags: ["Additive patterns", "Rapid prototyping", "Low-volume flexibility"],
  },
  {
    eyebrow: "03 / Cast",
    title: "Sand casting — including V-process",
    body: "Cast iron and steel, 10 to 1,000 lbs. Engineered gating and risering systems control metal flow and solidification. Melt chemistry and pour parameters are optimized per part to minimize inclusions, porosity, and shrink.",
    tags: ["V-process", "Grey iron", "Ductile iron", "Steel"],
  },
  {
    eyebrow: "04 / Process engineering",
    title: "Gating, risering, defect reduction",
    body: "Gating design, risering layout, and controlled solidification strategy reduce scrap and rework. Root-cause analysis on inclusions, porosity, and surface defects — solved at the process level, not papered over with downstream fixes.",
    tags: ["Gating + risering", "Melt chemistry", "Defect analysis"],
  },
  {
    eyebrow: "05 / Machine",
    title: "In-house horizontal CNC",
    body: "Mastercam toolpath programming. Fanuc and Mazak controls. Critical features held to ±0.001”–0.005”. Machining strategy is integrated early so cast geometry supports the finished tolerance, not just the rough shape.",
    tags: ["Mastercam", "Fanuc", "Mazak", "±0.001”"],
  },
  {
    eyebrow: "06 / Validate",
    title: "Inspection + simulation",
    body: "Process and finished-part validation through simulation and real-world testing. Coordinated departmental scheduling keeps inspection on the same critical path as production, so problems surface before delivery, not after.",
    tags: ["Simulation", "First-article inspection", "Process validation"],
  },
];

const TOLERANCES = [
  { label: "As-cast tolerance", value: "±0.030” – 0.125”", note: "Geometry and section dependent" },
  { label: "Machined tolerance", value: "±0.001” – 0.005”", note: "Critical features, in-house CNC" },
  { label: "Pour weight range", value: "10 – 1,000 lbs", note: "Cast iron and steel, ferrous only" },
  { label: "Volume sweet spot", value: "Low – mid", note: "Production runs and prototyping" },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              Capabilities
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
            >
              Concept to finished component.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              Vertically integrated from design review through final inspection.
              Six disciplines, one shop, one accountability line.
            </p>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <article key={i} className="border-t border-rule pt-6">
              <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
                {c.eyebrow}
              </div>
              <h2
                className="mt-4 font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
              >
                {c.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink">
                {c.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-rule px-3 py-1 font-mono text-[11px] tracking-[0.16em] uppercase text-graphite"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Tolerances */}
        <section className="mt-32 border-t border-rule pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
                Tolerance strategy
              </div>
              <div className="mt-2 h-px w-16 bg-ink/40" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <p className="max-w-[60ch] text-[19px] leading-relaxed text-ink">
                We work with customers to define a tolerance strategy that
                balances cost against performance. As-cast features stay
                cost-efficient; critical features get the in-house CNC pass.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {TOLERANCES.map((t) => (
              <div key={t.label} className="border-t border-rule pt-5">
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
                  {t.label}
                </div>
                <div
                  className="mt-3 font-serif font-medium leading-[1] tracking-[-0.02em] text-ink"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 48px)" }}
                >
                  {t.value}
                </div>
                <div className="mt-2 max-w-[24ch] text-[15px] leading-relaxed text-ink-soft">
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-32 border-t border-rule pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-serif font-medium leading-[1.02] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 56px)" }}
              >
                Send us your print.
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink">
                STEP, IGES, SolidWorks, or PDF. We&rsquo;ll review the geometry,
                flag the manufacturability issues, and quote it back.
              </p>
            </div>
            <div className="col-span-12 self-end lg:col-span-4 lg:text-right">
              <Link
                href="/rfq"
                className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] tracking-[0.06em] text-paper hover:bg-iron"
              >
                Start an RFQ
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

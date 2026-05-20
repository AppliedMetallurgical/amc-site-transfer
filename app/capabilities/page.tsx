import Link from "next/link";

export const metadata = {
  title: "Capabilities — Casting, CNC, DFM, Pattern Development",
  description:
    "Vertically integrated cast iron and steel foundry: V-process sand casting, in-house CNC machining, SolidWorks DFM, Mastercam programming, 3D-printed pattern tooling. ±0.001” machined tolerance.",
};

const CAPABILITIES = [
  {
    eyebrow: "Design",
    title: "Casting design + DFM consulting",
    body: "SolidWorks-led manufacturability analysis before any tooling spend. Geometry adjusted for moldability, solidification behavior, and downstream machining. We catch the problems on the screen, not on the floor.",
    tags: ["SolidWorks", "DFM review", "Concurrent engineering"],
  },
  {
    eyebrow: "Tooling",
    title: "3D-printed pattern development",
    body: "Rapid prototype patterns produced in-house. Pattern iteration in days instead of weeks. Supports low-to-mid volume production and lets customers validate geometry before committing to hard tooling.",
    tags: ["Additive patterns", "Rapid prototyping", "Low-volume flexibility"],
  },
  {
    eyebrow: "Cast",
    title: "Sand casting — including V-process",
    body: "Cast iron and steel, 10 to 1,000 lbs. Engineered gating and risering systems control metal flow and solidification. Melt chemistry and pour parameters are optimized per part to minimize inclusions, porosity, and shrink.",
    tags: ["V-process", "Grey iron", "Ductile iron", "Steel"],
  },
  {
    eyebrow: "Process",
    title: "Gating, risering, defect reduction",
    body: "Gating design, risering layout, and controlled solidification strategy reduce scrap and rework. Root-cause analysis on inclusions, porosity, and surface defects — solved at the process level, not papered over with downstream fixes.",
    tags: ["Gating + risering", "Melt chemistry", "Defect analysis"],
  },
  {
    eyebrow: "Machine",
    title: "In-house horizontal CNC",
    body: "Mastercam toolpath programming. Fanuc and Mazak controls. Critical features held to ±0.001”–0.005”. Machining strategy is integrated early so cast geometry supports the finished tolerance, not just the rough shape.",
    tags: ["Mastercam", "Fanuc", "Mazak", "±0.001”"],
  },
  {
    eyebrow: "Validate",
    title: "Inspection + simulation",
    body: "Process and finished-part validation through simulation and real-world testing. Coordinated departmental scheduling keeps inspection on the same critical path as production, so problems surface before delivery, not after.",
    tags: ["Simulation", "First-article inspection", "Process validation"],
  },
];

const TOLERANCES = [
  { label: "As-cast tolerance", value: "±0.030″", note: "Geometry and section dependent" },
  { label: "Machined tolerance", value: "±0.001″", note: "Critical features, in-house CNC" },
  { label: "Pour weight", value: "1,000 lb", note: "Maximum, cast iron and steel" },
  { label: "Volume", value: "Low–mid", note: "Production runs and prototyping" },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Capabilities
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 124px)" }}
            >
              Concept to finished component.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[19px] leading-relaxed text-ink/80">
              Vertically integrated from design review through final inspection.
              Six disciplines, one shop, one accountability line.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <article key={i} className="border-t border-ink/15 pt-8">
              <div className="flex items-baseline justify-between">
                <div
                  className="font-sans font-black leading-[1] tracking-[-0.04em] text-ember"
                  style={{ fontSize: "clamp(2.25rem, 3vw, 48px)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                  {c.eyebrow}
                </div>
              </div>
              <h2
                className="mt-8 font-sans font-bold leading-[1.05] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 30px)" }}
              >
                {c.title}
              </h2>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-ink/80">
                {c.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/20 px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-40 border-t border-ink/15 pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
                Tolerance strategy
              </div>
              <h2
                className="mt-6 font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 48px)" }}
              >
                Cost where it can be. Spec where it has to be.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="max-w-[60ch] text-[18px] leading-relaxed text-ink/80">
                We work with customers to define a tolerance strategy that
                balances cost against performance. As-cast features stay
                cost-efficient. Critical features get the in-house CNC pass.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {TOLERANCES.map((t) => (
              <div key={t.label} className="border-t border-ink/15 pt-6">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                  {t.label}
                </div>
                <div
                  className="mt-4 font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                  style={{ fontSize: "clamp(2rem, 3.2vw, 44px)" }}
                >
                  {t.value}
                </div>
                <div className="mt-3 max-w-[24ch] text-[14px] leading-relaxed text-ink/70">
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-40 border-t border-ink/15 pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(2.25rem, 5vw, 72px)" }}
              >
                Send us your print.
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                STEP, IGES, SolidWorks, or PDF. We&rsquo;ll review the geometry,
                flag the manufacturability issues, and quote it back.
              </p>
            </div>
            <div className="col-span-12 self-end lg:col-span-4 lg:text-right">
              <Link
                href="/rfq"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-ink px-7 py-4 font-sans text-[14px] font-semibold tracking-[0.04em] text-paper transition-colors duration-300 hover:text-light"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100"
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
        </section>
      </div>
    </main>
  );
}

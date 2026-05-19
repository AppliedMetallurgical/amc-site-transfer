import Link from "next/link";

export const metadata = {
  title: "About — Hartman Family Foundry, Gilmer Texas",
  description:
    "Applied Metallurgical Corp. is a 16-person cast iron and steel foundry in Gilmer, Texas, owned by the Hartman family. Metalcasting lineage to Universal Electric Foundry, Chicago, 1912.",
};

const STATS = [
  { value: "1912", label: "Metalcasting lineage to Universal Electric Foundry, Chicago" },
  { value: "16", label: "People on the floor in Gilmer, Texas" },
  { value: "10–1,000", unit: "lbs", label: "Pour weight range, cast iron and steel" },
  { value: "±0.001", unit: "in", label: "Machined tolerance, in-house horizontal CNC" },
];

const STRENGTHS = [
  {
    title: "Consistent quality on complex castings",
    body: "Defect modes engineered out at the process level. Repeatable across production runs through controlled gating, melt chemistry, and inspection discipline.",
  },
  {
    title: "Hands-on engineering, not just production",
    body: "DFM review is part of the conversation. We solve gating, risering, and machinability problems on the screen before we cut tooling.",
  },
  {
    title: "Process-level problem solving",
    body: "Inclusions, porosity, surface defects — we trace root cause and engineer the fix. Downstream patching is the symptom of an upstream miss.",
  },
  {
    title: "Reliable lead times + production discipline",
    body: "Departmental scheduling is coordinated, not improvised. Inspection sits on the same critical path as production. Customers know where their part is.",
  },
];

const DISCIPLINES = [
  {
    label: "Metallurgical control",
    body: "Alloy chemistry, melt practices, defect prevention.",
  },
  {
    label: "Process engineering",
    body: "Gating, risering, mold design optimization for yield and defect reduction.",
  },
  {
    label: "Machining strategy",
    body: "Efficient programming and fixturing for large cast components.",
  },
  {
    label: "Defect analysis",
    body: "Root-cause identification on inclusions, porosity, surface defects.",
  },
  {
    label: "Production planning",
    body: "Coordinated scheduling across departments to meet delivery commitments.",
  },
];

const RECENT = [
  {
    label: "Digital scheduling",
    body: "Production scheduling system for visibility and coordination across casting, machining, and inspection.",
  },
  {
    label: "Additive pattern development",
    body: "Expanded 3D-printed pattern capability for complex geometry and rapid prototyping.",
  },
  {
    label: "Material tracking",
    body: "Improved material tracking and departmental coordination across the floor.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              About
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 96px)" }}
            >
              A 16-person foundry in Gilmer, Texas, owned by the Hartman family.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              Applied Metallurgical Corp. is a cast iron and steel foundry with
              an in-house CNC machining cell. Metalcasting lineage traces back
              to Universal Electric Foundry, founded in Chicago in 1912.
            </p>
          </div>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-12 border-t border-rule pt-12 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="border-t border-rule pt-5">
              <div
                className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 64px)" }}
              >
                {s.value}
                {s.unit && (
                  <span className="ml-1 font-sans text-base font-medium tracking-normal text-graphite">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-3 max-w-[28ch] text-[15px] font-medium leading-relaxed text-ink">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* Strength positioning */}
        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              Why customers choose us
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <p
              className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
            >
              We bridge the gap between engineering intent and manufacturable
              reality.
            </p>
            <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink">
              A true manufacturing partner, not just a vendor. We improve part
              performance and cost simultaneously, on castings where the
              tolerance and the timeline both matter.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
              {STRENGTHS.map((s) => (
                <div key={s.title} className="border-t border-rule pt-5">
                  <h3 className="font-serif font-medium text-[22px] leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team disciplines */}
        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              The team
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
            >
              Five disciplines, applied as one shop.
            </h2>
            <ul className="mt-10 space-y-6">
              {DISCIPLINES.map((d) => (
                <li key={d.label} className="grid grid-cols-12 gap-6 border-t border-rule pt-5">
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
                      {d.label}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 text-[16px] leading-relaxed text-ink">
                    {d.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              Leadership
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h3
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 32px)" }}
            >
              Bret Hartman
            </h3>
            <div className="mt-2 font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              President
            </div>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-ink">
              Hartman family ownership runs the shop floor through the
              engineering office. Decisions on metallurgy, scheduling, and
              customer commitments stay in-house.
            </p>
          </div>
        </section>

        {/* Recent investments */}
        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              Recent investments
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
              {RECENT.map((r) => (
                <div key={r.label} className="border-t border-rule pt-5">
                  <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                    {r.label}
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink">{r.body}</p>
                </div>
              ))}
            </div>
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
                Need a foundry that engineers what it pours?
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink">
                Send your print. DFM review and quote come back from the team
                that will actually build the part.
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

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Applied Metallurgical Corp., Gilmer Texas",
  description:
    "Applied Metallurgical Corp. is a vertically integrated cast iron, steel, V-process, and CNC machining operation in Gilmer, Texas. Founded in 2021 with Hartman foundry lineage through Commercial Castings and Commercial Machine.",
};

const STATS = [
  { value: "±0.0005\"", label: "Machined tolerance — in-house horizontal CNC" },
  { value: "2021", label: "Applied Metallurgical founded in Gilmer, Texas" },
  { value: "25–30%", label: "Projected net profit margin after four years in business" },
  { value: "8", suffix: "tons/day", label: "Planned Plant 2 casting capacity" },
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
    label: "Plant 2 planning",
    body: "Future facility planning targets capacity up to 8 tons of castings per day.",
  },
  {
    label: "Machining automation",
    body: "Planned additional Mazak 8800 machining centers with 36-pallet automation systems.",
  },
  {
    label: "Inspection clean room",
    body: "2026 clean-room construction supports temperature and humidity controlled CMM inspection to .0001\" on machined surfaces.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              About
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 120px)" }}
            >
              Built in Gilmer for completed components.
            </h1>
            <p className="mt-10 max-w-[64ch] text-[19px] leading-relaxed text-ink/85">
              Applied Metallurgical Corp. was founded in 2021 in Gilmer, Texas.
              The company was built around Bret Hartman&rsquo;s V-process development
              work and a vertically integrated model: foundry, machining, and
              inspection under one roof.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-ink/15 pt-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="border-t border-ink/15 pt-6">
              <div className="flex items-baseline gap-2">
                <div
                  className="font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 60px)" }}
                >
                  {s.value}
                </div>
                {s.suffix && (
                  <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-graphite">
                    {s.suffix}
                  </div>
                )}
              </div>
              <div className="mt-4 max-w-[28ch] text-[14px] leading-relaxed text-ink/75">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Why customers choose us
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              We bridge the gap between engineering intent and manufacturable
              reality.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="max-w-[62ch] text-[17px] leading-relaxed text-ink/80">
              A manufacturing partner, not a vendor. We improve part performance
              and cost simultaneously, on castings where tolerance and timeline
              both matter.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
              {STRENGTHS.map((s) => (
                <div key={s.title} className="border-t border-ink/15 pt-6">
                  <h3 className="font-sans font-bold text-[18px] leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              The team
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              Five disciplines, one shop.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ul className="space-y-6">
              {DISCIPLINES.map((d) => (
                <li
                  key={d.label}
                  className="grid grid-cols-12 gap-6 border-t border-ink/15 pt-6"
                >
                  <div className="col-span-12 md:col-span-4">
                    <div className="font-sans font-bold text-[16px] text-ink">
                      {d.label}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-8 text-[15px] leading-relaxed text-ink/75">
                    {d.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Leadership
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              Bret Hartman
            </h2>
            <div className="mt-3 font-mono text-[11px] tracking-[0.28em] uppercase text-graphite">
              Founder / CEO
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="max-w-[60ch] text-[17px] leading-relaxed text-ink/85">
              Bret Hartman leads the company&rsquo;s V-process development and
              vertically integrated production model. Joshua Hartman serves as
              VP of Business Development, connecting customer requirements to
              the shop&rsquo;s casting, machining, and inspection capabilities.
            </p>
            <figure className="mt-12 max-w-[860px] border border-ink/15 bg-ink p-3 text-paper">
              <div className="relative aspect-[4/3] overflow-hidden bg-iron-deep">
                <Image
                  src="/uploads/website-additions/hartman-leadership-foundry-cropped.jpg"
                  alt="Joshua Hartman and Bret Hartman standing on the foundry floor near molten metal."
                  fill
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="object-cover object-[center_68%]"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-2 px-1 pb-1 md:flex-row md:items-center md:justify-between">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-ember-bright">
                  Foundry floor leadership
                </span>
                <span className="max-w-[52ch] text-[13px] leading-relaxed text-paper/70 md:text-right">
                  Hartman leadership on the shop floor at Applied Metallurgical
                  Corp. in Gilmer, Texas.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mt-32 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Recent investments
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              Built forward.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
              {RECENT.map((r) => (
                <div key={r.label} className="border-t border-ink/15 pt-6">
                  <div className="font-sans font-bold text-[15px] text-ink mb-3">
                    {r.label}
                  </div>
                  <p className="text-[14px] leading-relaxed text-ink/75">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-40 border-t border-ink/15 pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(2.25rem, 5vw, 72px)" }}
              >
                Need a foundry that engineers what it pours?
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                Send your print. DFM review and quote come back from the team
                that will actually build the part.
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

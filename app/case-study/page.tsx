import Link from "next/link";

export const metadata = {
  title: "Application — High-Mass Structural Casting",
  description:
    "How Applied Metallurgical delivered a high-mass structural casting with dimensional stability under load, vibration control, and tight machined tolerance. Engineered gating, optimized melt chemistry, integrated machining strategy.",
};

const CONTRIBUTIONS = [
  {
    label: "Design",
    body: "Collaborated with the customer to modify geometry for manufacturability without compromising performance.",
  },
  {
    label: "Engineering",
    body: "Developed optimized gating, risering, and solidification strategies. Process planned to head off inclusions and porosity at source.",
  },
  {
    label: "Materials",
    body: "Engineered-grade grey or ductile iron, tailored for strength and damping properties on this application.",
  },
  {
    label: "Tooling",
    body: "Custom pattern tooling for production volume. 3D-printed prototype patterns used during design validation.",
  },
  {
    label: "Manufacturing",
    body: "Sand casting (V-process where applicable). Controlled melting and pouring. In-house CNC machining and finishing. Inspection and validation across the same critical path.",
  },
];

export default function CaseStudyPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              Application example
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
            >
              High-mass structural casting.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              Dimensional stability under load. Vibration controlled. Tight
              machined features held across production. How one shop bridged
              engineering intent and manufacturable reality.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <section className="grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              01 / The requirement
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
            >
              A high-mass structural casting that wouldn&rsquo;t move.
            </h2>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-ink">
              The customer needed a large structural casting capable of holding
              dimensional stability under load, minimizing vibration, and
              hitting tight machined tolerance on the critical features. Failure
              modes ran from in-service distortion to mid-process scrap.
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              02 / The challenge
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
            >
              Internal defects + shrinkage in a large section, without losing
              machinability.
            </h2>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-ink">
              Large-section castings concentrate solidification problems &mdash;
              inclusions, porosity, and shrinkage cavities in the spots where
              the part has to be strongest. Solving for those without
              compromising structural integrity or machine-ability of the
              critical features is the gating-and-risering puzzle.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              03 / The approach
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 space-y-5">
            <h2
              className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
            >
              Solved at the process level.
            </h2>
            <ul className="space-y-4 max-w-[64ch]">
              <li className="flex gap-4 text-[17px] leading-relaxed text-ink">
                <span className="font-mono text-[12px] tracking-[0.2em] text-ember pt-[6px]">
                  01
                </span>
                <span>
                  Redesigned gating and risering to control metal flow and
                  solidification across the heavy section.
                </span>
              </li>
              <li className="flex gap-4 text-[17px] leading-relaxed text-ink">
                <span className="font-mono text-[12px] tracking-[0.2em] text-ember pt-[6px]">
                  02
                </span>
                <span>
                  Optimized melt chemistry and pour parameters for the alloy
                  required.
                </span>
              </li>
              <li className="flex gap-4 text-[17px] leading-relaxed text-ink">
                <span className="font-mono text-[12px] tracking-[0.2em] text-ember pt-[6px]">
                  03
                </span>
                <span>
                  Implemented process controls targeted at the inclusion and
                  porosity failure modes specific to this geometry.
                </span>
              </li>
              <li className="flex gap-4 text-[17px] leading-relaxed text-ink">
                <span className="font-mono text-[12px] tracking-[0.2em] text-ember pt-[6px]">
                  04
                </span>
                <span>
                  Integrated machining strategy at the DFM stage so cast
                  geometry held the finished tolerance, not just the rough
                  shape.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contributions */}
        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-rule pt-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
              04 / Contributions
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
              {CONTRIBUTIONS.map((c) => (
                <div key={c.label} className="border-t border-rule pt-5">
                  <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                    {c.label}
                  </div>
                  <p className="text-[16px] leading-relaxed text-ink">{c.body}</p>
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
                Have a heavy section that won&rsquo;t cooperate?
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink">
                Send the print. We&rsquo;ll tell you where the solidification
                problem will land, and how to engineer it out before the first
                pour.
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

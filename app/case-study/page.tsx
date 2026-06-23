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

const APPROACH = [
  "Redesigned gating and risering to control metal flow and solidification across the heavy section.",
  "Optimized melt chemistry and pour parameters for the alloy required.",
  "Implemented process controls targeted at the inclusion and porosity failure modes specific to this geometry.",
  "Integrated machining strategy at the DFM stage so cast geometry held the finished tolerance, not just the rough shape.",
];

export default function CaseStudyPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Application example
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 124px)" }}
            >
              High-mass structural casting.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[19px] leading-relaxed text-ink/80">
              Dimensional stability under load. Vibration controlled. Tight
              machined features held across production. How one shop bridged
              engineering intent and manufacturable reality.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-flex items-center gap-3 border border-ember/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                The requirement
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              A high-mass structural casting that wouldn&rsquo;t move.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink/85">
              The customer needed a large structural casting capable of holding
              dimensional stability under load, minimizing vibration, and
              hitting tight machined tolerance on the critical features.
              Failure modes ran from in-service distortion to mid-process
              scrap.
            </p>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-flex items-center gap-3 border border-ember/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                The challenge
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              Internal defects and shrinkage without losing machinability.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink/85">
              Large-section castings concentrate solidification problems —
              inclusions, porosity, and shrinkage cavities in the spots where
              the part has to be strongest. Solving for those without
              compromising structural integrity or machinability of the critical
              features is the gating-and-risering puzzle.
            </p>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-flex items-center gap-3 border border-ember/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                The approach
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 40px)" }}
            >
              Solved at the process level.
            </h2>
            <ul className="mt-10 space-y-6">
              {APPROACH.map((step) => (
                <li
                  key={step}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/15 pt-6"
                >
                  <span className="mt-2 h-px w-10 bg-ember" aria-hidden />
                  <span className="max-w-[60ch] text-[17px] leading-relaxed text-ink/85">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="inline-flex items-center gap-3 border border-ember/30 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                Contributions
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
              {CONTRIBUTIONS.map((c) => (
                <div key={c.label} className="border-t border-ink/15 pt-6">
                  <div className="font-sans font-bold text-[15px] text-ink mb-3">
                    {c.label}
                  </div>
                  <p className="text-[14px] leading-relaxed text-ink/75">
                    {c.body}
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
                Have a heavy section that won&rsquo;t cooperate?
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                Send the print. We&rsquo;ll tell you where the solidification
                problem will land, and how to engineer it out before the first
                pour.
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

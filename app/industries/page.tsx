import Link from "next/link";

export const metadata = {
  title: "Industries — Medical, Transportation, OEM Industrial",
  description:
    "Cast iron and steel components for medical equipment, heavy equipment, transportation, and OEM industrial manufacturing. Load-bearing, vibration dampening, dimensional stability — built for critical applications.",
};

const INDUSTRIES = [
  {
    eyebrow: "Medical equipment",
    title: "Bases + support structures",
    body: "Cast components for medical equipment requiring dimensional stability and vibration dampening. Imaging system bases, table supports, structural housings. Repeatability across production runs is non-negotiable.",
    examples: [
      "Imaging system bases",
      "Equipment support structures",
      "Vibration-damped housings",
    ],
    requirements: [
      "Dimensional stability under load",
      "Vibration dampening",
      "Repeatability across runs",
    ],
  },
  {
    eyebrow: "Heavy equipment + transportation",
    title: "Structural castings, OEM tier",
    body: "Custom OEM structural castings for transportation and industrial systems. Load-bearing strength, wear resistance, and dimensional accuracy on parts that operate in punishing environments.",
    examples: [
      "Structural balance components",
      "Transportation system castings",
      "Heavy machinery components",
    ],
    requirements: [
      "Load-bearing strength",
      "Wear resistance",
      "Dimensional accuracy",
    ],
  },
  {
    eyebrow: "OEM industrial",
    title: "Pump housings, impellers, fluid handling",
    body: "Pump housings, impellers, and fluid-handling components for industrial process equipment. Material integrity and tight machined features on the critical surfaces, cost-efficient as-cast on the rest.",
    examples: [
      "Pump housings",
      "Impellers",
      "Fluid-handling components",
      "Process equipment castings",
    ],
    requirements: [
      "Material integrity",
      "Pressure-bearing geometry",
      "Tight machined critical features",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Industries we serve
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 124px)" }}
            >
              Built for critical-use applications.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[19px] leading-relaxed text-ink/80">
              Three sectors where reliability, material integrity, and
              repeatability decide the part&rsquo;s service life.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {INDUSTRIES.map((ind, i) => (
            <article
              key={i}
              className="grid grid-cols-12 gap-8 border-t border-ink/15 pt-12"
            >
              <div className="col-span-12 lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <div
                    className="font-sans font-black leading-[1] tracking-[-0.04em] text-ember"
                    style={{ fontSize: "clamp(2rem, 3vw, 44px)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite">
                    {ind.eyebrow}
                  </div>
                </div>
                <h2
                  className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
                >
                  {ind.title}
                </h2>
              </div>

              <div className="col-span-12 lg:col-span-7 space-y-10">
                <p className="max-w-[60ch] text-[17px] leading-relaxed text-ink/85">
                  {ind.body}
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite mb-3">
                      Typical parts
                    </div>
                    <ul className="space-y-2">
                      {ind.examples.map((e) => (
                        <li
                          key={e}
                          className="text-[15px] leading-snug text-ink"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-graphite mb-3">
                      Critical requirements
                    </div>
                    <ul className="space-y-2">
                      {ind.requirements.map((r) => (
                        <li
                          key={r}
                          className="text-[15px] leading-snug text-ink"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-40 border-t border-ink/15 pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(2.25rem, 5vw, 72px)" }}
              >
                Different vertical? Ask anyway.
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                Cast iron and steel components, 10 to 1,000 lbs, where
                structural integrity matters. If your application sits adjacent
                to what we pour, send the print.
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

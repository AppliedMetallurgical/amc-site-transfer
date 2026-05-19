import Link from "next/link";

export const metadata = {
  title: "Industries — Medical, Transportation, OEM Industrial",
  description:
    "Cast iron and steel components for medical equipment, heavy equipment, transportation, and OEM industrial manufacturing. Load-bearing, vibration dampening, dimensional stability — built for critical applications.",
};

const INDUSTRIES = [
  {
    eyebrow: "01 / Medical equipment",
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
    eyebrow: "02 / Heavy equipment + transportation",
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
    eyebrow: "03 / OEM industrial manufacturing",
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
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              Industries we serve
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
            >
              Built for critical-use applications.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              Three sectors where reliability, material integrity, and
              repeatability decide the part&rsquo;s service life.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {INDUSTRIES.map((ind, i) => (
            <article key={i} className="grid grid-cols-12 gap-8 border-t border-rule pt-10">
              <div className="col-span-12 lg:col-span-4">
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember">
                  {ind.eyebrow}
                </div>
                <h2
                  className="mt-4 font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
                >
                  {ind.title}
                </h2>
              </div>

              <div className="col-span-12 lg:col-span-8 space-y-10">
                <p className="max-w-[60ch] text-[18px] leading-relaxed text-ink">
                  {ind.body}
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                      Typical parts
                    </div>
                    <ul className="space-y-2">
                      {ind.examples.map((e) => (
                        <li
                          key={e}
                          className="text-[16px] leading-snug text-ink"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                      Critical requirements
                    </div>
                    <ul className="space-y-2">
                      {ind.requirements.map((r) => (
                        <li
                          key={r}
                          className="text-[16px] leading-snug text-ink"
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

        {/* CTA */}
        <div className="mt-32 border-t border-rule pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-serif font-medium leading-[1.02] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 56px)" }}
              >
                Different vertical? Ask anyway.
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink">
                Cast iron and steel components, 10 to 1,000 lbs, where structural
                integrity matters. If your application sits adjacent to what we
                pour, send the print.
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

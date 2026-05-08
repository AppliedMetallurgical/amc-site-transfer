import Link from "next/link";

const INDUSTRIES = [
  {
    name: "Medical Equipment",
    body: "Imaging frames, surgical fixtures, patient handling — castings and machined components for FDA-regulated workflows.",
    href: "/industries/medical-equipment",
    examples: ["Imaging frame brackets", "Surgical table assemblies", "Pump housings"],
  },
  {
    name: "Heavy Equipment & Industrial Machinery",
    body: "Wear parts, structural castings, hydraulic housings. Cast iron and steel built to take a beating in the field.",
    href: "/industries/heavy-equipment",
    examples: ["Hydraulic manifolds", "Wear plates", "Bearing housings"],
  },
  {
    name: "Transportation & OEM",
    body: "Tier 2 supply for Tier 1 OEMs. Castings and machined components specified to your print, certified to your standard.",
    href: "/industries/transportation-oem",
    examples: ["Drive components", "Structural brackets", "Compressor housings"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Industries we serve
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              We build for engineers who need parts that work the first time.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group flex flex-col border border-mill/60 p-10 transition-colors hover:border-pour"
            >
              <h2 className="mb-4 text-2xl font-bold text-paper">{ind.name}</h2>
              <p className="mb-8 text-sm leading-relaxed text-cast">{ind.body}</p>

              <div className="mb-8 flex-1">
                <div className="mb-3 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                  Example components
                </div>
                <ul className="space-y-1.5 text-sm text-cast">
                  {ind.examples.map((ex) => (
                    <li key={ex} className="flex gap-2">
                      <span className="text-pour">·</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors group-hover:text-pour">
                See examples
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

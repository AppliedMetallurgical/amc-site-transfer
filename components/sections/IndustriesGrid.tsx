import Link from "next/link";

const INDUSTRIES = [
  {
    name: "Medical Equipment",
    body: "Imaging frames, surgical fixtures, patient handling — castings and machined components for FDA-regulated workflows.",
    href: "/industries/medical-equipment",
  },
  {
    name: "Heavy Equipment & Industrial Machinery",
    body: "Wear parts, structural castings, hydraulic housings. Cast iron and steel built to take a beating.",
    href: "/industries/heavy-equipment",
  },
  {
    name: "Transportation & OEM",
    body: "Tier 2 supply for Tier 1 OEMs. Castings and machined components specified to your print, certified to your standard.",
    href: "/industries/transportation-oem",
  },
];

export function IndustriesGrid() {
  return (
    <section className="bg-foundry py-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16">
          <div className="mb-4 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
            Industries
          </div>
          <h2 className="max-w-[24ch] font-sans text-4xl font-black leading-[1.0] tracking-[-0.03em] text-paper md:text-5xl">
            We build for engineers who need parts that work the first time.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group border border-mill/60 p-10 transition-colors hover:border-pour"
            >
              <h3 className="mb-4 text-xl font-bold text-paper">{ind.name}</h3>
              <p className="mb-8 text-sm leading-relaxed text-cast">{ind.body}</p>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] uppercase text-cast transition-colors group-hover:text-pour">
                See examples
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

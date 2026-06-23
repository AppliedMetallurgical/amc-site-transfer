import Image from "next/image";

const APPLICATIONS = [
  {
    market: "Fluid transfer",
    title: "Pump housing",
    work: "Cast component with inspection-ready geometry for pump and flow-control equipment.",
    src: "/uploads/website-additions/fluid-transfer-pump.jpg",
    alt: "Fluid transfer pump casting staged under coordinate inspection equipment.",
  },
  {
    market: "Power transmission",
    title: "Gear housing",
    work: "Machined housing with multiple precision bores and bearing surfaces.",
    src: "/uploads/website-additions/gear-housing.jpg",
    alt: "Machined gear housing casting with several circular bores.",
  },
  {
    market: "Drivetrain",
    title: "Rear differential housing",
    work: "Cast and machined axle component for OEM transportation applications.",
    src: "/uploads/website-additions/rear-differential-housing.jpg",
    alt: "Rear differential housing casting mounted on a machining fixture.",
  },
  {
    market: "Rail infrastructure",
    title: "Railroad switch body",
    work: "Repeat castings staged for railroad switch and track-control assemblies.",
    src: "/uploads/website-additions/railroad-switch-body.jpg",
    alt: "Railroad switch body castings arranged in rows on a shop table.",
  },
  {
    market: "Medical equipment",
    title: "Surgery table base",
    work: "Structural base casting for medical equipment with clean downstream machining needs.",
    src: "/uploads/website-additions/medical-surgery-table-base.jpg",
    alt: "Medical surgery table base casting on a shop floor.",
  },
  {
    market: "Rail equipment",
    title: "Machined railroad gear housing",
    work: "Fully machined railroad gear housing with large precision bearing geometry.",
    src: "/uploads/website-additions/machined-railroad-gear-housing.jpg",
    alt: "Fully machined railroad gear housing with a large circular bore.",
  },
  {
    market: "Ductile iron drivetrain",
    title: "Differential housing",
    work: "Ductile iron housing on fixture, built for strength and finished-part accuracy.",
    src: "/uploads/website-additions/ductile-iron-differential-housing.jpg",
    alt: "Ductile iron differential housing on a machining fixture.",
  },
];

export function PartGallery() {
  return (
    <section
      id="production-applications"
      className="scroll-mt-24 bg-iron-deep px-6 pt-24 pb-16 text-light md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 border-t border-light/15 pt-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember-bright">
              Production applications
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 72px)" }}
            >
              Representative production work.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="max-w-[62ch] text-[18px] leading-relaxed text-light/75">
              Pump, gear, differential, railroad, and medical components shown
              as application proof. Each card identifies the market and the
              work represented so the photos read as production evidence, not
              decoration.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {APPLICATIONS.map((part) => (
            <article
              key={part.title}
              className="group border border-light/12 bg-light/[0.035] p-4 transition-colors duration-300 hover:border-ember-bright/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/35">
                <Image
                  src={part.src}
                  alt={part.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-bright" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-ember-bright">
                  {part.market}
                </span>
              </div>
              <h3 className="mt-3 font-sans text-[24px] font-bold leading-tight tracking-[-0.02em] text-light">
                {part.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-light/70">
                {part.work}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

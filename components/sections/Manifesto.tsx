import Link from "next/link";

const POINTS = [
  "V-process zero-draft sand casting, cast iron and steel.",
  "3D-printed sand tooling for complex geometry.",
  "Horizontal CNC machining, Fanuc and Mazak controls.",
  "SolidWorks-led DFM consulting before any tooling spend.",
  "Pour weight ten pounds to one thousand pounds.",
  "Machined tolerance ±0.001 to ±0.005 inches.",
  "One shop, one team, one schedule.",
];

export function Manifesto() {
  return (
    <section className="relative bg-paper-deep py-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
            01 · How we work
          </div>
          <div className="mt-2 h-px w-16 bg-ink/40" />
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-5 mb-10">
          <p
            className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
          >
            We bridge the gap between engineering intent and manufacturable
            reality.
          </p>
        </div>

        <ul className="col-span-12 space-y-5 lg:col-span-7 lg:col-start-5">
          {POINTS.map((p, i) => (
            <li
              key={i}
              className="flex items-baseline gap-4 text-[20px] leading-snug text-ink md:text-[22px]"
              style={{ fontFeatureSettings: '"ss01"' }}
            >
              <span className="font-mono text-[12px] tracking-[0.2em] text-ember pt-[2px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="col-span-12 lg:col-span-7 lg:col-start-5 mt-10">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-3 border-b border-ink pb-1 font-sans text-[15px] tracking-[0.04em] text-ink hover:border-ember hover:text-ember"
          >
            Send us your print
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

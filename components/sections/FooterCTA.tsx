import Link from "next/link";

export function FooterCTA() {
  return (
    <section className="bg-paper-deep border-t border-rule px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
            04 · Order
          </div>
          <div className="mt-2 h-px w-16 bg-ink/40" />
          <h2
            className="mt-8 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
            style={{
              fontSize: "clamp(2.75rem, 6.5vw, 92px)",
            }}
          >
            Send us your print.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[19px] font-medium leading-relaxed text-ink">
            STEP, IGES, SolidWorks, or PDF. Upload your file and we will review
            it.
          </p>
        </div>

        <div className="col-span-12 self-end lg:col-span-4 lg:flex lg:justify-end">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] tracking-[0.06em] text-paper hover:bg-iron"
          >
            Start an RFQ
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="col-span-12 mt-16 grid grid-cols-1 gap-y-6 border-t border-rule pt-8 text-[15px] text-ink-soft md:grid-cols-3">
          <div>
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-2">Contact</div>
            <a
              href="mailto:sales@appliedmetallurgical.com"
              className="hover:text-ember"
            >
              sales@appliedmetallurgical.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-2">Located</div>
            Gilmer, Texas
          </div>
          <div>
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-2">Lineage</div>
            Universal Electric Foundry · 1912
          </div>
        </div>

        <div className="col-span-12 mt-10 flex flex-col items-start justify-between gap-2 border-t border-rule pt-6 text-[12px] tracking-[0.18em] uppercase text-graphite md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Applied Metallurgical Corp.</div>
          <div>Cast iron · Steel · V-process · 3D-printed sand tooling · CNC</div>
        </div>
      </div>
    </section>
  );
}

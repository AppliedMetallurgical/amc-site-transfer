import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-mill/50 bg-iron py-32 px-6 md:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(232,93,44,0.4) 0%, rgba(10,10,11,0) 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
            Request a Quote
          </div>
          <h2 className="mb-6 font-sans font-black leading-[0.95] tracking-[-0.035em] text-paper" style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}>
            Send us your print.<br />We&rsquo;ll send back a plan.
          </h2>
          <p className="max-w-[52ch] text-base leading-relaxed text-cast">
            STEP, IGES, SolidWorks, or PDF. We review every RFQ in 48 hours with a manufacturability read and a pricing range — not a black-box quote.
          </p>
        </div>

        <div className="col-span-12 self-end lg:col-span-5 lg:flex lg:justify-end">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-3 border-2 border-pour bg-pour px-8 py-5 font-mono text-sm tracking-[0.18em] uppercase text-foundry transition-colors hover:bg-pour-bright"
          >
            Start an RFQ
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

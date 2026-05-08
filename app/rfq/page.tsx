import Link from "next/link";

export default function RFQPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Request a Quote
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              Send us your print. We&rsquo;ll send back a plan.
            </h1>
          </div>
          <p className="col-span-12 max-w-[52ch] self-end text-base leading-relaxed text-cast lg:col-span-4">
            STEP, IGES, SolidWorks, or PDF. We review every RFQ in 48 hours
            with a manufacturability read and a pricing range — not a black-box
            quote.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-7">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b border-mill/60 bg-transparent py-3 text-base text-paper outline-none transition-colors placeholder:text-steel focus:border-pour"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                    Company
                  </span>
                  <input
                    type="text"
                    name="company"
                    className="w-full border-b border-mill/60 bg-transparent py-3 text-base text-paper outline-none transition-colors placeholder:text-steel focus:border-pour"
                    placeholder="Company"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="w-full border-b border-mill/60 bg-transparent py-3 text-base text-paper outline-none transition-colors placeholder:text-steel focus:border-pour"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border-b border-mill/60 bg-transparent py-3 text-base text-paper outline-none transition-colors placeholder:text-steel focus:border-pour"
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  Part details
                </span>
                <textarea
                  name="details"
                  rows={5}
                  className="w-full border-b border-mill/60 bg-transparent py-3 text-base text-paper outline-none transition-colors placeholder:text-steel focus:border-pour"
                  placeholder="Material, weight, tolerances, target volume, lead time…"
                />
              </label>

              <label className="block border border-dashed border-mill/60 p-8 text-center transition-colors hover:border-pour">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  CAD upload
                </span>
                <span className="block text-sm text-cast">
                  STEP · IGES · SolidWorks · PDF — drop a file or click to browse
                </span>
                <input
                  type="file"
                  name="cad"
                  accept=".step,.stp,.iges,.igs,.sldprt,.pdf"
                  className="sr-only"
                />
                <span className="mt-3 block font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                  Upload wiring lands at sales@appliedmetallurgical.com (S3 wire-up)
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 border-2 border-pour bg-pour px-8 py-5 font-mono text-sm tracking-[0.18em] uppercase text-foundry transition-colors hover:bg-pour-bright"
              >
                Submit RFQ
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          <aside className="col-span-12 lg:col-span-5">
            <div className="border border-mill/60 p-10">
              <div className="mb-4 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                What happens next
              </div>
              <ol className="space-y-6 text-sm leading-relaxed text-cast">
                <li className="flex gap-4">
                  <span className="font-mono text-pour">01</span>
                  <span>
                    Engineering reviews the print within 48 hours. No black-box
                    quotes — we tell you what we see.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-pour">02</span>
                  <span>
                    DFM call if there is anything to flag — gating, geometry, or
                    a tolerance that fights metallurgy.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-pour">03</span>
                  <span>
                    Pricing range and lead-time options. Two paths usually, our
                    preference noted.
                  </span>
                </li>
              </ol>
              <div className="mt-10 border-t border-mill/60 pt-6">
                <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                  Or email direct
                </div>
                <Link
                  href="mailto:sales@appliedmetallurgical.com"
                  className="text-base text-paper transition-colors hover:text-pour"
                >
                  sales@appliedmetallurgical.com
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

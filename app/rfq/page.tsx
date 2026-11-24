const salesEmail = "sales@appliedmetallurgical.com";
const quoteEmail = "mailto:sales@appliedmetallurgical.com?subject=Request%20for%20a%20quote";

export const metadata = {
  title: "Request a Quote",
  description:
    "Email Applied Metallurgical about your casting and machining needs, and coordinate drawing exchange with our team.",
};

export default function RFQPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Request a quote
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 124px)" }}
            >
              Request a quote.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[19px] leading-relaxed text-ink/85">
              Tell us what you need to make. Our team will follow up about your part and how to share drawings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-5 border-t border-ink/15 pt-10">
              <a
                href={quoteEmail}
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-ink px-8 py-5 font-sans text-[14px] font-semibold tracking-[0.04em] text-paper transition-colors duration-300 hover:text-light"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="relative z-10">Email us for a quote</span>
                <span aria-hidden className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <p className="max-w-[58ch] text-[16px] leading-relaxed text-ink/85">
                Include your material, part size or weight, target volume, and timing if known. If your drawings are confidential, ask us how to share them securely.
              </p>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-5">
            <div className="border-t border-ink/15 pt-10 space-y-12">
              <div>
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember mb-5">
                  What happens next
                </div>
                <ul className="space-y-5">
                  {[
                    "Engineering reviews geometry, materials, and target volume against our process.",
                    "DFM feedback returned — gating, machinability, tolerance strategy.",
                    "Quote with lead time, tooling approach, and pricing.",
                  ].map((step) => (
                    <li
                      key={step}
                      className="grid grid-cols-[auto_1fr] gap-4 border-t border-ink/15 pt-4 text-[15px] leading-relaxed text-ink/85"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-ember" aria-hidden />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-ink/15 pt-8">
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-graphite mb-3">
                  Sales email
                </div>
                <a
                  href={quoteEmail}
                  className="text-[16px] text-ink transition-colors hover:text-ember"
                >
                  {salesEmail}
                </a>
              </div>

              <div className="border-t border-ink/15 pt-8">
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-graphite mb-3">
                  Located
                </div>
                <div className="text-[16px] text-ink">Gilmer, Texas</div>
              </div>

              <div className="border-t border-ink/15 pt-8">
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-graphite mb-3">
                  Founded
                </div>
                <div className="text-[16px] text-ink">
                  Founded in Gilmer, Texas
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

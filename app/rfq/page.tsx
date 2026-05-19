import Link from "next/link";

export const metadata = {
  title: "Request a Quote — Send Your Print",
  description:
    "Submit STEP, IGES, SolidWorks, or PDF files for review. DFM feedback, casting strategy, and quote returned by the team that will actually build the part.",
};

export default function RFQPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              Request a quote
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
            >
              Send us your print.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              STEP, IGES, SolidWorks, or PDF. DFM review and quote come back
              from the team that will actually build the part — not a sales
              relay.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Form */}
          <div className="col-span-12 lg:col-span-7">
            <form className="space-y-10 border-t border-rule pt-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Field
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  type="text"
                />
                <Field
                  name="company"
                  label="Company"
                  placeholder="Company"
                  type="text"
                />
                <Field
                  name="email"
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                />
                <Field
                  name="phone"
                  label="Phone"
                  placeholder="Optional"
                  type="tel"
                />
              </div>

              <label className="block">
                <span className="mb-3 block font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
                  Part details
                </span>
                <textarea
                  name="details"
                  rows={6}
                  className="w-full border-b border-rule bg-transparent py-3 text-[17px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-ember"
                  placeholder="Material, weight, tolerances, target volume, lead time…"
                />
              </label>

              <label className="block border border-dashed border-rule p-10 text-center transition-colors hover:border-ember">
                <span className="mb-2 block font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
                  CAD upload
                </span>
                <span className="block text-[15px] text-ink-soft">
                  STEP · IGES · SolidWorks · PDF — drop a file or click to
                  browse
                </span>
                <input
                  type="file"
                  name="cad"
                  accept=".step,.stp,.iges,.igs,.sldprt,.pdf"
                  className="sr-only"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-ink px-8 py-5 font-sans text-[15px] tracking-[0.06em] text-paper transition-colors hover:bg-iron"
              >
                Submit RFQ
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-5">
            <div className="border-t border-rule pt-10 space-y-12">
              <div>
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-ember mb-4">
                  What happens next
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4 text-[16px] leading-relaxed text-ink">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-graphite pt-[5px] min-w-[18px]">
                      01
                    </span>
                    <span>
                      Engineering reviews geometry, materials, and target volume
                      against our process.
                    </span>
                  </li>
                  <li className="flex gap-4 text-[16px] leading-relaxed text-ink">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-graphite pt-[5px] min-w-[18px]">
                      02
                    </span>
                    <span>
                      DFM feedback returned — gating, machinability, tolerance
                      strategy.
                    </span>
                  </li>
                  <li className="flex gap-4 text-[16px] leading-relaxed text-ink">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-graphite pt-[5px] min-w-[18px]">
                      03
                    </span>
                    <span>
                      Quote with lead time, tooling approach, and pricing.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-rule pt-8">
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                  Or email direct
                </div>
                <Link
                  href="mailto:sales@appliedmetallurgical.com"
                  className="text-[17px] text-ink transition-colors hover:text-ember"
                >
                  sales@appliedmetallurgical.com
                </Link>
              </div>

              <div className="border-t border-rule pt-8">
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-3">
                  Located
                </div>
                <div className="text-[17px] text-ink">Gilmer, Texas</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
};

function Field({ name, label, placeholder, type }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="w-full border-b border-rule bg-transparent py-3 text-[17px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-ember"
        placeholder={placeholder}
      />
    </label>
  );
}

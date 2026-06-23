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
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Request a quote
            </div>
            <h1
              className="mt-6 font-sans font-black leading-[0.95] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 124px)" }}
            >
              Send us your print.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[19px] leading-relaxed text-ink/85">
              STEP, IGES, SolidWorks, or PDF. DFM review and quote come back
              from the team that will actually build the part — not a sales
              relay.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-7">
            <form className="space-y-10 border-t border-ink/15 pt-10">
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
                <span className="mb-3 block font-mono text-[11px] tracking-[0.28em] uppercase text-graphite">
                  Part details
                </span>
                <textarea
                  name="details"
                  rows={6}
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-ember"
                  placeholder="Material, weight, tolerances, target volume, lead time…"
                />
              </label>

              <label className="block border border-dashed border-ink/25 p-10 text-center transition-colors hover:border-ember">
                <span className="mb-2 block font-mono text-[11px] tracking-[0.28em] uppercase text-graphite">
                  CAD upload
                </span>
                <span className="block text-[14px] text-ink/70">
                  STEP · IGES · SolidWorks · PDF — drop a file or click to browse
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
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-ink px-8 py-5 font-sans text-[14px] font-semibold tracking-[0.04em] text-paper transition-colors duration-300 hover:text-light"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="relative z-10">Submit RFQ</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  Or email direct
                </div>
                <Link
                  href="mailto:sales@appliedmetallurgical.com"
                  className="text-[16px] text-ink transition-colors hover:text-ember"
                >
                  sales@appliedmetallurgical.com
                </Link>
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

type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
};

function Field({ name, label, placeholder, type }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-[11px] tracking-[0.28em] uppercase text-graphite">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="w-full border-b border-ink/20 bg-transparent py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-ember"
        placeholder={placeholder}
      />
    </label>
  );
}

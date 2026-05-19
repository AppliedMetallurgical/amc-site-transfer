import Link from "next/link";

export const metadata = {
  title: "Process — From Your Print to Finished Component",
  description:
    "Six-stage workflow from DFM review through inspection. SolidWorks, 3D-printed pattern development, V-process sand casting, Mastercam CNC, process validation. One shop, one accountability line.",
};

const STEPS = [
  {
    n: "01",
    title: "DFM review",
    body: "Print arrives. Geometry reviewed in SolidWorks for moldability, solidification behavior, and machining strategy. Issues flagged before any tooling spend. Customer iterates with engineering, not with a quote bot.",
    deliverable: "Manufacturability feedback + tooling approach",
  },
  {
    n: "02",
    title: "Pattern development",
    body: "Patterns produced in-house. 3D-printed sand tooling for complex geometry and rapid prototype runs. Hard tooling cut when production volumes justify it. Pattern iteration in days, not weeks.",
    deliverable: "Validated pattern, ready for pour",
  },
  {
    n: "03",
    title: "Gating + risering",
    body: "Engineered gating and risering system designed to control metal flow and solidification. Defect modes (inclusions, porosity, shrink) anticipated and engineered out at the process level.",
    deliverable: "Process plan, defect-controlled",
  },
  {
    n: "04",
    title: "Pour",
    body: "Sand casting, V-process where applicable. Melt chemistry and pour parameters tuned per alloy and part. Controlled solidification, no shortcuts on metallurgy.",
    deliverable: "As-cast part, ±0.030”–±0.125”",
  },
  {
    n: "05",
    title: "Machine",
    body: "Critical features cut on in-house horizontal CNC. Mastercam programming, Fanuc and Mazak controls. Machining strategy planned during DFM so cast geometry supports the finished tolerance.",
    deliverable: "Machined part, ±0.001”–±0.005”",
  },
  {
    n: "06",
    title: "Inspect + ship",
    body: "Process and dimensional validation. First-article and in-process inspection coordinated with production scheduling. Material certs and dimensional reports on the part when it ships.",
    deliverable: "Validated component, documented",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-paper pt-44 pb-32 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite">
              Process
            </div>
            <h1
              className="mt-6 font-serif font-medium leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 108px)" }}
            >
              From your print to finished component.
            </h1>
            <p className="mt-10 max-w-[60ch] text-[20px] leading-relaxed text-ink">
              Six stages, one accountability line. No handoffs to a network of
              subcontractors, no schedule slippage waiting on someone
              else&rsquo;s queue.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="grid grid-cols-12 gap-8 border-t border-rule pt-10"
            >
              <div className="col-span-12 lg:col-span-2">
                <div
                  className="font-serif font-medium leading-[1] tracking-[-0.02em] text-ember"
                  style={{ fontSize: "clamp(3rem, 5vw, 80px)" }}
                >
                  {s.n}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <h2
                  className="font-serif font-medium leading-[1.05] tracking-[-0.02em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 36px)" }}
                >
                  {s.title}
                </h2>
                <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink">
                  {s.body}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-graphite mb-2">
                  Deliverable
                </div>
                <div className="text-[16px] leading-snug text-ink">
                  {s.deliverable}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 border-t border-rule pt-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <h3
                className="font-serif font-medium leading-[1.02] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 56px)" }}
              >
                Want to start at step 01?
              </h3>
              <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-ink">
                Send the print. DFM review is part of the conversation, not a
                separate engagement.
              </p>
            </div>
            <div className="col-span-12 self-end lg:col-span-4 lg:text-right">
              <Link
                href="/rfq"
                className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] tracking-[0.06em] text-paper hover:bg-iron"
              >
                Start an RFQ
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

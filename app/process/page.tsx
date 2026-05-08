const STEPS = [
  {
    n: "01",
    title: "Concept",
    body: "Drawings, 3D models, or napkin sketch — we start where you are. The first call is engineering-to-engineering, not sales-to-buyer.",
  },
  {
    n: "02",
    title: "DFM Review",
    body: "Gating, metallurgy, geometry tuning before a dollar is spent on tooling. Two options, our preference noted, your call.",
  },
  {
    n: "03",
    title: "Sand Tooling",
    body: "3D-printed sand molds for complex geometry; hard tooling when volume justifies it. Tooling decision is data-driven, not default.",
  },
  {
    n: "04",
    title: "Pour",
    body: "Cast iron or steel. V-process zero-draft. Heat, hold, release — under spec, on the schedule we agreed to.",
  },
  {
    n: "05",
    title: "Machine",
    body: "In-house CNC, integrated with the casting cell. Mastercam programming, Fanuc + Mazak controls. ±0.001\"–0.005\".",
  },
  {
    n: "06",
    title: "Inspect & Ship",
    body: "Dimensional verification, material certs on request, packaged for production handling. Your part hits your dock ready to install.",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Process
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              Concept to finished component, on one floor.
            </h1>
          </div>
          <p className="col-span-12 max-w-[60ch] self-end text-base leading-relaxed text-cast lg:col-span-5">
            Six steps. One supplier across casting and machining. Engineering
            judgment at every gate so the second pour matches the first.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-mill/50 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="bg-iron p-10 transition-colors hover:bg-mill/40"
            >
              <div className="mb-6 flex items-baseline gap-3">
                <span
                  className="font-mono text-5xl font-light tabular-nums text-pour/40"
                >
                  {step.n}
                </span>
                <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                  Step
                </span>
              </div>
              <h2 className="mb-4 text-xl font-bold text-paper">{step.title}</h2>
              <p className="max-w-[40ch] text-sm leading-relaxed text-cast">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

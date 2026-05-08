const STEPS = [
  { n: "01", title: "Concept", body: "Drawings, 3D models, or napkin sketch — we start where you are." },
  { n: "02", title: "DFM Review", body: "Gating, metallurgy, geometry tuning before the first dollar is spent on tooling." },
  { n: "03", title: "Sand Tooling", body: "3D-printed sand molds for complex geometry. Hard tooling when volume justifies it." },
  { n: "04", title: "Pour", body: "Cast iron or steel, V-process zero-draft. Heat, hold, release." },
  { n: "05", title: "Machine", body: "In-house CNC integrated with the casting cell. ±0.001\"–0.005\" tolerances." },
  { n: "06", title: "Inspect & Ship", body: "Dimensional verification, material certs on request, packaged for production." },
];

export function ProcessStrip() {
  return (
    <section className="relative border-y border-mill/50 bg-iron py-28 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-4 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Process
            </div>
            <h2 className="font-sans text-4xl font-black leading-[1.0] tracking-[-0.03em] text-paper md:text-5xl">
              Concept to finished component.
            </h2>
          </div>
          <p className="col-span-12 max-w-[60ch] self-end text-cast lg:col-span-6 lg:col-start-7">
            Six steps. One supplier across casting and machining. Engineering judgment at every gate, so the second pour matches the first.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-mill/50 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-iron p-8">
              <div className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-pour">
                Step {step.n}
              </div>
              <h3 className="mb-3 text-xl font-bold text-paper">{step.title}</h3>
              <p className="max-w-[40ch] text-sm leading-relaxed text-cast">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

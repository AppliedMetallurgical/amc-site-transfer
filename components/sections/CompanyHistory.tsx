const HISTORY_POINTS = [
  {
    label: "Late 2019",
    title: "V-process development begins",
    body: "Founder and CEO Bret Hartman began engineering and refining V-process technology to reduce production cost, increase efficiency, and support fully completed component manufacturing.",
  },
  {
    label: "2021",
    title: "Applied Metallurgical opens in Gilmer",
    body: "Production operations were built from the ground up in Gilmer, Texas, with foundry and machining equipment assembled into the new plant.",
  },
  {
    label: "2021–present",
    title: "Casting and machining under one roof",
    body: "The shop combines foundry and machining capabilities into a one-stop manufacturing operation for customers that need completed components, not disconnected vendor handoffs.",
  },
];

const MILESTONES = [
  {
    group: "V-process",
    items: [
      "2021: first successful V-process castings produced.",
      "2022–2025: V-process capacity expanded to three part numbers while production efficiency grew by 200%.",
      "2026: V-process efficiency reached max capacity and plant automation began construction alongside daily production.",
    ],
  },
  {
    group: "Machining + inspection",
    items: [
      "2021: Mazak 8800 installation.",
      "2022: Enshu 4-axis machine dedicated to medical parts begins operation.",
      "2026: inspection department begins clean-room construction for temperature and humidity controlled CMM inspection to .0001\" on machined surfaces.",
    ],
  },
];

export function CompanyHistory() {
  return (
    <section className="bg-paper px-6 py-36 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Company history
            </div>
            <h2
              className="mt-6 font-sans font-black leading-[1] tracking-[-0.03em] text-ink"
              style={{ fontSize: "clamp(2.25rem, 5vw, 72px)" }}
            >
              Built in Gilmer around integrated foundry and machining.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="max-w-[66ch] text-[18px] leading-relaxed text-ink/85">
              Applied Metallurgical was founded in 2021 in Gilmer, Texas. Its operating model was shaped several years earlier when Bret Hartman began refining V-process technology around a vertically integrated shop: cast, machine, inspect, and deliver completed components from one facility.
            </p>
            <p className="mt-6 max-w-[66ch] text-[18px] leading-relaxed text-ink/75">
              That model reduces outside processing, tightens scheduling control, and positions the company for stronger margins than the traditional foundry model. The next planned expansion, Plant 2, is designed for up to 8 tons of castings per day with additional Mazak 8800 machining centers and 36-pallet automation systems.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {HISTORY_POINTS.map((point) => (
            <article key={point.label} className="border-t border-ink/15 pt-6">
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-ember">
                {point.label}
              </div>
              <h3 className="mt-4 font-sans text-[22px] font-bold leading-tight tracking-[-0.015em] text-ink">
                {point.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-28 grid grid-cols-12 gap-8 border-t border-ink/15 pt-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ember">
              Milestones
            </div>
            <h3
              className="mt-6 font-sans font-black leading-[1.05] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 42px)" }}
            >
              Capacity, automation, and inspection.
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {MILESTONES.map((group) => (
                <article key={group.group} className="border-t border-ink/15 pt-6">
                  <h4 className="font-sans text-[18px] font-bold text-ink">
                    {group.group}
                  </h4>
                  <ul className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="text-[15px] leading-relaxed text-ink/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

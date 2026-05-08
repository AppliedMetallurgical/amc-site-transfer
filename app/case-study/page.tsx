export default function CaseStudyPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              Case study · anonymized
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              A complex casting, re-engineered to ship in half the lead time.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="border-t border-mill/60 pt-6">
              <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                Industry
              </div>
              <div className="text-base text-paper">Heavy Equipment</div>
            </div>
            <div className="mt-8 border-t border-mill/60 pt-6">
              <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                Component
              </div>
              <div className="text-base text-paper">
                Cast iron hydraulic housing, 280 lbs
              </div>
            </div>
            <div className="mt-8 border-t border-mill/60 pt-6">
              <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                Engagement
              </div>
              <div className="text-base text-paper">
                DFM consult + V-process casting + CNC finishing
              </div>
            </div>
            <div className="mt-8 border-t border-mill/60 pt-6">
              <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-steel">
                Outcome
              </div>
              <div className="text-base text-paper">
                Lead time cut 6 weeks → 3 weeks. Scrap rate under 2%. Part
                shipped to customer dock production-ready.
              </div>
            </div>
          </div>

          <div className="col-span-12 space-y-12 lg:col-span-8">
            <section>
              <div className="mb-3 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                The brief
              </div>
              <p className="max-w-[64ch] text-base leading-relaxed text-cast">
                A heavy-equipment OEM needed a hydraulic housing with internal
                geometry their current foundry kept fighting. The part was
                pouring with porosity in two locations and required hand-grind
                cleanup on every casting.
              </p>
            </section>

            <section>
              <div className="mb-3 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                What we did
              </div>
              <p className="max-w-[64ch] text-base leading-relaxed text-cast">
                Reviewed the print. Re-gated for directional solidification.
                Switched to 3D-printed sand tooling so we could iterate on the
                first three pours without committing to hard tooling. Brought
                machining in-house so the part wouldn&rsquo;t handle three
                shipping legs between supplier nodes.
              </p>
            </section>

            <section>
              <div className="mb-3 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
                The result
              </div>
              <p className="max-w-[64ch] text-base leading-relaxed text-cast">
                Porosity eliminated by pour two. Lead time from PO to delivery
                cut to three weeks. The customer&rsquo;s engineer told us this
                was the first hydraulic housing in their program that hit dock
                without rework.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

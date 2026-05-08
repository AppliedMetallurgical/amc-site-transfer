export default function AboutPage() {
  return (
    <main className="bg-foundry pt-32 pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <div className="mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-pour">
              About
            </div>
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em] text-paper"
              style={{ fontSize: "clamp(2.5rem, 7vw, 92px)" }}
            >
              A 16-person foundry in Gilmer, Texas, run by a metalcasting
              family.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 space-y-10 lg:col-span-7">
            <p className="max-w-[60ch] text-lg leading-relaxed text-paper">
              Applied Metallurgical Corp. is a cast iron and steel foundry with
              an in-house CNC machining cell. We pour parts from 10 to 1,000
              pounds for medical, heavy equipment, and OEM customers.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-cast">
              The company traces its metalcasting lineage back to Universal
              Electric Foundry, founded in Chicago in 1912. Bret Hartman ran
              commercial casting and machining shops for two decades before
              opening AMC in East Texas. He brought the engineering-first
              philosophy with him: every quote starts with DFM, every casting
              starts with a print review, and every part ships under a name on
              the door.
            </p>
            <p className="max-w-[60ch] text-base leading-relaxed text-cast">
              Today the team is 16 people across pattern shop, sand printing,
              pouring, machining, and inspection. We are small on purpose. We
              keep our heads up, we know every part on the floor, and we stay
              close to the customer.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-mill/50">
              <div className="bg-iron p-8">
                <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  Founded
                </div>
                <div className="font-sans text-3xl font-bold text-paper">
                  Lineage 1912
                </div>
              </div>
              <div className="bg-iron p-8">
                <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  Team
                </div>
                <div className="font-sans text-3xl font-bold text-paper">
                  16 people
                </div>
              </div>
              <div className="bg-iron p-8">
                <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  Pour weight
                </div>
                <div className="font-sans text-3xl font-bold text-paper">
                  10–1,000 lbs
                </div>
              </div>
              <div className="bg-iron p-8">
                <div className="mb-2 font-mono text-[10px] tracking-[0.24em] uppercase text-pour">
                  Location
                </div>
                <div className="font-sans text-3xl font-bold text-paper">
                  Gilmer, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-mill/50 bg-foundry">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-6 py-16 md:px-10 lg:px-16">
        <div className="col-span-12 lg:col-span-5">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-10 w-10 bg-paper" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-paper">
              Applied Metallurgical Corp.
            </span>
          </div>
          <p className="max-w-[44ch] text-sm leading-relaxed text-cast">
            Engineered castings and CNC components from a 16-person Texas foundry.
          </p>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <div className="mb-4 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
            Capabilities
          </div>
          <ul className="space-y-2 text-sm text-cast">
            <li>Casting</li>
            <li>CNC Machining</li>
            <li>Engineering &amp; DFM</li>
            <li>Rapid Prototyping</li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <div className="mb-4 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
            Industries
          </div>
          <ul className="space-y-2 text-sm text-cast">
            <li>Medical Equipment</li>
            <li>Heavy Equipment</li>
            <li>Transportation / OEM</li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="mb-4 font-mono text-[11px] tracking-[0.24em] uppercase text-pour">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-cast">
            <li>
              <a href="mailto:sales@appliedmetallurgical.com" className="hover:text-pour">
                sales@appliedmetallurgical.com
              </a>
            </li>
            <li>Gilmer, Texas</li>
          </ul>
        </div>

        <div className="col-span-12 mt-8 flex flex-col gap-2 border-t border-mill/40 pt-6 font-mono text-[11px] tracking-[0.24em] uppercase text-steel md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Applied Metallurgical Corp.</div>
          <div className="text-cast/60">
            Cast iron · Steel · V-process · 3D-printed sand tooling
          </div>
        </div>
      </div>
    </footer>
  );
}

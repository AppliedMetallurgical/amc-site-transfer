import React from "react";
import { Marquee } from "./Marquee";

const CAPABILITIES = [
  "V-PROCESS",
  "CAST IRON",
  "DUCTILE IRON",
  "STEEL",
  "CNC MACHINING",
  "PRECISION CASTING",
  "HEAT TREATMENT",
  "QUALITY CONTROL",
];

export function CapabilityStrip() {
  return (
    <section className="relative border-y border-rule/50 bg-paper py-12 md:py-16">
      <Marquee duration={60} pauseOnHover={false} direction="left" fade fadeAmount={5}>
        {CAPABILITIES.map((capability, index) => (
          <React.Fragment key={capability}>
            <span className="mx-8 font-serif text-3xl tracking-wide text-ink/90 md:text-4xl lg:text-5xl">
              {capability}
            </span>
            {index < CAPABILITIES.length - 1 && (
              <span className="mx-8 font-serif text-3xl text-ember/70 md:text-4xl lg:text-5xl">
                •
              </span>
            )}
          </React.Fragment>
        ))}
        <span className="mx-8 font-serif text-3xl text-ember/70 md:text-4xl lg:text-5xl">
          •
        </span>
      </Marquee>
    </section>
  );
}

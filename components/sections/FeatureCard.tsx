import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/media";

export function FeatureCard() {
  return (
    <section className="bg-paper px-6 pb-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden bg-iron-deep text-light">
          <div className="absolute inset-0 right-auto w-full md:w-[55%]">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              className="object-cover"
              style={{ objectPosition: "center 35%" }}
              sizes="(min-width: 768px) 55vw, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,15,18,0.05) 0%, rgba(15,15,18,0.45) 60%, rgba(15,15,18,0.98) 100%)",
              }}
            />
          </div>

          <div className="relative grid grid-cols-12 gap-6 px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="font-mono text-[12px] tracking-[0.22em] uppercase text-light/60">
                03 · On the floor
              </div>
              <div className="mt-3 h-px w-16 bg-light/40" />
              <h2
                className="mt-8 font-serif font-medium leading-[1.05] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 64px)",
                }}
              >
                Cast iron, poured in Gilmer.
              </h2>
              <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-light/90">
                V-process sand casting and 3D-printed pattern tooling feed our
                in-house horizontal CNC cell. Design review through final
                inspection lives under one roof — one shop, one schedule, one
                accountability line.
              </p>
              <Link
                href="/capabilities"
                className="mt-10 inline-flex items-center gap-3 border-b border-light pb-1 font-sans text-[15px] tracking-[0.04em] text-light hover:border-ember-bright hover:text-ember-bright"
              >
                What we make
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

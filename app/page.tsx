import { ScrollVideoHero } from "@/components/hero/ScrollVideoHero";
import { CapabilitiesPreview } from "@/components/sections/CapabilitiesPreview";
import { ProcessStrip } from "@/components/sections/ProcessStrip";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="block">
      <ScrollVideoHero />
      <CapabilitiesPreview />
      <ProcessStrip />
      <IndustriesGrid />
      <CTA />
    </main>
  );
}

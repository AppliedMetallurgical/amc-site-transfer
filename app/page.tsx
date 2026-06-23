import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Capabilities } from "@/components/sections/Capabilities";
import { Stats } from "@/components/sections/Stats";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { CompanyHistory } from "@/components/sections/CompanyHistory";
import { PartGallery } from "@/components/sections/PartGallery";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="block">
      <Hero />
      <Manifesto />
      <Capabilities />
      <PartGallery />
      <Stats />
      <CompanyHistory />
      <FeatureCard />
      <FooterCTA />
    </main>
  );
}

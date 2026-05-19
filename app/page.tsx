import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Stats } from "@/components/sections/Stats";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { LogoIntro } from "@/components/LogoIntro";

export default function Home() {
  return (
    <>
      <LogoIntro />
      <main className="block">
        <Hero />
        <Manifesto />
        <Stats />
        <FeatureCard />
        <FooterCTA />
      </main>
    </>
  );
}

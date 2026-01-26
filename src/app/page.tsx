import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Programs from "@/components/sections/Programs";
import WhyVikidemy from "@/components/sections/WhyVikdemy";
import Faq from "@/components/sections/faq";
import ProblemSection from "@/components/sections/problem";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Programs />
      <WhyVikidemy />
      <Faq />
    </main>
  );
}

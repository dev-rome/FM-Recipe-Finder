import Hero from "@/sections/Home/Hero";
import Features from "@/sections/Home/Features";
import BuiltForRealLife from "@/sections/Home/BuiltForRealLife";
import Cta from "@/sections/Home/Cta";
import SectionDivider from "@/components/section-divider/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SectionDivider />
      <BuiltForRealLife />
      <Cta />
    </>
  );
}

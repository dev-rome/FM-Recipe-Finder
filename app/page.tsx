import HeroSection from "@/components/hero-section/HeroSection";
import WhatYoullGetSection from "@/components/what-youll-get-section/WhatYoullGetSection";
import BuiltForRealLifeSection from "@/components/built-for-real-life-section/BuiltForRealLifeSection";
import CtaSection from "@/components/cta-section/CtaSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatYoullGetSection />
      <hr className={styles.sectionDivider} />
      <BuiltForRealLifeSection />
      <CtaSection />
    </>
  );
}

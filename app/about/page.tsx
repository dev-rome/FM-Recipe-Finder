import Mission from "@/sections/About/Mission";
import SectionDivider from "@/components/section-divider/SectionDivider";
import WhyWeExist from "@/sections/About/WhyWeExist";
import FoodPhilosophy from "@/sections/About/FoodPhilosophy";
import Cta from "@/sections/Home/Cta";

export default function About() {
  return (
    <>
      <Mission />
      <SectionDivider />
      <WhyWeExist />
      <SectionDivider />
      <FoodPhilosophy />
      <SectionDivider />
      <Cta />
    </>
  );
}

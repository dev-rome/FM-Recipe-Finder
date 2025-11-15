import Image from "next/image";

import LinkButton from "@/components/link-button/LinkButton";
import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import { heroContent } from "@/constants/homeContent";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <Section className={styles.heroSectionWrapper}>
      <Image
        src={heroContent.backgroundPattern.src}
        alt={heroContent.backgroundPattern.alt}
        fill
        className={styles.backgroundSquiggle}
      />
      <Container variant="hero" centerText>
        <h1 className={styles.heading}>
          <span className={styles.headingHighlight}>
            {heroContent.titleHighlight}
          </span>{" "}
          {heroContent.titleRest}
        </h1>
        <p className={styles.description}>{heroContent.description}</p>
        <div className={styles.buttonWrapper}>
          <LinkButton
            label={heroContent.buttonLabel}
            href={heroContent.buttonHref}
            variant="secondary"
          />
        </div>
      </Container>
      <Container variant="full" className={styles.card}>
        <ResponsiveImage
          smallSrc={heroContent.heroImage.small}
          largeSrc={heroContent.heroImage.large}
          alt={heroContent.heroImage.alt}
          width={heroContent.heroImage.width}
          height={heroContent.heroImage.height}
          className={styles.cardImage}
        />
      </Container>
    </Section>
  );
};

export default HeroSection;

import Image from "next/image";

import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";

import styles from "./Mission.module.css";

const Mission = () => {
  return (
    <Section>
      <Container>
        <div className="relative flex flex-col gap-10 md:gap-16 xl:flex-row">
          <div className={styles.patternSquiggleContainer}>
            <Image
              src="/images/pattern-squiggle-2.svg"
              alt="pattern"
              fill
              className={styles.patternSquiggle}
            />
          </div>
          <div className="flex flex-col xl:self-center">
            <h2 className={styles.ourMissionTitle}>Our mission</h2>
            <h1 className={styles.ourMissionHeading}>
              Help more people cook nourishing meals, more often.
            </h1>
            <p className={styles.ourMissionDescription}>
              Healthy Recipe Finder was created to prove that healthy eating
              can be convenient, affordable, and genuinely delicious.
            </p>
            <p className={styles.ourMissionDescription}>
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <ResponsiveImage
            smallSrc="/images/image-about-our-mission-small.webp"
            largeSrc="/images/image-about-our-mission-large.webp"
            alt="About Our Mission"
            width={1200}
            height={530}
            className={styles.ourMissionImage}
            priority={true}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Mission;


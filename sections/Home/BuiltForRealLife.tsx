import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import { builtForRealLifeContent } from "@/constants/homeContent";

import styles from "./BuiltForRealLife.module.css";

const BuiltForRealLife = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-y-8 md:gap-y-10 lg:flex-row lg:gap-x-12">
          <div className="lg:self-center">
            <h2 className={styles.realLifeTitle}>
              {builtForRealLifeContent.title}
            </h2>
            {builtForRealLifeContent.paragraphs.map((paragraph) => {
              if (paragraph.highlight) {
                return (
                  <p
                    key={paragraph.id}
                    className={`${styles.realLifeDescription} ${
                      paragraph.isFirst ? styles.realLifeDescriptionMargin : ""
                    }`}
                  >
                    {paragraph.text}{" "}
                    <span className={styles.realLifeDescriptionHighlight}>
                      {paragraph.highlight}
                    </span>
                    {paragraph.highlightAfter}
                  </p>
                );
              }
              return (
                <p key={paragraph.id} className={styles.realLifeDescription}>
                  {paragraph.text}
                </p>
              );
            })}
          </div>
          <ResponsiveImage
            smallSrc={builtForRealLifeContent.image.small}
            largeSrc={builtForRealLifeContent.image.large}
            alt={builtForRealLifeContent.image.alt}
            width={builtForRealLifeContent.image.width}
            height={builtForRealLifeContent.image.height}
            className={styles.realLifeImage}
          />
        </div>
      </Container>
    </Section>
  );
};

export default BuiltForRealLife;


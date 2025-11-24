import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";
import { beyondThePlate } from "@/data/aboutContent";

import styles from "./BeyondThePlate.module.css";

const BeyondThePlate = () => {
  return (
    <Section>
      <Container>
        <div className="relative flex flex-col gap-8 md:gap-10 xl:flex-row xl:gap-12">
          <div className="flex flex-col xl:self-center">
            <h2 className={styles.beyondThePlateTitle}>
              {beyondThePlate.title}
            </h2>
            <p className={styles.beyondThePlateDescription}>
              {beyondThePlate.description}
            </p>
            <ul className={styles.pointsList}>
              {beyondThePlate.points.map((point) => (
                <li key={point.id} className={styles.pointItem}>
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
          <ResponsiveImage
            smallSrc={beyondThePlate.image.small}
            largeSrc={beyondThePlate.image.large}
            alt={beyondThePlate.image.alt}
            width={beyondThePlate.image.width}
            height={beyondThePlate.image.height}
            className={styles.beyondThePlateImage}
            priority={true}
          />
        </div>
      </Container>
    </Section>
  );
};

export default BeyondThePlate;

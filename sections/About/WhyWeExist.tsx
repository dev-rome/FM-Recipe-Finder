import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import AboutItem from "./AboutItem";
import { whyWeExistItems } from "@/data/aboutContent";

import styles from "./AboutSection.module.css";

const WhyWeExist = () => {
  return (
    <Section>
      <Container variant="sectionTitle" className={styles.sectionTitle}>
        <h2>Why we exist</h2>
      </Container>
      <Container variant="itemsGrid" className={styles.itemsGrid}>
        {whyWeExistItems.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </Container>
    </Section>
  );
};

export default WhyWeExist;

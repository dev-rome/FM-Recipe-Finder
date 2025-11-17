import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import AboutItem from "./AboutItem";
import { foodPhilosophyItems } from "@/data/aboutContent";

import styles from "./AboutSection.module.css";

const FoodPhilosophy = () => {
  return (
    <Section>
      <Container variant="sectionTitle" className={styles.sectionTitle}>
        <h2>Our food philosophy</h2>
      </Container>
      <Container variant="itemsGrid" className={styles.itemsGrid}>
        {foodPhilosophyItems.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </Container>
    </Section>
  );
};

export default FoodPhilosophy;

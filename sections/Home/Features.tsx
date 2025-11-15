import FeaturesItem from "./FeaturesItem";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import { whatYoullGetItems } from "@/data/whatYoullGetItems";
import { whatYoullGetContent } from "@/constants/homeContent";

import styles from "./Features.module.css";

const Features = () => {
  return (
    <Section spacing>
      <Container centerText>
        <h2 className={styles.featuresTitle}>{whatYoullGetContent.title}</h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {whatYoullGetItems.map((item) => (
            <FeaturesItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;


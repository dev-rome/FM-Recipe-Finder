import Section from "@/components/section/Section";
import Container from "@/components/container/Container";

import styles from "./RecipesHero.module.css";

const RecipesHero = () => {
  return (
    <Section>
      <Container variant="hero" centerText>
        <h1 className={styles.heading}>Explore our simple, healthy recipes</h1>
        <p className={styles.description}>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </Container>
    </Section>
  );
};

export default RecipesHero;

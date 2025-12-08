import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import RecipesList from "./RecipesList";

const RecipesGrid = () => {
  return (
    <Section>
      <Container>
        <RecipesList />
      </Container>
    </Section>
  );
};

export default RecipesGrid;

import Container from "@/components/container/Container";
import Section from "@/components/section/Section";

import RecipeCard from "@/components/recipe/RecipeCard";
import { recipes } from "@/data/recipes";

import styles from "./MoreRecipes.module.css";

interface MoreRecipesProps {
  currentRecipeSlug: string;
}

const MoreRecipes = ({ currentRecipeSlug }: MoreRecipesProps) => {
  // Filter out current recipe and shuffle the array
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.slug !== currentRecipeSlug,
  );

  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...filteredRecipes];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const otherRecipes = shuffled.slice(0, 3);

  return (
    <Section>
      <Container>
        <h2 className={styles.sectionTitle}>More recipes</h2>
        <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-3">
          {otherRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MoreRecipes;

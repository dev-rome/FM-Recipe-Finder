import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import RecipeBreadcrumb from "@/components/recipe-page/RecipeBreadcrumb";
import RecipeImage from "@/components/recipe-page/RecipeImage";
import RecipeDetails from "@/components/recipe-page/RecipeDetails";
import RecipeIngredients from "@/components/recipe-page/RecipeIngredients";
import RecipeInstructions from "@/components/recipe-page/RecipeInstructions";

import { Recipe } from "@/data/recipes";

interface RecipePageProps {
  recipe: Recipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
  const {
    title,
    image,
    overview,
    servings,
    prepMinutes,
    cookMinutes,
    ingredients,
    instructions,
  } = recipe;

  return (
    <Section>
      <Container>
        <RecipeBreadcrumb title={title} />
        <div className="flex flex-col gap-10 lg:flex-row">
          <RecipeImage title={title} image={image} />
          <div className="flex flex-col gap-5">
            <RecipeDetails
              title={title}
              overview={overview}
              servings={servings}
              prepMinutes={prepMinutes}
              cookMinutes={cookMinutes}
            />
            <RecipeIngredients ingredients={ingredients} />
            <RecipeInstructions instructions={instructions} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RecipePage;

import RecipeCard from "@/components/recipe/RecipeCard";

import { Recipe } from "@/data/recipes";

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList = ({ recipes }: RecipesListProps) => {
  if (recipes.length === 0) {
    return (
      <div className="mb-10 text-center lg:mb-24">
        <p className="font-nunito-sans text-lg text-neutral-600">
          No recipes found. Try adjusting your search.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;

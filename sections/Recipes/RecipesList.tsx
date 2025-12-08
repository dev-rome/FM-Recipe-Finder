import RecipeCard from "@/components/recipe/RecipeCard";

import { recipes } from "@/data/recipes";

const RecipesList = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;

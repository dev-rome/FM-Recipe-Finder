import recipesData from "./data.json";

export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: {
    large: string;
    small: string;
  };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = recipesData as Recipe[];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getAllRecipes(): Recipe[] {
  return recipes;
}

"use client";

import { useMemo } from "react";

import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import RecipesList from "./RecipesList";

import { recipes, Recipe } from "@/data/recipes";

interface RecipesGridProps {
  searchQuery: string;
  prepTime: string;
  cookTime: string;
}

const RecipesGrid = ({ searchQuery, prepTime, cookTime }: RecipesGridProps) => {
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((recipe: Recipe) => {
        // Search in title
        const titleMatch = recipe.title.toLowerCase().includes(query);

        // Search in ingredients
        const ingredientMatch = recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query),
        );

        return titleMatch || ingredientMatch;
      });
    }

    // Filter by prep time
    if (prepTime) {
      const maxPrepTime = parseInt(prepTime, 10);
      filtered = filtered.filter(
        (recipe: Recipe) => recipe.prepMinutes <= maxPrepTime,
      );
    }

    // Filter by cook time
    if (cookTime) {
      const maxCookTime = parseInt(cookTime, 10);
      filtered = filtered.filter(
        (recipe: Recipe) => recipe.cookMinutes <= maxCookTime,
      );
    }

    return filtered;
  }, [searchQuery, prepTime, cookTime]);

  return (
    <Section>
      <Container>
        <RecipesList recipes={filteredRecipes} />
      </Container>
    </Section>
  );
};

export default RecipesGrid;

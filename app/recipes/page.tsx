import RecipesHero from "@/sections/Recipes/RecipesHero";
import RecipesFilters from "@/sections/Recipes/RecipesFilters";
import RecipesGrid from "@/sections/Recipes/RecipesGrid";
import SectionDividerLg from "@/components/section-divider/SectionDividerLg";

export default function Recipes() {
  return (
    <>
      <RecipesHero />
      <RecipesFilters />
      <RecipesGrid />
      <SectionDividerLg />
    </>
  );
}

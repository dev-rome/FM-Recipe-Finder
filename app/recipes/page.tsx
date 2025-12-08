import RecipesHero from "@/sections/Recipes/RecipesHero";
import RecipesFilters from "@/sections/Recipes/RecipesFilters";
import RecipesGrid from "@/sections/Recipes/RecipesGrid";
import FooterDivider from "@/components/section-divider/FooterDivider";

export default function Recipes() {
  return (
    <>
      <RecipesHero />
      <RecipesFilters />
      <RecipesGrid />
      <FooterDivider />
    </>
  );
}

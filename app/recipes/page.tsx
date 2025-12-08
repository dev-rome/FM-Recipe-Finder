import RecipesHero from "@/sections/Recipes/RecipesHero";
import RecipesFilters from "@/sections/Recipes/RecipesFilters";
import RecipesGrid from "@/sections/Recipes/RecipesGrid";
import FooterDivider from "@/components/section-divider/FooterDivider";

interface RecipesPageProps {
  searchParams: Promise<{
    search?: string;
    prepTime?: string;
    cookTime?: string;
  }>;
}

export default async function Recipes({ searchParams }: RecipesPageProps) {
  const params = await searchParams;
  const searchQuery = params.search || "";
  const prepTime = params.prepTime || "";
  const cookTime = params.cookTime || "";

  return (
    <>
      <RecipesHero />
      <RecipesFilters />
      <RecipesGrid
        searchQuery={searchQuery}
        prepTime={prepTime}
        cookTime={cookTime}
      />
      <FooterDivider />
    </>
  );
}

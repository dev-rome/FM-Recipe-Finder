import { notFound } from "next/navigation";

import { getRecipeBySlug } from "@/data/recipes";

import RecipePageSection from "@/sections/RecipePage/RecipePage";
import MoreRecipes from "@/sections/RecipePage/MoreRecipes";
import SectionDivider from "@/components/section-divider/SectionDivider";
import FooterDivider from "@/components/section-divider/FooterDivider";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) notFound();

  return (
    <>
      <RecipePageSection recipe={recipe} />
      <SectionDivider />
      <MoreRecipes currentRecipeSlug={recipe.slug} />
      <FooterDivider />
    </>
  );
}

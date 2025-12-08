import { Recipe } from "@/data/recipes";

import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";
import LinkButton from "@/components/link-button/LinkButton";
import RecipeInfo from "./RecipeInfo";

import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const {
    title,
    image: { small, large },
    overview,
    servings,
    prepMinutes,
    cookMinutes,
    slug,
  } = recipe;

  return (
    <article className={`${styles.recipeCard} flex flex-col gap-4`}>
      <div className="flex flex-1 flex-col gap-3">
        <ResponsiveImage
          smallSrc={small}
          largeSrc={large}
          alt={title}
          width={360}
          height={300}
          priority
          className={styles.recipeCardImage}
        />

        <header className="flex flex-col gap-2">
          <h3 className={styles.recipeCardTitle}>{title}</h3>
          <p className={styles.recipeCardDescription}>{overview}</p>
        </header>

        <RecipeInfo
          servings={servings}
          prepMinutes={prepMinutes}
          cookMinutes={cookMinutes}
        />
      </div>
      <footer>
        <LinkButton
          label="View Recipe"
          href={`/recipes/${slug}`}
          variant="viewRecipe"
        />
      </footer>
    </article>
  );
};

export default RecipeCard;

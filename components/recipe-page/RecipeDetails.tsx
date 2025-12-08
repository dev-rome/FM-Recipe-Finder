import RecipeInfo from "@/components/recipe/RecipeInfo";

import styles from "./RecipeDetails.module.css";

interface RecipeDetailsProps {
  title: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}

const RecipeDetails = ({
  title,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
}: RecipeDetailsProps) => {
  return (
    <>
      <h1 className={styles.recipeTitle}>{title}</h1>
      <p className={styles.recipeDescription}>{overview}</p>
      <RecipeInfo
        servings={servings}
        prepMinutes={prepMinutes}
        cookMinutes={cookMinutes}
        className={styles.recipeInfo}
        liClassName={styles.recipeInfoItem}
      />
    </>
  );
};

export default RecipeDetails;

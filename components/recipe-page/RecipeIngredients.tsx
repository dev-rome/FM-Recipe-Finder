import Image from "next/image";

import styles from "./RecipeIngredients.module.css";

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className={styles.recipeIngredientsTitle}>Ingredients</h2>
      <ul className={styles.recipeIngredientsList}>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className={styles.recipeIngredientItem}>
            <Image
              src="/images/icon-bullet-point.svg"
              alt=""
              width={20}
              height={20}
              className={styles.recipeIngredientBullet}
              aria-hidden="true"
            />
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;

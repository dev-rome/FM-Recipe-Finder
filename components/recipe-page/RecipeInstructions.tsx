import Image from "next/image";

import styles from "./RecipeInstructions.module.css";

interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className={styles.recipeInstructionsTitle}>Instructions</h2>
      <ul className={styles.recipeInstructionsList}>
        {instructions.map((instruction, index) => (
          <li key={index} className={styles.recipeInstructionItem}>
            <Image
              src="/images/icon-bullet-point.svg"
              alt=""
              width={20}
              height={20}
              className={styles.recipeInstructionBullet}
              aria-hidden="true"
            />
            <span>{instruction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeInstructions;

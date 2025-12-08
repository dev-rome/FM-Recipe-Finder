import ResponsiveImage from "@/components/responsive-image/ResponsiveImage";

import styles from "./RecipeImage.module.css";

interface RecipeImageProps {
  title: string;
  image: {
    small: string;
    large: string;
  };
}

const RecipeImage = ({ title, image: { small, large } }: RecipeImageProps) => {
  return (
    <div className={styles.recipeImageContainer}>
      <ResponsiveImage
        smallSrc={small}
        largeSrc={large}
        alt={title}
        fill
        priority
        className={styles.recipeImage}
      />
    </div>
  );
};

export default RecipeImage;

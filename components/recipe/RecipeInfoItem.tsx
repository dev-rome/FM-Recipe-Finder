import Image from "next/image";

import styles from "./RecipeInfoItem.module.css";

interface RecipeInfoItemProps {
  icon: string;
  iconAlt: string;
  label: string;
  className?: string;
}

const RecipeInfoItem = ({
  icon,
  iconAlt,
  label,
  className,
}: RecipeInfoItemProps) => {
  return (
    <div className={`${styles.recipeInfoItem} ${className || ""}`}>
      <Image
        src={icon}
        alt={iconAlt}
        width={19}
        height={20}
        aria-hidden="true"
      />
      <span className={styles.recipeInfoItemText}>{label}</span>
    </div>
  );
};

export default RecipeInfoItem;

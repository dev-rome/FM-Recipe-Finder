import Link from "next/link";

import styles from "./RecipeBreadcrumb.module.css";

interface RecipeBreadcrumbProps {
  title: string;
}

const RecipeBreadcrumb = ({ title }: RecipeBreadcrumbProps) => {
  return (
    <div className="mb-4 flex items-center gap-1">
      <Link className={styles.recipeLink} href="/recipes">
        Recipes
      </Link>
      <span className={styles.recipeLinkSeparator}> / </span>
      <span className={styles.recipeText}>{title}</span>
    </div>
  );
};

export default RecipeBreadcrumb;

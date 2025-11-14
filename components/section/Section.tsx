import { ReactNode } from "react";

import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: boolean;
}

const Section = ({
  children,
  className = "",
  spacing = false,
}: SectionProps) => {
  const sectionClasses = [
    styles.section,
    spacing ? styles.sectionSpacing : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <section className={sectionClasses}>{children}</section>;
};

export default Section;

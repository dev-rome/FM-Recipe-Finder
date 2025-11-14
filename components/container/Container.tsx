import { ReactNode } from "react";

import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "full" | "content" | "hero";
  centerText?: boolean;
}

const Container = ({
  children,
  className = "",
  variant = "full",
  centerText = false,
}: ContainerProps) => {
  const containerClasses = [
    styles.container,
    styles[variant],
    centerText ? styles.centerText : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={containerClasses}>{children}</div>;
};

export default Container;

import Link from "next/link";

import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  children?: React.ReactNode;
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "cta";
}

const LinkButton = ({
  children,
  label,
  href,
  variant = "primary",
}: LinkButtonProps) => {
  const content = children ?? label;

  return (
    <Link
      href={href}
      aria-label={label}
      className={`${styles.linkButton} ${styles[variant]}`}
    >
      {content}
    </Link>
  );
};

export default LinkButton;

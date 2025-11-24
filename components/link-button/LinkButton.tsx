import Link from "next/link";

import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  children?: React.ReactNode;
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "cta";
  onClick?: () => void;
}

const LinkButton = ({
  children,
  label,
  href,
  variant = "primary",
  onClick,
}: LinkButtonProps) => {
  const content = children ?? label;

  return (
    <Link
      href={href}
      aria-label={label}
      className={`${styles.linkButton} ${styles[variant]}`}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default LinkButton;

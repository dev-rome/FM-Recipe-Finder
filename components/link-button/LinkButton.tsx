import Link from "next/link";

import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

const LinkButton = ({
  children,
  label,
  href,
  variant = "primary",
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`${styles.linkButton} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

import Link from "next/link";
import styles from "./LinkButton.module.css";

const LinkButton = ({
  children,
  label,
  href,
  variant = "primary",
}: {
  children: string;
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}) => {
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

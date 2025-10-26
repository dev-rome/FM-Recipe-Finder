import Link from "next/link";
import styles from "./LinkButton.module.css";

const LinkButton = ({
  children,
  label,
  href,
}: {
  children: string;
  label: string;
  href: string;
}) => {
  return (
    <Link href={href} aria-label={label} className={styles.linkButton} >
      {children}
    </Link>
  );
};

export default LinkButton;

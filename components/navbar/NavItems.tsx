import Link from "next/link";
import styles from "./NavItems.module.css";

const NavItems = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: string;
  isActive: boolean;
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItems;

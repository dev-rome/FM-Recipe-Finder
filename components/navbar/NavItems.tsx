import Link from "next/link";

import styles from "./NavItems.module.css";

interface NavItemsProps {
  href: string;
  children: string;
  isActive: boolean;
}

const NavItems = ({ href, children, isActive }: NavItemsProps) => {
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

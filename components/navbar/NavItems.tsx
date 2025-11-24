import Link from "next/link";

import styles from "./NavItems.module.css";

interface NavItemsProps {
  href: string;
  children: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItems = ({ href, children, isActive, onClick }: NavItemsProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItems;

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import LinkButton from "../link-button/LinkButton";
import NavItems from "./NavItems";
import { navLinks } from "@/constants/navigation";

import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className={`hidden items-center justify-between xl:flex ${styles.nav}`}
    >
      <Image
        src="/images/logo.svg"
        alt="Recipe Finder Logo"
        width={260}
        height={40}
      />
      <ul className={`flex ${styles.navList}`}>
        {navLinks.map((link) => (
          <NavItems
            key={link.href}
            href={link.href}
            isActive={pathname === link.href}
          >
            {link.children}
          </NavItems>
        ))}
      </ul>
      <LinkButton label="Browse recipes" href="/recipes">
        Browse recipes
      </LinkButton>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

import LinkButton from "../link-button/LinkButton";
import NavItems from "./NavItems";
import { navLinks } from "@/constants/navigation";

import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`relative flex items-center justify-between xl:hidden ${styles.nav}`}
    >
      <Image
        src="/images/logo.svg"
        alt="Recipe Finder Logo"
        width={242}
        height={32}
      />
      <button
        className={`flex items-center justify-center ${styles.menuButton}`}
        onClick={handleToggle}
      >
        <Image
          src="/images/icon-hamburger-menu.svg"
          alt="Hamburger Icon"
          width={18}
          height={16}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full right-4 left-4 z-10 md:right-8 md:left-8 ${styles.dropdown}`}
        >
          <ul className={`flex flex-col ${styles.dropdownList}`}>
            {navLinks.map((link) => (
              <NavItems key={link.href} href={link.href} isActive={false}>
                {link.children}
              </NavItems>
            ))}
          </ul>
          <LinkButton label="Browse recipes" href="/recipes">
            Browse recipes
          </LinkButton>
        </div>
      )}
    </nav>
  );
}

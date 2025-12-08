"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`relative flex items-center justify-between min-[1025px]:hidden ${styles.nav}`}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Recipe Finder Logo"
          width={242}
          height={32}
        />
      </Link>
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
              <NavItems
                key={link.href}
                href={link.href}
                isActive={false}
                onClick={closeMenu}
              >
                {link.children}
              </NavItems>
            ))}
          </ul>
          <LinkButton
            label="Browse recipes"
            href="/recipes"
            onClick={closeMenu}
          />
        </div>
      )}
    </nav>
  );
}

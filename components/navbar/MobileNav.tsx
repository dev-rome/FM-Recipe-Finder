"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constants/navigation";
import NavItems from "./NavItems";
import LinkButton from "../link-button/LinkButton";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="relative flex items-center justify-between border-b border-(--neutral-300) px-(--spacing-200) py-(--spacing-250) lg:hidden">
      <Image
        src="/images/logo.svg"
        alt="Recipe Finder Logo"
        width={242}
        height={32}
      />
      <button
        className="flex h-(--spacing-500) w-(--spacing-500) items-center justify-center bg-(--neutral-300)"
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
        <div className="absolute top-full right-4 left-4 rounded-(--radius-8) bg-(--neutral-0) p-(--spacing-100) shadow-[0_12px_22px_-12px_rgba(57,88,82,0.3)] md:right-8 md:left-8">
          <ul className="flex flex-col gap-(--spacing-250)">
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

export interface NavLink {
  href: string;
  children: string;
  label?: string; // For accessibility
}

export const navLinks: NavLink[] = [
  {
    href: "/",
    children: "Home",
    label: "Navigate to home page",
  },
  {
    href: "/about",
    children: "About",
    label: "Learn more about our recipe finder",
  },
  {
    href: "/recipes",
    children: "Recipes",
    label: "Browse all available recipes",
  },
];

// You can also add other navigation-related constants here
export const footerLinks: NavLink[] = [
  {
    href: "/privacy",
    children: "Privacy Policy",
  },
  {
    href: "/terms",
    children: "Terms of Service",
  },
  {
    href: "/contact",
    children: "Contact Us",
  },
];


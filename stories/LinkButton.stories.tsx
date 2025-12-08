import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import LinkButton from "../components/link-button/LinkButton";

const meta = {
  component: LinkButton,
  title: "LinkButton",
  tags: ["autodocs"],
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BrowseRecipes: Story = {
  args: {
    children: "Browse recipes",
    label: "Browse all available recipes",
    href: "/recipes",
  },
};

export const StartExploring: Story = {
  args: {
    children: "Start exploring",
    label: "Start exploring recipes",
    href: "/recipes",
    variant: "secondary",
  },
};


export const ViewRecipe: Story = {
  args: {
    children: "View recipe",
    label: "View recipe",
    href: "/recipes/one-pan-lemon-garlic-salmon-with-asparagus",
    variant: "viewRecipe",
  },
};
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NavItems from "../components/navbar/NavItems";

const meta = {
  component: NavItems,
  title: "Navigation/NavItems",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
      control: "text",
      description: "The URL to navigate to",
    },
    children: {
      control: "text",
      description: "The text content of the navigation item",
    },
    isActive: {
      control: "boolean",
      description: "Whether this navigation item is currently active",
    },
  },
} satisfies Meta<typeof NavItems>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    href: "/",
    children: "Home",
    isActive: false,
  },
};

export const HomeActive: Story = {
  args: {
    href: "/",
    children: "Home",
    isActive: true,
  },
};

export const About: Story = {
  args: {
    href: "/about",
    children: "About",
    isActive: false,
  },
};

export const AboutActive: Story = {
  args: {
    href: "/about",
    children: "About",
    isActive: true,
  },
};

export const Recipes: Story = {
  args: {
    href: "/recipes",
    children: "Recipes",
    isActive: false,
  },
};

export const RecipesActive: Story = {
  args: {
    href: "/recipes",
    children: "Recipes",
    isActive: true,
  },
};

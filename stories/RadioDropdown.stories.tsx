import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RadioDropdown from "../components/radio-dropdown/RadioDropdown";

const meta = {
  component: RadioDropdown,
  title: "Components/RadioDropdown",
  tags: ["autodocs"],
} satisfies Meta<typeof RadioDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MaxPrepTime: Story = {
  args: {
    label: "Max Prep Time",
    options: [
      { label: "0 minutes", value: "0" },
      { label: "5 minutes", value: "5" },
      { label: "10 minutes", value: "10" },
      { label: "15 minutes", value: "15" },
    ],
  },
};

export const MaxCookTime: Story = {
  args: {
    label: "Max Cook Time",
    options: [
      { label: "0 minutes", value: "0" },
      { label: "5 minutes", value: "5" },
      { label: "10 minutes", value: "10" },
      { label: "15 minutes", value: "15" },
      { label: "20 minutes", value: "20" },
    ],
  },
};


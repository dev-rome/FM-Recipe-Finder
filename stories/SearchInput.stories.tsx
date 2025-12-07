import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchInput } from "../components/search-input/SearchInput";

const meta = {
  component: SearchInput,
  title: "Components/SearchInput",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search by name or ingredient…",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Search by name or ingredient…",
    defaultValue: "chicken",
  },
};


import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Navbar from "../components/navbar/Navbar";

const meta = {
  component: Navbar,
  title: "Navigation/Navbar",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
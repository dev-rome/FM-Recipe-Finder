import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MobileNav from "../components/navbar/MobileNav";

const meta = {
  component: MobileNav,
  title: "Navigation/MobileNav",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof MobileNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

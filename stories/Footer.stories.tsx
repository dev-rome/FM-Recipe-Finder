import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Footer from "../components/footer/Footer";

const meta = {
  component: Footer,
  title: "Layout/Footer",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};



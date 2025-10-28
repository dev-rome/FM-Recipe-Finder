import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import DesktopNav from "../components/navbar/DesktopNav";

const meta = {
  component: DesktopNav,
  title: "Navigation/DesktopNav",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof DesktopNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

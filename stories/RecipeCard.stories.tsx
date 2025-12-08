import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import RecipeCard from "../components/recipe/RecipeCard";
import { getRecipeBySlug, recipes } from "../data/recipes";

const meta = {
  component: RecipeCard,
  title: "Components/RecipeCard",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RecipeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipe: recipes[0],
  },
};

export const MediterraneanChickpeaSalad: Story = {
  args: {
    recipe: getRecipeBySlug("mediterranean-chickpea-salad") || recipes[0],
  },
};

export const LongTitle: Story = {
  args: {
    recipe: {
      ...recipes[0],
      title:
        "This is a very long recipe title that should truncate with ellipsis",
    },
  },
};

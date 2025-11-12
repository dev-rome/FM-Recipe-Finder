type WhatYoullGetItemLayout = "first" | "second" | "third";

export interface WhatYoullGetItemData {
  id: number;
  image: string;
  title: string;
  description: string;
  layout: WhatYoullGetItemLayout;
  imageSize?: {
    width: number;
    height: number;
  };
}

export const whatYoullGetItems: WhatYoullGetItemData[] = [
  {
    id: 1,
    image: "/images/icon-whole-food-recipes.svg",
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
    layout: "first",
    imageSize: {
      width: 23,
      height: 32,
    },
  },
  {
    id: 2,
    image: "/images/icon-minimum-fuss.svg",
    title: "Minimum fuss",
    description:
      "All recipes are designed to make eating healthy quick and easy.",
    layout: "second",
    imageSize: {
      width: 40,
      height: 41,
    },
  },
  {
    id: 3,
    image: "/images/icon-search-in-seconds.svg",
    title: "Search in seconds",
    description:
      "Filter by name or ingredient and jump straight to the recipe you need.",
    layout: "third",
    imageSize: {
      width: 40,
      height: 40,
    },
  },
];

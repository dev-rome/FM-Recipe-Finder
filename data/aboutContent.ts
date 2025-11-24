export interface AboutItem {
  id: number;
  icon?: string;
  iconSize?: {
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

export const whyWeExistItems: AboutItem[] = [
  {
    id: 1,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Cut through the noise.",
    description:
      "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking..",
  },
  {
    id: 2,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Empower home kitchens.",
    description:
      "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    id: 3,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Make healthy look good.",
    description:
      "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
  },
];

export const foodPhilosophyItems: AboutItem[] = [
  {
    id: 1,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Whole ingredients first.",
    description:
      "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    id: 2,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Flavor without compromise.",
    description:
      "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    id: 3,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Respect for time.",
    description:
      "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful..",
  },
  {
    id: 4,
    icon: "/images/icon-bullet-point.svg",
    iconSize: {
      width: 32,
      height: 32,
    },
    title: "Sustainable choices.",
    description:
      "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

export const beyondThePlate = {
  title: "Beyond the plate",
  description:
    "We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:",
  points: [
    {
      id: 1,
      text: "Encourage family dinners and social cooking.",
    },
    {
      id: 2,
      text: "Reduce reliance on single-use packaging and delivery waste.",
    },
    {
      id: 3,
      text: "Spark curiosity about seasonal produce and local agriculture.",
    },
  ],
  image: {
    small: "/images/image-about-beyond-the-plate-small.webp",
    large: "/images/image-about-beyond-the-plate-large.webp",
    alt: "Beyond the plate",
    width: 1200,
    height: 800,
  },
};

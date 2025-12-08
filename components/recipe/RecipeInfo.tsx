import RecipeInfoItem from "./RecipeInfoItem";

interface RecipeInfoProps {
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
}

const RecipeInfo = ({
  servings,
  prepMinutes,
  cookMinutes,
}: RecipeInfoProps) => {
  const infoItems = [
    {
      icon: "/images/icon-servings.svg",
      iconAlt: "Serving",
      label: `Servings: ${servings}`,
      itemClassName: "",
    },
    {
      icon: "/images/icon-prep-time.svg",
      iconAlt: "Prep Time",
      label: `Prep: ${prepMinutes} min`,
      itemClassName: "gap-2",
    },
    {
      icon: "/images/icon-cook-time.svg",
      iconAlt: "Cook Time",
      label: `Cook: ${cookMinutes} min`,
      itemClassName: "",
      liClassName: "basis-full md:basis-auto lg:basis-full",
    },
  ];

  return (
    <ul className="flex list-none flex-wrap gap-x-4 gap-y-2 md:flex-nowrap lg:flex-wrap">
      {infoItems.map((item) => (
        <li key={item.iconAlt} className={item.liClassName || ""}>
          <RecipeInfoItem
            icon={item.icon}
            iconAlt={item.iconAlt}
            label={item.label}
            className={item.itemClassName}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipeInfo;

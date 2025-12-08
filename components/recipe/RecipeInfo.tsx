import RecipeInfoItem from "./RecipeInfoItem";

interface RecipeInfoProps {
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  className?: string;
  itemClassName?: string;
  liClassName?: string;
}

const RecipeInfo = ({
  servings,
  prepMinutes,
  cookMinutes,
  className,
  itemClassName,
  liClassName,
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

  const baseClasses = "flex list-none flex-wrap gap-x-4 gap-y-2 md:flex-nowrap";
  const defaultClasses = className ? "" : "lg:flex-wrap";

  return (
    <ul className={`${baseClasses} ${defaultClasses} ${className || ""}`}>
      {infoItems.map((item) => (
        <li
          key={item.iconAlt}
          className={`${item.liClassName || ""} ${liClassName || ""}`}
        >
          <RecipeInfoItem
            icon={item.icon}
            iconAlt={item.iconAlt}
            label={item.label}
            className={`${item.itemClassName} ${itemClassName || ""}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipeInfo;

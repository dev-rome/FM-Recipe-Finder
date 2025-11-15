import Image from "next/image";

import type { WhatYoullGetItemData } from "@/data/whatYoullGetItems";

import styles from "./FeaturesItem.module.css";

type FeaturesItemProps = Omit<WhatYoullGetItemData, "id">;

const FeaturesItem = ({
  image,
  title,
  description,
  layout,
  imageSize,
}: FeaturesItemProps) => {
  const layoutClassName =
    {
      first: styles.itemFirst,
      second: styles.itemSecond,
      third: styles.itemThird,
    }[layout] ?? "";

  const { width, height } = imageSize ?? { width: 48, height: 48 };

  return (
    <div className={`${styles.item} ${layoutClassName}`}>
      <div className={styles.itemInner}>
        <div className={styles.featuresItemImageContainer}>
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className={styles.featuresItemImage}
          />
        </div>
        <h3 className={styles.featuresItemTitle}>{title}</h3>
        <p className={styles.featuresItemDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;


import Image from "next/image";

import type { WhatYoullGetItemData } from "@/data/whatYoullGetItems";

import styles from "./WhatYoullGetItem.module.css";

type WhatYoullGetItemProps = Omit<WhatYoullGetItemData, "id">;

const WhatYoullGetItem = ({
  image,
  title,
  description,
  layout,
  imageSize,
}: WhatYoullGetItemProps) => {
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
        <div className={styles.whatYoullGetItemImageContainer}>
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className={styles.whatYoullGetItemImage}
          />
        </div>
        <h3 className={styles.whatYoullGetItemTitle}>{title}</h3>
        <p className={styles.whatYoullGetItemDescription}>{description}</p>
      </div>
    </div>
  );
};

export default WhatYoullGetItem;

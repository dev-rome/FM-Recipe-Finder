import Image from "next/image";

import styles from "./WhatYoullGetItem.module.css";

interface WhatYoullGetItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  gridSpan: string;
  imageSize: { width: number; height: number };
}

const WhatYoullGetItem = ({
  image,
  title,
  description,
  gridSpan,
  imageSize,
}: WhatYoullGetItemProps) => {
  return (
    <div className={gridSpan}>
      <div className={`flex flex-col text-left`}>
        <div className={styles.whatYoullGetItemImageContainer}>
          <Image
            src={image}
            alt={title}
            width={imageSize.width}
            height={imageSize.height}
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

import Image from "next/image";

import type { AboutItem as AboutItemType } from "@/data/aboutContent";

import styles from "./AboutItem.module.css";

type AboutItemProps = Omit<AboutItemType, "id">;

const AboutItem = ({ icon, iconSize, title, description }: AboutItemProps) => {
  const { width, height } = iconSize ?? { width: 32, height: 32 };

  return (
    <div className={styles.aboutItem}>
      {icon && (
        <div className={styles.iconContainer}>
          <Image
            src={icon}
            alt=""
            width={width}
            height={height}
            className={styles.icon}
          />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AboutItem;

import Image from "next/image";

import LinkButton from "../link-button/LinkButton";

import styles from "./CtaSection.module.css";

const CtaSection = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.patternKnifeContainer}>
        <Image
          src="/images/pattern-knife.svg"
          alt="pattern knife"
          fill
          className={styles.patternKnife}
        />
      </div>

      <div className={styles.patternForkContainer}>
        <Image
          src="/images/pattern-fork.svg"
          alt="pattern fork"
          fill
          className={styles.patternFork}
        />
      </div>
      <div className={styles.ctaSectionContent}>
        <h2 className={styles.ctaSectionHeading}>Ready to cook smarter?</h2>
        <p className={styles.ctaSectionDescription}>
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
      </div>
      <LinkButton label="Browse recipes" href="/recipes" variant="cta" />
    </div>
  );
};

export default CtaSection;

import Image from "next/image";

import LinkButton from "@/components/link-button/LinkButton";

import WhatYoullGetItem from "@/components/what-youll-get/WhatYoullGetItem";
import { whatYoullGetItems } from "@/data/whatYoullGetItems";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className="relative grid w-full grid-cols-1 md:grid-cols-4 xl:grid-cols-12">
        <Image
          src="/images/pattern-squiggle-1.svg"
          alt="Pattern Squiggle"
          fill
          className={styles.backgroundSquiggle}
        />
        <div className="col-span-1 md:col-span-4 xl:col-start-3 xl:col-end-12 xl:text-center">
          <h1 className={styles.heading}>
            <span className={styles.headingHighlight}>Healthy</span> meals, zero
            fuss
          </h1>
          <p className={styles.description}>
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <LinkButton
            label="Start exploring"
            href="/recipes"
            variant="secondary"
          />
        </div>
        <div
          className={`col-span-1 md:col-span-4 xl:col-start-1 xl:col-end-13 ${styles.card}`}
        >
          <picture>
            <source
              srcSet="/images/image-home-hero-small.webp"
              media="(max-width: 1024px)"
            />
            <source
              srcSet="/images/image-home-hero-large.webp"
              media="(min-width: 1025px)"
            />
            <Image
              src="/images/image-home-hero-small.webp"
              alt="Hero Image"
              width={1200}
              height={530}
              className={`h-auto w-full object-cover ${styles.cardImage}`}
            />
          </picture>
        </div>
      </section>

      <section
        className={`${styles.sectionSpacing} grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12`}
      >
        <div className="col-span-1 md:col-span-4 xl:col-start-1 xl:col-end-13 xl:text-center">
          <h2 className={styles.featuresTitle}>What you&apos;ll get</h2>
          <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-12">
            {whatYoullGetItems.map((item) => (
              <WhatYoullGetItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <hr className={styles.sectionDivider} />

      <section className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12">
        <div className="col-span-1 md:col-span-4 xl:col-start-1 xl:col-end-13">
          <div className="flex flex-col gap-y-8 md:gap-y-10 xl:flex-row xl:gap-x-12">
            <div className="xl:self-center">
              <h2 className={styles.realLifeTitle}>Built for real life</h2>
              <p
                className={`${styles.realLifeDescription} ${styles.realLifeDescriptionMargin}`}
              >
                Cooking shouldn’t be complicated. These recipes come in under{" "}
                <span className={styles.realLifeDescriptionHighlight}>
                  30 minutes
                </span>{" "}
                of active time, fit busy schedules, and taste good enough to
                repeat.{" "}
              </p>
              <p className={styles.realLifeDescription}>
                Whether you’re new to the kitchen or just need fresh ideas,
                we’ve got you covered.
              </p>
            </div>
            <picture>
              <source
                srcSet="/images/image-home-real-life-large.webp"
                media="(min-width: 1025px)"
              />
              <source
                srcSet="/images/image-home-real-life-small.webp"
                media="(max-width: 1024px)"
              />
              <Image
                src="/images/image-home-real-life-small.webp"
                alt="home real life image"
                width={1200}
                height={530}
                className={styles.realLifeImage}
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

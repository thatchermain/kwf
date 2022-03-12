import React from "react";
import styles from "../styles/Partners.module.scss";
// import partners from "../data/partners";
import Image from "next/image";
import Partner1 from "../images/Partners/1.png";
import Partner2 from "../images/Partners/2.png";
import Partner3 from "../images/Partners/3.png";
import Partner4 from "../images/Partners/4.png";
import Partner5 from "../images/Partners/5.png";
import Partner6 from "../images/Partners/6.png";
import Partner7 from "../images/Partners/7.png";
import Partner8 from "../images/Partners/8.png";
import Partner9 from "../images/Partners/9.png";
import Partner10 from "../images/Partners/10.png";
import Partner11 from "../images/Partners/11.png";
import Partner12 from "../images/Partners/12.png";

const Partners = () => {
  return (
    <section id="partners" className={`${styles.partners} container`}>
      <h1 className={styles.h1}>Nasi partnerzy</h1>
      <div className={styles.logos}>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner1}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner2}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner3}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner4}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner5}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image src={Partner6} alt="Partner Logo" objectFit="contain" />
        </div>
        <div className={styles.logoWrapper}>
          <Image src={Partner7} alt="Partner Logo" objectFit="contain" />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner8}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner9}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner10}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner11}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
        <div className={styles.logoWrapper}>
          <Image
            src={Partner12}
            alt="Partner Logo"
            layout="fixed"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

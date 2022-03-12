import React from "react";
import Image from "next/image";
import styles from "../styles/News.module.scss";
import newsMagazine from "../images/newsMagazine.png";

const News = () => {
  return (
    <section id="main_topic" className={`${styles.news} container`}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h4 className={styles.h4}>temat numeru</h4>
          <h1 className={styles.h1}>
            Diversity & Inclusion <br />
            czyli o różnorodności w biznesie
          </h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>Rekrutacja bez uprzedzeń</li>
            <li className={styles.listItem}>Pokolenia na rynku pracy</li>
            <li className={styles.listItem}>
              Kobiety, mężczyźni i ich szanse na sukces
            </li>
            <li className={styles.listItem}>
              Praca w międzynarodowych zespołach
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            src={newsMagazine}
            alt="Magazine"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default News;

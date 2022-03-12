import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import HeaderBG from "../images/headerImg2.png";
import BFly from "../images/motyl2.png";
import introBfly from "../images/introBtfly.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <div className={styles.magazine}>
            <Image
              src={HeaderBG}
              alt="Magazine"
              layout="responsive"
              priority={true}
            />
          </div>
          <div className={styles.btfly}>
            <Image src={BFly} alt="Magazine" layout="fixed" />
          </div>
        </div>
        <div className={styles.intro}>
          <h1 className={styles.h1}>
            Nowe wydanie <br /> przewodnika
          </h1>
          <p className={styles.introParagraph}>
            <strong>
              100 stron merytorycznej wiedzy <br /> i inspiracji dla finansistów
            </strong>
          </p>
          <p className={styles.introParagraph}>
            Zamów<strong> bezpłatny </strong>egzemplarz papierowego
            <br /> wydania (zapłacisz jedynie za wysyłkę) lub pobierz
            <br /> przewodnik w formacie PDF (zupełnie za darmo).
          </p>
          <button className={`${styles.introBtn} ${styles.introBtn__green}`}>
            zamów papierowy przewodnik
          </button>
          <button className={`${styles.introBtn} ${styles.introBtn__yellow}`}>
            pobierz pdf
          </button>
          <div className={styles.introBfly}>
            <Image src={introBfly} alt="Magazine" layout="fixed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

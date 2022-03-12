import Image from "next/image";
import React from "react";
import orderButterfly from "../images/orderButterfly.png";
import styles from "../styles/Order.module.scss";

const Order = () => {
  return (
    <section className={`${styles.order} container`}>
      <div className={styles.wrapper}>
        <div className={styles.h1}>Zamów do domu</div>
        <div className={styles.description}>
          Interesuje Cię świat biznesu? Chcesz odnaleźć swoją ścieżkę kariery?
          <br /> W naszym przewodniku znajdziesz nie tylko inspirację, ale
          również wskazówki,
          <br /> jak rozwinąć skrzydła w finansach.
          <br />
          <br /> Zamów <span className={styles.span}>darmowy</span> egzemplarz
          prosto pod Twoje drzwi.
        </div>
        <button className={styles.orderBtn}>zamów</button>
        <div className={styles.orderButterfly}>
          <Image src={orderButterfly} alt="Butterfly" />
        </div>
      </div>
    </section>
  );
};

export default Order;

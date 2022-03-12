import React, { useState } from "react";

import styles from "../styles/MenuMobile.module.scss";
import Accordion from "./Accordion";

const MenuMobile = () => {
  return (
    <section className={`${styles.menu} container`}>
      <h1 id="table_of_contents" className={styles.h1}>
        Spis treści
      </h1>
      <Accordion />
    </section>
  );
};

export default MenuMobile;

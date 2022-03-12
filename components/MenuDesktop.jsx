import React, { useState } from "react";
import styles from "../styles/MenuDesktop.module.scss";

import MenuDesktopContent from "./MenuDesktopContent";

const Menu = () => {
  const [active, setActive] = useState(1);

  const showContent = (e) => {
    setActive(e.target.value);
  };
  return (
    <section id="table_of_contents" className={`${styles.menu} container`}>
      <h1 className={styles.h1}>Spis treści</h1>
      <div className={styles.wrapper}>
        <ul className={styles.menuList}>
          <li
            className={styles.menuItem}
            key="1"
            value="1"
            onClick={showContent}
          >
            Portrety
          </li>

          <li
            className={styles.menuItem}
            key="2"
            value="2"
            onClick={showContent}
          >
            Projekty
          </li>
          <li
            className={styles.menuItem}
            key="3"
            value="3"
            onClick={showContent}
          >
            BPO/SSC
          </li>
          <li
            className={styles.menuItem}
            key="4"
            value="4"
            onClick={showContent}
          >
            Usługi finansowe
          </li>
          <li
            className={styles.menuItem}
            key="5"
            value="5"
            onClick={showContent}
          >
            Usługi doradcze
          </li>
          <li
            className={styles.menuItem}
            key="6"
            value="6"
            onClick={showContent}
          >
            Kwalifikacje zawodowe
          </li>
          <li
            className={styles.menuItem}
            key="7"
            value="7"
            onClick={showContent}
          >
            Profile pracodawców
          </li>
        </ul>
        <MenuDesktopContent active={active} />
      </div>
    </section>
  );
};

export default Menu;

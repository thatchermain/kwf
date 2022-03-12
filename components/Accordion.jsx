import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import menuData from "../data/menuData";
import styles from "../styles/MenuMobile.module.scss";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    } else {
      return setActive(index);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.menuList}>
          {menuData.map((item, index) => {
            return (
              <AccordionItem
                key={item.id}
                toggle={toggle}
                active={active}
                index={index}
                category={item.category}
                description={item.description}
                list={item.list.map((el) => {
                  return <li className={styles.dataListItem}>{el}</li>;
                })}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;

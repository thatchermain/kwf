import React from "react";
import styles from "../styles/MenuMobile.module.scss";

const AccordionItem = ({
  toggle,
  active,
  index,
  category,
  description,
  list,
}) => {
  return (
    <div>
      <li>
        <p className={styles.menuItem} onClick={() => toggle(index)}>
          {category}
        </p>
        <div
          className={
            active === index ? `${styles.menuContent}` : `${styles.hidden}`
          }
        >
          <p className={styles.dataDescription}>{description}</p>
          <ul className={styles.dataList}>
            <li>{list}</li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default AccordionItem;

import React from "react";
import menuData from "../data/menuData";
import styles from "../styles/MenuDesktopContent.module.scss";

const MenuDesktopContent = ({ active }) => {
  return (
    <div className={styles.menuContent}>
      {
        // active &&
        menuData.map((item) => {
          if (active == item.id)
            return (
              <div key={item.id}>
                <p className={styles.dataDescription}>{item.description}</p>
                <ul className={styles.dataList}>
                  {item.list.map((el) => {
                    return (
                      <li className={styles.dataListItem} key={el.id}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
        })
      }
    </div>
  );
};

export default MenuDesktopContent;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenuSharp, IoExitOutline } from "react-icons/io5";
import NavLogo from "../images/NavLogo.png";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  //Show/Hide nav menu
  const [isMobile, setIsMobile] = useState(false);
  const mobileToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`${styles.nav} `}>
      <div className={`${styles.wrapper} container`}>
        <div className={`${styles.logo}`}>
          <Image
            src={NavLogo}
            alt="Nav Logo"
            layout="fixed"
            max-width={260}
            max-height={70}
            className={styles.image}
          />
          <Link href="/">
            <a className={styles.hideOnMobile}>
              Przejdź do serwisu <span>KarierawFinansach.pl</span>
            </a>
          </Link>
        </div>
        <div className={`${styles.menu}`}>
          <ul
            className={`${styles.navList} && ${
              !isMobile ? "" : ` ${styles.mobile}`
            }`}
          >
            <Link href="#main_topic">
              <a
                className={`${styles.navLink}`}
                onClick={() => setIsMobile(false)}
              >
                <span>temat numeru</span>
              </a>
            </Link>
            <Link href="#table_of_contents">
              <a
                className={`${styles.navLink}`}
                onClick={() => setIsMobile(false)}
              >
                <span>spis treści</span>
              </a>
            </Link>
            <Link href="#partners">
              <a
                className={`${styles.navLink}`}
                onClick={() => setIsMobile(false)}
              >
                <span>nasi partnerzy</span>
              </a>
            </Link>
            <button
              className={`${styles.navBtn}`}
              onClick={() => setIsMobile(false)}
            >
              zamów do domu
            </button>
          </ul>
        </div>
        <div className={`${styles.mobileBtn}`} onClick={mobileToggle}>
          {" "}
          {isMobile ? (
            <IoExitOutline
              className={styles.mobileIcon}
              onClick={mobileToggle}
            />
          ) : (
            <IoMenuSharp className={styles.mobileIcon} onClick={mobileToggle} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

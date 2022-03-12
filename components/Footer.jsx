import Image from "next/image";
import React from "react";
import footerImage from "../images/footerImage.png";
import NavLogo from "../images/NavLogo.png";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={footerImage} layout="responsive" objectFit="contain" />
      </div>
      <div className={styles.footerLogo}>
        <Image
          src={NavLogo}
          alt="Nav Logo"
          layout="fixed"
          max-width={260}
          max-height={70}
        />
      </div>
    </footer>
  );
};

export default Footer;

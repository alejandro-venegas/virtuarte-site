import React from "react";
import * as styles from "./Footer.module.scss";
const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Contáctenos</span>
        <span>Tel:</span>
        <span>+506 7083 6361</span>
      </div>
      <div>
        <span>Correo: virtuartecr@gmail.com</span>
        <span>
          Facebook:{" "}
          <a
            href="https://www.facebook.com/Virtuartecr"
            target={"_blank"}
            rel={"noreferrer"}
          >
            virtuartecr
          </a>
        </span>
        <span>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/virtuartecr"
            target={"_blank"}
            rel={"noreferrer"}
          >
            virtuartecr
          </a>
        </span>
      </div>
      <div>
        <span>Derechos reservados, {new Date().getFullYear()}</span>
        <span>San José, Costa Rica.</span>
      </div>
    </footer>
  );
};

export default Footer;

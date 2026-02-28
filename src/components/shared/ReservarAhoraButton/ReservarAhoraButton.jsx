import React from "react";
import Button from "../Button/Button";
import * as styles from "./ReservarAhoraButton.module.scss";

const ReservarAhoraButton = () => (
  <a target="_blank" href="https://wa.me/50670836361">
    <Button className={styles.reservarAhoraButton}>Reservar ahora</Button>
  </a>
);

export default ReservarAhoraButton;

import React, { useRef, useState } from "react";
import Button from "../../../shared/Button/Button";
import * as styles from "./NewsletterModal.module.scss";

const submitUrl =
  "https://alejandrovenegas.us10.list-manage.com/subscribe/post?u=bc5cabb264de3fa06fa9e3216&amp;id=41f0b7bdc3&amp;f_id=0044cee5f0";

export const NewsletterModal = (props) => {
  const [hasError, setHasError] = useState(false);
  const [wasSent, setWasSent] = useState(false);

  const emailRef = useRef();
  const formRef = useRef();

  const onClickHandler = async (event) => {
    event.preventDefault();

    if (!emailRef.current || !formRef.current) {
      return;
    }

    const value = emailRef.current.value.trim();

    if (!value || !validateEmail(value)) {
      setHasError(true);
      return;
    }

    setWasSent(true);

    await fetch(submitUrl, {
      method: "POST",
      body: new URLSearchParams(new FormData(formRef.current)),
      mode: "no-cors",
    });
  };

  return (
    <div id="newsletter">
      <div
        className={styles.innerContainer + " " + (wasSent && styles.wasSent)}
      >
        <CloseButton
          onClick={() => {
            setHasError(false);
            setWasSent(false);

            if (emailRef.current) {
              emailRef.current.value = "";
            }
          }}
        />
        {!wasSent && (
          <>
            <h1 className="h2">Subscríbete</h1>
            <p>
              Subscríbete para mantenerte al día con nuestras activades y
              noticias
            </p>
            <form
              action={submitUrl}
              method="post"
              target="_blank"
              className={styles.form}
              ref={formRef}
            >
              <div className={styles.inputGroup}>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  id="email"
                  name="EMAIL"
                  className={`${styles.input} ${hasError && styles.invalid}`}
                />
                {hasError && (
                  <span className={styles.error}>
                    Por favor, ingresa una dirección de correo valida
                  </span>
                )}
              </div>

              <Button onClick={onClickHandler} className={styles.button}>
                Enviar
              </Button>
            </form>
          </>
        )}
        {wasSent && (
          <>
            <h1 className="h2">¡Gracias por subscribirte!</h1>
            <p>
              Pronto te estaremos informando de nuestras actividades y noticias
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const CloseButton = ({ onClick }) => {
  return (
    <a href="#" onClick={onClick} className={styles.closeContainer}>
      <div className={styles.stick + " " + styles.leftright}></div>
      <div className={styles.stick + " " + styles.rightleft}></div>
    </a>
  );
};

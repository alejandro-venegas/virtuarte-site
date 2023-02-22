import React, { useRef, useState } from "react";
import Button from "../../../shared/Button/Button";
import { Spinner } from "../../../shared/Spinner/Spinner";
import * as styles from "./NewsletterModal.module.scss";

const submitUrl =
  "https://assets.mailerlite.com/jsonp/334139/forms/80489490612749970/subscribe";

export const NewsletterModal = (props) => {
  const [hasError, setHasError] = useState(null);
  const [wasSent, setWasSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contentHeight, setContentHeight] = useState(212);

  const emailRef = useRef();
  const formRef = useRef();

  const onClickHandler = async (event) => {
    event.preventDefault();

    if (!emailRef.current || !formRef.current) {
      return;
    }

    const value = emailRef.current.value.trim();

    if (!value || !validateEmail(value)) {
      setHasError("Por favor, ingresa una dirección de correo válida");
      return;
    }

    setIsLoading(true);

    const response = await fetch("/api/email-subscription", {
      method: "POST",
      body: JSON.stringify({ email: value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setIsLoading(false);

    if (!response.ok) {
      if (data === "Member Exists") {
        setHasError("Este correo ya se encuentra subscrito");
        return;
      }

      setHasError("Ocurrió un error, por favor intenta más tarde");

      return;
    }

    setWasSent(true);
  };

  return (
    <div id="newsletter">
      <div
        className={styles.innerContainer}
        style={{ maxHeight: `calc(${contentHeight}px + 4rem)` }}
      >
        <div
          ref={(element) => {
            setContentHeight(element?.clientHeight || 0);
          }}
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
          {!wasSent && !isLoading && (
            <>
              <h1 className="h2">Suscríbete</h1>
              <p>
                Suscríbete para mantenerte al día con nuestras actividades y
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
                    name="fields[email]"
                    className={`${styles.input} ${hasError && styles.invalid}`}
                  />
                  {hasError && <span className={styles.error}>{hasError}</span>}
                </div>

                <Button onClick={onClickHandler} className={styles.button}>
                  Enviar
                </Button>
              </form>
            </>
          )}
          {isLoading && <Spinner />}
          {wasSent && (
            <>
              <h1 className="h2">¡Gracias por subscribirte!</h1>
              <p>
                Pronto te llegará un correo de bienvenida (por favor, revisa la
                bandeja de spam)
              </p>
            </>
          )}
        </div>
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

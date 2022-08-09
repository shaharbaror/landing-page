import useEmail from "../../hooks/useEmail";
import React, { useRef, useReducer, useState } from "react";

import Card from "../UI/Card";
import styles from "./Contact.module.css";
import useInput from "../../hooks/useInput";

//Needs to keep the user input...

const Contact = () => {
  const {
    isValid: emailIsValid,
    onBlurHandler: onEmailBlur,
    onChangeHandler: onEmailChange,
    onSumbitHandler: onEmailSubmit,
    hasError: emailHasError,
  } = useInput((value) => value.includes("@") && value.includes("."));
  const {
    isValid: phoneIsValid,
    onBlurHandler: onPhoneBlur,
    onChangeHandler: onPhoneChange,
    onSumbitHandler: onPhoneSubmit,
    hasError: phoneHasError,
  } = useInput((value) => value.trim().length > 8);
  const {
    isValid: nameIsValid,
    onBlurHandler: onNameBlur,
    onChangeHandler: onNameChange,
    onSumbitHandler: onNameSubmit,
    hasError: nameHasError,
  } = useInput((value) => value.trim() != "");

  const { responseText, sendEmail } = useEmail();
  const sendStuff = (event) => {
    event.preventDefault();
    if(!(nameIsValid&& emailIsValid && phoneIsValid)){
        return;
    }
    //sendEmail(nameRef.current.value,emailRef.current.value,mobileRef.current.value,"want to get in contact");
    console.log(responseText);
    onNameSubmit();
    onPhoneSubmit();
    onEmailSubmit();
  };

  const styleEmail = emailHasError ? styles["invalid-input"] : null;

  return (
    <React.Fragment>
      <Card className={styles.card}>
        <label className={styles["contact-us"]}>Contact us!</label>

        <form className={styles.form} onSubmit={sendStuff}>
          <div className={styles.inputD}>
            <label className={styles.text}>Email:</label>
            <input
              onBlur={onEmailBlur}
              onChange={onEmailChange}
              className={styleEmail}
              type="email"
            />
            {emailHasError && (
              <p className={styles["invalid-text"]}>
                please enter a valid email
              </p>
            )}
          </div>

          <div className={styles.inputD}>
            <label className={styles.text}>Mobile:</label>
            <input
              className={phoneHasError ? styles["invalid-input"] : null}
              onChange={onPhoneChange}
              onBlur={onPhoneBlur}
              type="text"
            />
            {phoneHasError && (
              <p className={styles["invalid-text"]}>
                please enter a valid phone number
              </p>
            )}
          </div>

          <div className={styles.inputD}>
            <label className={styles.text}>Name:</label>
            <input
              className={nameHasError ? styles["invalid-input"] : null}
              onChange={onNameChange}
              onBlur={onNameBlur}
              type="text"
            />
            {nameHasError && (
              <p className={styles["invalid-text"]}>
                please enter a valid name
              </p>
            )}
          </div>

          <button className={styles.submit} type="submit">
            Send
          </button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default Contact;

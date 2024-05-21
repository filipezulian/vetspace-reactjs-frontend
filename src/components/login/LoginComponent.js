import React from "react";
import styles from "./Login.module.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className={`${styles.boxShadow} ${styles.loginBody}`}>
      <div>
        <img src="logo2.png" height="100px" alt="Logo"></img>
      </div>
      <Form className={styles.loginForm}>
        <div className={styles.formInputs}>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control className={styles.boxShadow} type="email" />
        </div>
        <div className={styles.formInputs}>
          <Form.Label>Senha:</Form.Label>
          <Form.Control className={styles.boxShadow} type="password" />
        </div>
        <button className={`${styles.EntrarButton} ${styles.boxShadow}`}>ENTRAR</button>
      </Form>
      <span className={`mr-3 ${styles.cadastrarLinkSpan}`}>
        Caso não tenha uma conta:
        <Link className={styles.cadastrarLink} to="/cadastro">
          Cadastrar
        </Link>
      </span>
    </div>
  );
};

export default LoginComponent;

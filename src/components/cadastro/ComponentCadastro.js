import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./cadastro.module.css";
import login from "../login/Login.module.css";

const ComponentCadastro = () => {
  return (
    <div>
      <span className={`${styles.seusDados}`}>SEUS DADOS</span>
      <div className={`${styles.divCadastro}`}>
        <Form className={`${login.loginForm}`}>
          <div className={`${styles.formInputs}`}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control className={`${login.boxShadow}`} type="text" />
          </div>
          <div className={`${styles.formInputs}`}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control className={`${login.boxShadow}`} type="Number" />
          </div>
          <div className={`${styles.formInputs}`}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control className={`${login.boxShadow}`} type="email" />
          </div>
          <div className={`${styles.formInputs}`}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control className={`${login.boxShadow}`} type="password" />
          </div>
          <div className={`${styles.divBotoes}`}>
            <Link className={`${styles.corverde} ${login.boxShadow}`} to="/login">
              VOLTAR
            </Link>
            <button className={`${login.EntrarButton} ${login.boxShadow}`}>
              CADASTRAR
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ComponentCadastro;

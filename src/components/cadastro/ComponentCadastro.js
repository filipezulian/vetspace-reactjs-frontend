import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./cadastro.module.css";
import login from "../login/Login.module.css";

const ComponentCadastro = (setUser, user) => {
  
  const handleFormField = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <span className={styles.seusDados}>SEUS DADOS</span>
      <div className={styles.divCadastro}>
        <Form className={login.loginForm}>
          <div className={styles.formInputs}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="text"
              name="nome"
              maxLength="50"
              pattern="[A-Za-z\s]+"
              title="Nome deve conter apenas letras"
              onChange={handleFormField}
              required
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="tel"
              name="telefone"
              maxLength="15"
              pattern="\d+"
              title="Telefone deve conter apenas números"
              onChange={handleFormField}
              required
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="email"
              name="email"
              onChange={handleFormField}
              required
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="password"
              name="password"
              minLength="6"
              onChange={handleFormField}
              required
            />
          </div>
          <div className={styles.divBotoes}>
            <Link className={`${styles.corverde} ${login.boxShadow}`} to="/login">
              VOLTAR
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ComponentCadastro;

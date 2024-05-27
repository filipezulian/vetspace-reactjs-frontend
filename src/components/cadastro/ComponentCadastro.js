import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./cadastro.module.css";
import login from "../login/Login.module.css";

const ComponentCadastro = ({
  setModal, 
  user, 
  setUser
}) => {
  
  const handleFormField = (e) => {
    const { nome, value} = e.target;
    setUser((prevState) => ({
      ...prevState,
      [nome]: value,
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
              onChange={handleFormField}
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="number"
              name="telefone"
              onChange={handleFormField}
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="email"
              name="email"
              onChange={handleFormField}
            />
          </div>
          <div className={styles.formInputs}>
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="password"
              name="password"
              onChange={handleFormField}
            />
          </div>
          <div className={styles.divBotoes}>
            <Link className={`${styles.corverde} ${login.boxShadow}`} to="/login">
              VOLTAR
            </Link>
            <button
              type="button"
              onClick={() => setModal(2)}
              className={`${login.EntrarButton} ${login.boxShadow}`}
            >
              CADASTRAR
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ComponentCadastro;

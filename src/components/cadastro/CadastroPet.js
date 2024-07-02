import React, { useState } from "react";
import styles from "./cadastro.module.css";
import login from "../login/Login.module.css";
import { cadastrarUsuario } from "../../routes/Login"
import { Form } from "react-bootstrap";

const CadastroPet = (user) => {
  const [pet, setPet] = useState({});

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const maxDate = `${yyyy}-${mm}-${dd}`;

  const [descricao, setDescricao] = useState("");
  const maxDescricaoLength = 100;

  const handleDescricaoChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxDescricaoLength) {
      setDescricao(value);
    }
  };
  
  const enviar = (user) => {
    setPet();
    cadastrarUsuario(user, pet);
  }

  return (
    <div>
      <span className={styles.seusDados}>SEUS PRIMEIRO PET</span>
      <div className={styles.divCadastro}>
      <Form className={login.loginForm}>
          <div className={styles.formInputs}>
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              className={login.boxShadow}
              type="text"
              name="nome"
            />
            <div className={styles.petLabelDiv}>
            <Form.Label>Sexo:</Form.Label>
            <Form.Label>Nascimento:</Form.Label>

            </div>
            <div className={styles.petInputDiv}>
            <Form.Select
              className={login.boxShadow}
              type="option"
              name="genero">
            <option>Feminino</option>
            <option>Masculino</option>
            </Form.Select>
            <Form.Control
              className={login.boxShadow}
              type="date"
              name="nascimento"
              max={maxDate}
            />
            </div>
            <div className={styles.petLabelDiv}>
              <Form.Label>Tipo:</Form.Label>
            </div>
            <Form.Select
              className={login.boxShadow}
              type="option"
              name="tipo">
            <option>Gato</option>
            <option>Cachorro</option>
            <option>Pássaro</option>
            <option>Réptil</option>
            </Form.Select>
            <div className={styles.petLabelDiv}>
              <Form.Label>Observações:</Form.Label>
            </div>
            <Form.Control
              className={`${login.boxShadow} ${styles.resizeNone}`}
              as="textarea"
              rows={3}
              maxLength={maxDescricaoLength}
              name="descricao"
              value={descricao}
              onChange={handleDescricaoChange}
              />
              {descricao.length}/{maxDescricaoLength}
          </div>
        </Form>
          <div className={styles.divBotoesPet}>
            {/* <button className={`${styles.corverde} ${login.boxShadow}`} onClick={() => setModal(1)}>
              VOLTAR
            </button> */}
            <button
              type="button"
              className={`${login.EntrarButton} ${login.boxShadow}`}
              onClick={() => enviar(user)}
            >
              CADASTRAR
            </button>
          </div>
      </div>
    </div>
  )
}

export default CadastroPet
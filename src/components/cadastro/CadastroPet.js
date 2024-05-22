import React, { useState } from "react";
import styles from "./cadastro.module.css";
import login from "../login/Login.module.css";
import { cadastrarUsuario } from "../../routes/Login"

const CadastroPet = ({setModal, user}) => {
  const [pet, setPet] = useState({

  });

  const enviar = (user) => {
    cadastrarUsuario(user, pet);
  }

  return (
    <div>
      <span className={styles.seusDados}>SEUS DADOS</span>
      <div className={styles.divCadastro}>
          <div className={styles.divBotoes}>
            <button className={`${styles.corverde} ${login.boxShadow}`} onClick={() => setModal(1)}>
              VOLTAR
            </button>
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
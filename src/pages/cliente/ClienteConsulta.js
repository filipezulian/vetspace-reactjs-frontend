import styles from "./css/ClienteConsulta.module.css";
import React, { useState } from "react";
import ComponenteConsulta from "../../components/Consulta/cliente/ComponenteConsulta";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const ClienteConsulta = () => {
  {
    /* <Link className={`${styles.botao} ${styles.boxShadow}`} to="/cliente/consulta/nova">Nova Consulta</Link> */
  }

  return (
    <div className={styles.bodyClienteConstulta}>
      <div className={styles.infoVetspace}>
        <img
          src={logo}
          height="175px"
          width="175px"
          alt="Logo da Clínica Veterinária"
        ></img>
        <span>Este formulário serve para solicitar uma nova consulta,</span>
        <span>todas as atualizações serão enviadas para o seu email,</span>
        <span>se for uma emergência em contato direto com a clínica.</span>
        <Link className={styles.botaoEmergencia} to="/emergencia">Emergência</Link>
      </div>
      <div className={styles.infoVetspace}>
        <ComponenteConsulta />
      </div>
    </div>
  );
};

export default ClienteConsulta;

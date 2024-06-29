import React from 'react';
import ComponenteEmergencia from '../../components/emergencia/ComponenteEmergencia';
import styles from "./css/Emergencia.module.css";
import Diadasemana from '../../constantes/Diadasemana';

const Emergencia = () => {
  return (
    <div className={styles.bodyEmergencia}>
      <div className={styles.emergenciaColumnDetail}></div>
      <div className={styles.conteudoBody}>
        <div className={styles.conteudoBody}>
          <span className={styles.titulo}>Plantão de: </span>
          <span className={styles.info}>{Diadasemana.getDayName(new Date().getDay())}</span>

        </div>
        <ComponenteEmergencia />
        <div className={styles.conteudoBody}>
          <span className={styles.titulo}>Contatos Gerais da Clinica</span>
          <span className={styles.info}>33111-1111</span>
        </div>
      </div>
      <div className={styles.emergenciaColumnDetail}></div>
    </div>
  );
}

export default Emergencia;

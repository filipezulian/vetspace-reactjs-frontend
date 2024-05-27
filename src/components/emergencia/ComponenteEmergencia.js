import React from 'react'
import styles from "./Emergencia.module.css"

const ComponenteEmergencia = () => {
  return (
    <div className={styles.cardFunc}>
        <span className={styles.nome}>Filipe Zulian</span>
        <div>
            <span className={styles.titulo}>Especialização: </span>
            <span className={styles.conteudoText}>Cirurgião</span>
        </div>
        <div>
            <span className={styles.titulo}>Contato: </span>
            <span className={styles.conteudoText}>(48) 99163-8414</span>
        </div>
        
    </div>
  )
}

export default ComponenteEmergencia
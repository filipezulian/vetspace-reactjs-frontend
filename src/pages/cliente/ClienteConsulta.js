import React from 'react'
import styles from './css/ClienteConsulta.module.css'
import { Link, useNavigate } from 'react-router-dom'

const ClienteConsulta = () => {

  return (
    <div className={styles.bodyConteudo}>
    <div>
        <Link className={`${styles.botao} ${styles.boxShadow}`} to="/cliente/consulta/nova">Nova Consulta</Link>
    </div>
    <div>
        EM DESENVOLVIMENTO
    </div>
    </div>
  )
}

export default ClienteConsulta  
import React from 'react'
import ComponenteConsultaMarcada from '../../../components/Consulta/funcionario/ComponenteConsultaMarcada'
import { Link } from 'react-router-dom'
import styles from "./css/consultaView.module.css"

const ConsultaMarcada = () => {
  return (
    <div>
        <ComponenteConsultaMarcada/>
        <div className={styles.divBotao}>
            <Link to="/func/consulta/aprovar" className={styles.botao}>Aprovar</Link>
            <Link to="/func/consulta/adicionar" className={styles.botao}>Nova Consulta</Link>
        </div>
    </div>
  )
}

export default ConsultaMarcada
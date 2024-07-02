import React from 'react'
import styles from "./css/consultaView.module.css"
import { Link } from 'react-router-dom'
import ComponenteConsultaAprovar from '../../../components/Consulta/funcionario/ComponenteConsultaAprovar'

const ConsultaAprovar = () => {
  return (
    <div>
      <ComponenteConsultaAprovar/>
        <div className={styles.divBotao}>
            <Link to="/func/consulta" className={styles.botao}>Voltar</Link>
        </div>
    </div>
  )
}

export default ConsultaAprovar
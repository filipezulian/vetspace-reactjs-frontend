import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ComponenteConsultaView from '../../../components/Consulta/funcionario/ComponenteConsultaView'
import styles from "./css/consultaView.module.css"

const ConsultaView = () => {
  const location = useLocation();
  const consulta = location.state;

  return (
    <div>
      <ComponenteConsultaView consulta={consulta}/>
        <div className={styles.divBotao}>
            <Link className={styles.botao} to="/func/consulta">Voltar</Link>
            <Link className={styles.botao}>Gerar Relatório</Link>
        </div>
    </div>
  )
}

export default ConsultaView
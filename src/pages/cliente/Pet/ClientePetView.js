import React from 'react'
import ComponentePetView from '../../../components/pets/petView/ComponentePetView'
import styles from "../css/ClientePet.module.css";
import plus from "../../../assets/Plus.png"
import { Link } from 'react-router-dom';

const ClientePetView = () => {
  return (
    <div className={styles.ViewBody}>
        <ComponentePetView/>
        <div>
        <Link className={styles.addPet} to="/cliente/pet/add"><img height="100" alt="Adicionar" src={plus}/></Link>
        </div>
    </div>
  )
}

export default ClientePetView
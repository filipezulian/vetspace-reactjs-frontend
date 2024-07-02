import React from 'react'
import ComponentePetAdd from '../../components/pets/PetAdd/ComponentePetAdd'
import styles from "./css/ClientePet.module.css";

const ClientePetAdd = () => {
  return (
    <div className={styles.ViewBody}>
        <ComponentePetAdd/>
    </div>
  )
}

export default ClientePetAdd
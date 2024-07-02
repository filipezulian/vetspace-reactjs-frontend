import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ComponentePetEdit from "../../components/pets/PetEdit/ComponentePetEdit";
import styles from "./css/ClientePet.module.css";

const ClientePetEdit = () => {

  return(
      <div className={styles.ViewBody}>
        <ComponentePetEdit/>
      </div>
  );
};

export default ClientePetEdit;

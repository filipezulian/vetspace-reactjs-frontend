import React, { useEffect, useState } from "react";
import birb from "../../../assets/birb.png";
import dog from "../../../assets/dog.png";
import gato from "../../../assets/gato.png";
import snake from "../../../assets/snake.png";
import { getHistoricoMedico } from "../../../routes/Pet";
import styles from "./css/ComponenteConsultaView.module.css"

const ComponenteConsultaView = ({ consulta }) => {
  const [hist, setHist] = useState({
    castrado: false,
    vacina: []
  });
  const pet = consulta.pet;

  useEffect(() => {
    const fetchPetsHistorico = async () => {
      try {
        await fetchHistorico();
      } catch (error) {
        console.error("Error fetching Historico Medico:", error);
      }
    };
    fetchPetsHistorico();
  }, [pet.id]);

  const handleData = (dia, data) => {
    const dateObj = new Date(data);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    let retorno = "";
    dia ? (retorno = `${day}/${month}/${year}`) : (retorno = `${hours}:${minutes}`);
    return retorno;
  };

  const getImage = (tipo) => {
    switch (tipo) {
      case "GATO":
        return <img src={gato} height="100px" alt="Gato"></img>;
      case "REPTIL":
        return <img src={snake} height="100px" alt="Reptile"></img>;
      case "CACHORRO":
        return <img src={dog} height="100px" alt="Cachorro"></img>;
      case "PASSARO":
        return <img src={birb} height="100px" alt="Pássaro"></img>;
      default:
        return null;
    }
  };

  const handleBool = (bool) => {
    return bool ? "Sim" : "Não";
  };

  const handleGenero = (genero) => {
    return genero ? "Masculino" : "Feminino";
  };

  const fetchHistorico = async () => {
    try {
      const retorno = await getHistoricoMedico(pet.id);
      setHist(retorno[0]);
    } catch (error) {
      console.error(`Error fetching historico for pet:`, error);
    }
  };

  return (
    <div className={styles.cards}>
      <div className={styles.divPet}>
        <div>{getImage(pet.tipo)}</div>
        <div className={styles.titulo}>{pet.nome}</div>
        <div className={styles.gaps}>
          <span className={styles.titulo}>Nascimento: </span>
          <span>{handleData(true, pet.nascimento)}</span>
        </div>
        <div className={styles.gaps}>
          <span className={styles.titulo}>Gênero: </span>
          <span>{handleGenero(pet.sexo)}</span>
        </div>
        <div className={styles.gaps}>
          <span className={styles.titulo}>Castrado:</span>
          <span>{handleBool(hist.castrado)}</span>
        </div>
        <span className={styles.titulo}>Observação:</span>
        <span>{hist.obs}</span>
        <span className={styles.titulo}>Dono/a</span>
        <div className={styles.gaps}>
            <span className={styles.titulo}>Nome:</span>
            <span>{pet.usuario.nome}</span>
        </div>
        <div className={styles.gaps}>
            <span className={styles.titulo}>Telefone:</span>
            <span>{pet.usuario.telefone}</span>
        </div>
        </div>
      <div className={styles.divConsulta}>
        <span className={styles.titulo}>CONSULTA</span>
        <div className={styles.gaps}>
          <span className={styles.titulo}>DATA:</span>
          <span>{handleData(true, consulta.data)}</span>
        </div>
        <div className={styles.gaps}>
          <span className={styles.titulo}>HORÁRIO:</span>
          <span>{handleData(false, consulta.data)}</span>
        </div>
        <div className={styles.gaps}>
          <span className={styles.titulo}>Observação:</span>
          <span>{consulta.obs}</span>
        </div>
      </div>
    </div>
  );
};

export default ComponenteConsultaView;

import React, { useEffect, useState } from "react";
import styles from "./Emergencia.module.css";
import { getPlantao } from "../../routes/Funcionarios";

const ComponenteEmergencia = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    try {
      getPlantao(new Date().getDay()).then((response) => setCards(response));
    } catch (error) {
      console.error("Error fetching Funcionarios:", error);
    }
  }, []);

  if (!cards) {
    return (
      <div className={styles.cardFunc}>
        <span className={styles.nome}>
          Opa! Não temos ninguem especifico em plantão hoje!
        </span>
        <span className={styles.titulo}>
          {" "}
          Mas não se preocupe, ligue na clinica que te atendemos!
        </span>
      </div>
    );
  }

  return (
    <>
      {cards.map((card, index) => {
        return(
        <div className={styles.cardFunc} key={index}>
          <span className={styles.nome}>{card.nome}</span>
          <div>
            <span className={styles.titulo}>Especialização: </span>
            <span className={styles.conteudoText}>{card.especializacao}</span>
          </div>
          <div>
            <span className={styles.titulo}>Contato: </span>
            <span className={styles.conteudoText}>{card.telefone}</span>
          </div>
        </div>
        );
      })}
    </>
  );
};

export default ComponenteEmergencia;

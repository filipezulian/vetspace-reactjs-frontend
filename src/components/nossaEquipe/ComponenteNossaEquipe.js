import React, { useEffect, useState } from "react";
import styles from "./nossaEquipe.module.css";
import { getFuncionarios } from "../../routes/Funcionarios";
import Diadasemana from "../../constantes/Diadasemana";

const ComponenteNossaEquipe = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    try {
      getFuncionarios().then((response) => setCards(response));
    } catch (error) {
      console.error("Error fetching Funcionarios:", error);
    }
  }, []);

  const photos = [
    "bombadao.png",
    "buldogFrances.png",
    "corgi.png",
    "principe.png",
    "lizzard.png",
    "snake.png",
  ];

  if (!cards) {
    return <span>Error: Please consult the console for further informations</span>
  }

  return (
    <>
      {cards.map((card, index) => {
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        const plantao = Diadasemana.getDayName(card.plantao);
        return (
          <div className={styles.cardEquipe} key={index}>
            <img
              src={`./funcPhotos/${randomPhoto}`}
              height="100px"
              width="100px"
            ></img>
            <span className={styles.conteudoText}>{card.nome}</span>
            <div className={styles.infos}>
              <span className={styles.titulo}>Dia de Plantão: </span>
              <span className={styles.conteudoText}>{plantao}</span>
            </div>
            <div className={styles.infos}>
              <span className={styles.titulo}>Especialização: </span>
              <span className={styles.conteudoText}>{card.especializacao}</span>
            </div>
            <div className={styles.infos}>
              <span className={styles.titulo}>Email: </span>
              <span className={styles.conteudoText}>{card.email}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComponenteNossaEquipe;
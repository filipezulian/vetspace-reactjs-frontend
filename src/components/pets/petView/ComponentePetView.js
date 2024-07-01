import React, { useEffect, useState } from "react";
import { useAuthCtx } from "../../../context/AuthContext";
import { getPetsPorUsuario } from "../../../routes/Pet";
import birb from "../../../assets/birb.png";
import dog from "../../../assets/dog.png";
import gato from "../../../assets/gato.png";
import snake from "../../../assets/snake.png";
import styles from "./css/petView.module.css"

const ComponentePetView = () => {
  const [cards, setCards] = useState([]);
  const ctx = useAuthCtx();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPetsPorUsuario(ctx.id);
        setCards(response);
      } catch (error) {
        console.error("Error fetching Pets:", error);
      }
    };

    fetchPets();
  }, [ctx.id]);

  console.log(cards);

  const getImage = (card) => {
    switch (card.tipo) {
      case "GATO":
        return <img src={gato} height="100px" alt="Gato"></img>;
      case "REPTILE":
        return <img src={snake} height="100px" alt="Reptile"></img>;
      case "CACHORRO":
        return <img src={dog} height="100px" alt="Cachorro"></img>;
      case "PASSARO":
        return <img src={birb} height="100px" alt="Pássaro"></img>;
      default:
        return null;
    }
  };

  const handleGenero = (genero) => {
    if(genero){
        return "Masculino"
    }
    return "Feminino"
  }

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
};

  return (
    <div>
      {cards.map((card, index) => (
        <div>
          <div key={card.id}>
            {getImage(card)}
            <span>{card.nome}</span>
          </div>
          <div>
            <span>Nascimento:</span>
            <span className={styles.infoText}>{formatDate(card.nascimento)}</span>
          </div>
          <div>
          
            <span>Gênero:</span>
            <span className={styles.infoText}>{handleGenero(card.sexo)}</span>
          </div>
          <div>
            <button className={styles.botao}>Mais Informações</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentePetView;

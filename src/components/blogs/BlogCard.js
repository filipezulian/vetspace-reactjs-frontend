import React, { useEffect, useState } from "react";
import "./BlogCard.css";
import { getBlogs } from "../../routes/Blog";

const BlogCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    try {
      getBlogs().then((response) => setCards(response));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };

  return (
    <div className="cardDiv">
      {cards.map((card, index) => (
        <div className="cards" key={index}>
          <div className="cardHeader">
            <span>{card.titulo}</span>
            <span>{formatDate(card.data)}</span>
          </div>
          <div className="cardConteudo">
            <span>{card.descricao}</span>
          </div>
          <div className="cardFooter">
            <span>{card.usuario.nome}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;

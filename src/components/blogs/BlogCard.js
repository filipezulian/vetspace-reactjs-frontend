import React from 'react';
import "./BlogCard.css"

function BlogCard() {
    const cards = [
        { titulo: "Feliz Páscoa", data: "31/03", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Ullamcorper molestie!", data: "20/03", funcionario: "Funcionário Generico 1", conteudo: "Lorem ipsum dolor sit amet consectetur. Vulputate faucibus quisque eget nec blandit ac suscipit. Ullamcorper molestie augue." },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" },
        { titulo: "Feliz Páscoa", data: "31/04", funcionario: "Filipe Zulian", conteudo: "Feliz Páscoa para todos os nossos pets! Tome mais cuidado nessas epocas! Cachorro e gatos não podem comer chocolates!!" }
    ];

    return (
        <div className='cardDiv'>
            {cards.map((card, index) => (
                <div className="cards" key={index}>
                    <div className="cardHeader">
                        <span>{card.titulo}</span>
                        <span>{card.data}</span>
                    </div>
                    <div className='cardConteudo'>
                        <span>{card.conteudo}</span>
                    </div>
                    <div className='cardFooter'>
                        <span>{card.funcionario}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogCard;

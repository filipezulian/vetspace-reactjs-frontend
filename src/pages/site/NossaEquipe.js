import React from "react";
import ComponenteNossaEquipe from "../../components/nossaEquipe/ComponenteNossaEquipe";
import "../../General.css";

const NossaEquipe = () => {

  return (
    <div className="bodyNossaEquipe">
      <div className="divsNossaEquipe">
        <ComponenteNossaEquipe />
      </div>
      <div className="descricaoNossaEquipe">
        <span>Bem-vindo à nossa família de apaixonados por animais!</span>
        <span>
          No VetSpace reunimos uma equipe dedicada de veterinários e
          profissionais de saúde animal,
        </span>
        <span>
          prontos para oferecer o melhor cuidado possível para os seus amigos
          peludos.
        </span>
      </div>
    </div>
  );
};

export default NossaEquipe;

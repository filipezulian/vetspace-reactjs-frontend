import React, { useState } from "react";
import "../../General.css";
import ComponentCadastro from "../../components/cadastro/ComponentCadastro";
import CadastroPet from "../../components/cadastro/CadastroPet";

const Cadastro = () => {
  const [user, setUser] = useState({
    nome: "",
    telefone: "",
    email: "",
    password: "",
  });

  return (
    <div className="telasLogin">
      <ComponentCadastro setUser={setUser} user={user} />
      <CadastroPet user={user}></CadastroPet>
    </div>
  );
};

export default Cadastro;

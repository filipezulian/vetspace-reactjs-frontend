import React, { useState } from 'react';
import "../../General.css";
import ComponentCadastro from '../../components/cadastro/ComponentCadastro';
import CadastroPet from '../../components/cadastro/CadastroPet';

const Cadastro = () => {

  const [modal, setModal] = useState(1);
  const [user, setUser] = useState({
    nome: "",
    telefone: "",
    email: "",
    password: ""
  });

  return (
    <div className='telasLogin'>
      {modal === 1 && (
        <ComponentCadastro 
          setModal={setModal}
          setUser={setUser} 
          user={user}
        />
      )}
      {modal === 2 && <CadastroPet setModal={setModal} user={user}/>}
    </div>
  );
};

export default Cadastro;

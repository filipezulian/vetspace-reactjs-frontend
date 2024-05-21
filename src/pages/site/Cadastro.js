import React, { useState } from 'react'
import "../../General.css"
import ComponentCadastro from '../../components/cadastro/ComponentCadastro'

const Cadastro = () => {

const [Modal, setModal] = useState(1);

return (
    <div className='telasLogin'>
    {(Modal == 1) && (<ComponentCadastro/>)}
    </div>
)
}
export default Cadastro
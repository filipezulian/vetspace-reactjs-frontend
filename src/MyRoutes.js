import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/site/Blogs";
import Header from "./components/header/Header";
import Emergencia from "./pages/site/Emergencia";
import NossaEquipe from "./pages/site/NossaEquipe";
import Login from "./pages/site/Login";
import Cadastro from "./pages/site/Cadastro";

import { useAuthCtx } from "./context/AuthContext";
import Error404 from "./pages/Error404";
import ClienteConsulta from "./pages/cliente/ClienteConsulta";
import ClientePetView from "./pages/cliente/Pet/ClientePetView";
import ClientePetAdd from "./pages/cliente/ClientePetAdd";
import ClientePetEdit from "./pages/cliente/ClientePetEdit";
import ConsultaMarcada from "./pages/funcionario/consulta/ConsultaMarcada";
import ConsultaView from "./pages/funcionario/consulta/ConsultaView";
import ConsultaAprovar from "./pages/funcionario/consulta/ConsultaAprovar";
import ConsultaAdicionar from "./pages/funcionario/consulta/ConsultaAdicionar";
import ClienteView from "./pages/funcionario/clientes/ClienteView";

const PrivateCliente = ({Item}) => {
    const { signed } = useAuthCtx();
    const { permissao } = useAuthCtx();
    return (signed > 0 && permissao === 3) ? <Item /> : <Error404/>
}

const PrivateFuncionario = ({Item}) => {
    const { signed } = useAuthCtx();
    const { permissao } = useAuthCtx();
    return (signed > 0 && permissao === 2 || signed > 0 && permissao === 1) ? <Item /> : <Error404/>
}

const PrivateAdmin = ({Item}) => {
    const { permissao } = useAuthCtx();
    const { signed } = useAuthCtx();
    return (signed > 0 && permissao === 1) ? <Item /> : <Error404/>
}

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Blogs/>} path="/"></Route>
                    <Route element={<NossaEquipe/>} path="/nossaEquipe"></Route>
                    <Route element={<Emergencia/>} path="/emergencia"></Route>
                    <Route element={<Login/>} path="/login"></Route>
                    <Route element={<Cadastro/>} path="/cadastro"></Route>

                    {/* CLIENTES */}
                    <Route element={<PrivateCliente Item={ClienteConsulta} />} path="/cliente/consulta"></Route> 

                    {/* PETS */}
                    <Route element={<PrivateCliente Item={ClientePetView} />} path="/cliente/pet"></Route> 
                    <Route element={<PrivateCliente Item={ClientePetAdd} />} path="/cliente/pet/add"></Route> 
                    <Route element={<PrivateCliente Item={ClientePetEdit} />} path="/cliente/pet/:id/edit"></Route> 


                    {/* Funcionario */}
                    <Route element={<PrivateFuncionario Item={ConsultaMarcada} />} path="/func/consulta"></Route> 
                    <Route element={<PrivateFuncionario Item={ConsultaView} />} path="/func/consulta/:id"></Route>
                    <Route element={<PrivateFuncionario Item={ConsultaAprovar} />} path="/func/consulta/aprovar"></Route>
                    <Route element={<PrivateFuncionario Item={ConsultaAdicionar} />} path="/func/consulta/adicionar"></Route>
                    <Route element={<PrivateFuncionario Item={ClienteView} />} path="/func/cliente/"></Route>

                    <Route element={<Error404/>} path="*"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default MyRoutes;
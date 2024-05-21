import { useAutCtx } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/site/Blogs";
import Header from "./components/header/Header";
import Emergencia from "./pages/site/Emergencia";
import NossaEquipe from "./pages/site/NossaEquipe";
import { useState } from "react";

const PrivateCliente = ({ Item, signed, tipo}) => {
    return (signed > 0 && tipo === '3') ? <Item /> : <Blogs/>
}

const PrivateFuncionario = ({Item, signed, tipo}) => {
    return (signed > 0 && tipo === '2') ? <Item /> : <Blogs/>
}

const PrivateAdmin = ({Item, signed, tipo}) => {
    return (signed > 0 && tipo === '1') ? <Item /> : <Blogs/>
}

const MyRoutes = () => {
    const [signed, setSigned] = useState(false);
    const user = {permissao:3, name:"Filipe", email:"filipe.zulian@email.com", telefone:"4899111111"}
    //const {signed, tipo} = useAutCtx();
    return (
        <>
            <BrowserRouter>
                <Header signed={signed} setSigned={setSigned} user={user}/>
                <Routes>
                    <Route element={<Blogs/>} path="/"></Route>
                    <Route element={<NossaEquipe/>} path="/nossaEquipe"></Route>
                    <Route element={<Emergencia/>} path="/emergencia"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default MyRoutes;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/site/Blogs";
import Header from "./components/header/Header";
import Emergencia from "./pages/site/Emergencia";
import NossaEquipe from "./pages/site/NossaEquipe";
import { useState } from "react";
import Login from "./pages/site/Login";
import Cadastro from "./pages/site/Cadastro";

import { useAuthCtx } from "./context/AuthContext";

const PrivateCliente = ({Item, permissao}) => {
    const { signed } = useAuthCtx()
    return (signed > 0 && permissao === '3') ? <Item /> : <Login/>
}

const PrivateFuncionario = ({Item, permissao}) => {
    const { signed } = useAuthCtx()
    return (signed > 0 && permissao === '2') ? <Item /> : <Login/>
}

const PrivateAdmin = ({Item}) => {
    const { permissao } = useAuthCtx()
    const { signed } = useAuthCtx()
    return (signed > 0 && permissao === '1') ? <Item /> : <Login/>
}

const MyRoutes = () => {
    const {signed} = useAuthCtx();

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

                    <Route element={<Blogs/>} path="*"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default MyRoutes;
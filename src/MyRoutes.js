import { useAutCtx } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";



const PrivateCliente = ({ Item, signed, tipo}) => {
    //return (signed > 0 && tipo === '3') ? <Item /> : <LoginCadastro />
}

const PrivateFuncionario = ({Item, signed, tipo}) => {
    //return (signed > 0 && tipo === '2') ? <Item /> : <Home />
}

const PrivateAdmin = ({Item, signed, tipo}) => {
    //return (signed > 0 && tipo === '1') ? <Item /> : <Home />
}

const MyRoutes = () => {
    const {signed, tipo} = useAutCtx();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/"></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default MyRoutes;
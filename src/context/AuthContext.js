import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});
export const useAuthCtx = () => useContext(AuthContext);

const basedUrl = "http://192.168.0.117:8080";
const basedUrl2 = "http://localhost:8080"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        recuperarUsuarios();

        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.find(user => user.email === JSON.parse(userToken).email);
            if (hasUser) setUser(hasUser);
        }
    }, []);

    const login = async (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        if (!usersStorage) {
            return "Usuário não cadastrado";
        }

        const hasUser = usersStorage.filter((user) => user.email === email);

        if (!hasUser.length) {
            return "Usuário não cadastrado";
        }

        const validarSenha = await autenticar(email, senha);

        if (!validarSenha) {
            return "Email e/ou senha incorretos";
        }

        const { nome, telefone, permissao, id } = hasUser[0];

        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ nome, email, id, telefone, permissao, token }));
        setUser({ nome, telefone, id, permissao, email, senha });
        return null;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    const recuperarUsuarios = async () => {
        try {
            const response = await fetch(`${basedUrl}/usuario`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            const data = await response.json();
            data.sort((a, b) => a.nome.localeCompare(b.nome));
            localStorage.setItem("users_db", JSON.stringify(data));
            return data;
        } catch (err) {
            console.error("Erro ao recuperar usuários:", err);
        }
    };

    const autenticar = async (email, senha) => {
        const credencial = { "email": email, "senha": senha };

        try {
            const response = await axios.post(`${basedUrl}/usuario/autenticar`, credencial);
            return response.data;
            // const response = await fetch('http://localhost:8080/usuario/autenticar', {
            //     method: "POST",
            //     mode: "cors",
            //     cache: "no-cache",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     redirect: "follow",
            //     referrerPolicy: "no-referrer",
            //     body: JSON.stringify(credenciais),
            // });

            // const data = await response.json();

            // return data;
        } catch (err) {
            console.error("Erro ao autenticar:", err);
            return null
        }
    };

    const atualizarRegistros = () => {
        recuperarUsuarios();
    };

    return (
        <AuthContext.Provider value={{ user, signed: !!user, permissao: user?.permissao, atualizarRegistros, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

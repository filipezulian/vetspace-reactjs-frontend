import React, { useState } from "react";
import styles from "./Login.module.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthCtx } from "../../context/AuthContext";

const LoginComponent = () => {
  const autCtx = useAuthCtx();
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const [credenciaisErradas, setCredenciaisErradas] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCredenciaisErradas(false);

    let resultLogin = await autCtx.login(emailLogin, senhaLogin);

    if (resultLogin) {
      setCredenciaisErradas(true);
      setLoading(false);
      return;
    }
    navigate("/");
  };

  return (
    <div className={`${styles.boxShadow} ${styles.loginBody}`}>
      <div>
        <img src="logo2.png" height="100px" alt="Logo da Clínica Veterinária"></img>
      </div>
      <Form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.formInputs}>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            className={styles.boxShadow}
            type="email"
            required
            value={emailLogin}
            onChange={e => setEmailLogin(e.target.value)}
            aria-label="E-mail"
          />
        </div>
        <div className={styles.formInputs}>
          <Form.Label>Senha:</Form.Label>
          <Form.Control
            className={styles.boxShadow}
            type="password"
            required
            value={senhaLogin}
            onChange={e => setSenhaLogin(e.target.value)}
            aria-label="Senha"
          />
        </div>
        {credenciaisErradas && <div className="mt-2 texto-erro">Login e/ou senha inválidos.</div>}
        <button
          className={`${styles.EntrarButton} ${styles.boxShadow}`}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'ENTRAR'}
        </button>
      </Form>
      <span className={`mr-3 ${styles.cadastrarLinkSpan}`}>
        Caso não tenha uma conta:
        <Link className={styles.cadastrarLink} to="/cadastro">
          Cadastrar
        </Link>
      </span>
    </div>
  );
};

export default LoginComponent;

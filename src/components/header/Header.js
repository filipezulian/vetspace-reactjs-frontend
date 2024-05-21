import React, { useState } from "react";
import "./Header.css";
import { useAutCtx } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Form } from "react-bootstrap";

const Header = ({ signed, user, setSigned }) => {
  // const { user, signed, logout } = useAutCtx();
  const [userForm, setUserForm] = useState({
    name: user.name,
    telefone: user.telefone,
  });
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center line-header">
        <nav className="navBar">
          <Link to={"/"} className="">
            <span className="fs-4 text-dark">
              <img src="logo2.png" alt="Logo" width="60"></img>
            </span>
          </Link>
          <ul className="nav nav-pills">
            {/* NAO LOGADO E CLIENTE LOGADO */}
            {(!signed || user.permissao === 3) && (
              <>
                <li className="nav-item">
                  <Link className="navText" to={"/"}>
                    BLOGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"/nossaEquipe"}>
                    NOSSA EQUIPE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"/emergencia"}>
                    EMERGÊNCIA
                  </Link>
                </li>
              </>
            )}
            {/* CLIENTE LOGADO */}
            {signed && user.permissao === 3 && (
              <>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    CONSULTA
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    PETS
                  </Link>
                </li>
              </>
            )}
            {/* FUNCIONARIO E ADMIN LOGADO */}
            {signed && (user.permissao === 2 || user.permissao === 1) && (
              <>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    CONSULTAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    CLIENTES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    BLOGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    MATERIAIS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    LABORATÓRIOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"#"}>
                    SERVIÇOS
                  </Link>
                </li>
              </>
            )}
            {/*ADMIN LOGADO */}
            {signed && user.permissao === 1 && (
              <li className="nav-item">
                <Link className="navText" to={"#"}>
                  FUNCIONÁRIOS
                </Link>
              </li>
            )}
          </ul>
          {!signed && (
            <Link className="corverde" to={"/login"}>
              LOGIN
            </Link>
          )}
          {signed && (
            <>
              {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="">
                  <Container fluid>
                    <Navbar.Toggle
                      className="unsetTudo"
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      <img src="gato.svg" width="40" alt="User"></img>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header
                        closeButton
                        onHide={() =>
                          setUserForm({
                            name: user.name,
                            email: user.email,
                            telefone: user.telefone,
                          })
                        }
                      >
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        >
                          Olá, {userForm.name}!
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body className="FormWrapper">
                        <Form className="bodyOffCanvas">
                          <span className="navText">
                            Modificar Dados do Usuário:
                          </span>
                          <Form.Label className="w-100 mt-3">Nome:</Form.Label>
                          <Form.Control
                            type="text"
                            value={userForm.name}
                            placeholder="Seu Nome Aqui!!"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                              setUserForm((prevState) => {
                                return {
                                  ...prevState,
                                  name: e.target.value,
                                };
                              });
                            }}
                          />
                          <Form.Label className="w-100 mt-3">
                            Telefone:
                          </Form.Label>
                          <Form.Control
                            type="number"
                            value={userForm.telefone}
                            placeholder="Seu Telefone Aqui!!"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => {
                              setUserForm((prevState) => {
                                return {
                                  ...prevState,
                                  telefone: e.target.value,
                                };
                              });
                            }}
                          />
                          <Form.Label className="w-100 mt-3">
                            E-mail:
                          </Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={user.email}
                            className="me-2"
                            aria-label="email"
                          />
                          <button className="corverde mt-5">EDITAR</button>
                        </Form>
                        <button
                          className="corvermelha"
                          onClick={() => setSigned(false)}
                        >
                          LOGOUT
                        </button>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;

import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Form } from "react-bootstrap";
import { useAuthCtx } from "../../context/AuthContext";
import logo3 from "../../assets/logo3.png"

const Header = () => {
  const { logout, user, signed } = useAuthCtx();
  // const [userForm, setUserForm] = useState({
  //   nome: user.nome,
  //   telefone: user.telefone,
  // });
 
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center line-header">
        <nav className="navBar">
          <Link to={"/"}>
            <span className="fs-4 text-dark">
              <img src={logo3} alt="Logo" width="60px" height="60px"/>
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
                  <Link className="navText" to={"/cliente/consulta"}>
                    CONSULTA
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="navText" to={"/cliente/pet"}>
                    PETS
                  </Link>
                </li>
              </>
            )}
            {/* FUNCIONARIO E ADMIN LOGADO */}
            {signed && (user.permissao === 2 || user.permissao === 1) && (
              <>
                <li className="nav-item">
                  <Link className="navText" to={"/func/consulta"}>
                    CONSULTAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={"/func/cliente/"}>
                    CLIENTES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={""}>
                    BLOGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={""}>
                    MATERIAIS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={""}>
                    LABORATÓRIOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navText" to={""}>
                    SERVIÇOS
                  </Link>
                </li>
              </>
            )}
            {/*ADMIN LOGADO */}
            {signed && user.permissao === 1 && (
              <li className="nav-item">
                <Link className="navText" to={""}>
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
                <Navbar key={expand} expand={expand}>
                  <Container fluid>
                    <Navbar.Toggle
                      className="unsetTudo"
                      aria-controls={`offcanvasNavbar-expand-${expand}`}
                    >
                      <span className="buttonText">Usuário</span>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header
                        closeButton
                        // onHide={() =>
                        //   setUserForm({
                        //     nome: user.nome,
                        //     email: user.email,
                        //     telefone: user.telefone,
                        //   })}
                      >
                        <Offcanvas.Title
                          id={`offcanvasNavbarLabel-expand-${expand}`}
                        >
                          Olá, {user.nome}!
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
                            value={user.nome}
                            placeholder="Seu Nome Aqui!!"
                            className="me-2"
                            aria-label="Search"
                            // onChange={(e) => {
                            //   setUserForm((prevState) => {
                            //     return {
                            //       ...prevState,
                            //       nome: e.target.value,
                            //     };
                            //   });
                            // }}
                          />
                          <Form.Label className="w-100 mt-3">
                            Telefone:
                          </Form.Label>
                          <Form.Control
                            type="number"
                            value={user.telefone}
                            // value={userForm.telefone}
                            placeholder="Seu Telefone Aqui!!"
                            className="me-2"
                            aria-label="Search"
                            // onChange={(e) => {
                            //   setUserForm((prevState) => {
                            //     return {
                            //       ...prevState,
                            //       telefone: e.target.value,
                            //     };
                            //   });
                            // }}
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
                        <Link
                          className="corvermelha"
                          onClick={logout}
                          to={"/"}
                        >
                          LOGOUT
                        </Link>
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

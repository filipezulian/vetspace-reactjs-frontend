import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Form } from "react-bootstrap";
import styles from "./css/NovaConsulta.module.css";

const NovaConsulta = () => {
const [descricao, setDescricao] = useState("");
const maxDescricaoLength = 100;

const handleDescricaoChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxDescricaoLength) {
      setDescricao(value);
    }
};

  return (
    <div className={`${styles.novaConsultaBody}`}>
        <span className={styles.titulo}>NOVA CONSULTA</span>
        <div className={`${styles.formConsulta}`}>
            <Form className={`${styles.forms}`}>
                <div className={styles.columns}>
                    <div>
                        <Form.Label className="w-100 mt-2">Escolha o dia:</Form.Label>
                        <Form.Control type="date" className={styles.boxShadow}/>
                    </div>
                    <div>
                        <Form.Label className="w-100 mt-4">Escolha o horario:</Form.Label>
                        <Form.Select
                          className={styles.boxShadow}
                          type="option"
                          name="generohorario">
                        <option>9:00</option>
                        <option>9:30</option>
                        <option>10:30</option>
                        <option>11:00</option>
                        <option>14:30</option>
                        <option>15:00</option>
                        </Form.Select>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div>
                        <Form.Label className="w-100 mt-2">Escolha o Pet:</Form.Label>
                        <Form.Select
                          className={styles.boxShadow}
                          type="option"
                          name="generohorario">
                        <option>Pandora</option>
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Label className="w-100 mt-4">Observação:</Form.Label>
                        <Form.Control
                            className={`${styles.boxShadow} ${styles.resizeNone}`}
                            as="textarea"
                            rows={3}
                            maxLength={maxDescricaoLength}
                            name="descricao"
                            value={descricao}
                            onChange={handleDescricaoChange}
                            />
                    </div>
                </div>
            </Form>
            <div className={styles.botoes}>
              <Link to="/cliente/consulta" className={`${styles.botao} ${styles.boxShadow}`}>Voltar</Link>
              <Link to="/cliente/consulta" onClick={console.log("ok")} className={`${styles.botao} ${styles.boxShadow}`}>Marcar</Link>
            </div>
    </div>
    </div>
  );
};

export default NovaConsulta;

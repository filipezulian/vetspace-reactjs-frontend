import React, { useEffect, useState } from "react";
import { Form, Table, Button, Modal } from "react-bootstrap";
import styles from "./css/ComponenteConsultaMarcada.module.css";
import { aceitarConsulta, getConsultasNaoAprovadas, rejeitarConsulta } from "../../../routes/Consulta";

const ComponenteConsultaAprovar = () => {
  const [consultas, setConsultas] = useState([]);
  const [filteredConsultas, setFilteredConsultas] = useState([]);
  const [clienteFilter, setClienteFilter] = useState("");
  const [dataFilter, setDataFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedConsulta, setSelectedConsulta] = useState(null);

  useEffect(() => {
    const getConsultas = async () => {
      try {
        const response = await getConsultasNaoAprovadas();
        setConsultas(response);
        setFilteredConsultas(response);
      } catch (error) {
        console.error("Error fetching Consultas:", error);
      }
    };
    getConsultas();
  }, []);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const filtered = consultas.filter((consulta) => {
      const clienteMatch = consulta.pet.usuario.nome.toLowerCase().includes(clienteFilter.toLowerCase());
      const dataMatch = formatDate(consulta.data).includes(dataFilter);
      return clienteMatch && dataMatch;
    });
    setFilteredConsultas(filtered);
  }, [clienteFilter, dataFilter, consultas]);

  const handleShowModal = (consulta) => {
    setSelectedConsulta(consulta);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConsulta(null);
  };

  const handleAprovar = async () => {
    if (selectedConsulta) {
      try {
        await aceitarConsulta(selectedConsulta.id);
        handleCloseModal();
        setConsultas(consultas.filter(consulta => consulta.id !== selectedConsulta.id));
      } catch (error) {
        console.error("Error accepting Consulta:", error);
      }
    }
  };

  const handleRejeitar = async () => {
    if (selectedConsulta) {
      try {
        await rejeitarConsulta(selectedConsulta.id);
        handleCloseModal();
        setConsultas(consultas.filter(consulta => consulta.id !== selectedConsulta.id));
      } catch (error) {
        console.error("Error rejecting Consulta:", error);
      }
    }
  };

  return (
    <div className={styles.divBody}>
      <div className={styles.filtroDiv}>
        <div className={styles.flexStart}>
          <Form.Label>Cliente:</Form.Label>
          <Form.Control type="text" value={clienteFilter} onChange={(e) => setClienteFilter(e.target.value)} />
        </div>
        <div className={styles.flexStart}>
          <Form.Label>Data:</Form.Label>
          <Form.Control type="date" value={dataFilter} onChange={(e) => setDataFilter(e.target.value)} />
        </div>
      </div>
      <div>
        <div className={styles.divTitulo}>
          <span>CONSULTAS MARCADAS:</span>
        </div>
        <div className={styles.divTable}>
          <Table responsive="sm" hover bordered={false}>
            <thead>
              <tr>
                <th className={styles.trLeft}>#</th>
                <th className={styles.trMid}>Cliente</th>
                <th className={styles.trMid}>Pet</th>
                <th className={styles.trMid}>Data</th>
                <th className={styles.trMid}>Horário</th>
                <th className={styles.trMid}>Serviço</th>
              </tr>
            </thead>
            <tbody>
              {filteredConsultas.map((consulta, index) => (
                <tr key={consulta.id} onClick={() => handleShowModal(consulta)}>
                  <td>{index + 1}</td>
                  <td>{consulta.pet.usuario.nome}</td>
                  <td>{consulta.pet.nome}</td>
                  <td>{formatDate(consulta.data).split(' ')[0]}</td>
                  <td>{formatDate(consulta.data).split(' ')[1]}</td>
                  <td>{consulta.obs}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Consulta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja aprovar ou rejeitar a consulta?</p>
          <p><strong>Cliente:</strong> {selectedConsulta?.pet.usuario.nome}</p>
          <p><strong>Pet:</strong> {selectedConsulta?.pet.nome}</p>
          <p><strong>Data:</strong> {formatDate(selectedConsulta?.data).split(' ')[0]}</p>
          <p><strong>Horário:</strong> {formatDate(selectedConsulta?.data).split(' ')[1]}</p>
          <p><strong>Serviço:</strong> {selectedConsulta?.obs}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleRejeitar}>
            Rejeitar
          </Button>
          <Button variant="success" onClick={handleAprovar}>
            Aprovar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ComponenteConsultaAprovar;

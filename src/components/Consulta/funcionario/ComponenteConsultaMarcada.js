import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./css/ComponenteConsultaMarcada.module.css";
import { getConsultasAprovadas } from "../../../routes/Consulta";

const ComponenteConsultaMarcada = () => {
  const [consultas, setConsultas] = useState([]);
  const [filteredConsultas, setFilteredConsultas] = useState([]);
  const [clienteFilter, setClienteFilter] = useState("");
  const [dataFilter, setDataFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getConsultas = async () => {
      try {
        const response = await getConsultasAprovadas();
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

  const clearFilters = () => {
    setClienteFilter("");
    setDataFilter("");
    setFilteredConsultas(consultas); // Reset filteredConsultas to the original list
  };
  
  useEffect(() => {
    const filtered = consultas.filter((consulta) => {
      const clienteMatch = consulta.pet.usuario.nome.toLowerCase().includes(clienteFilter.toLowerCase());
      const consultaDate = new Date(consulta.data);
      const formattedDate = `${consultaDate.getFullYear()}-${(consultaDate.getMonth() + 1).toString().padStart(2, '0')}-${consultaDate.getDate().toString().padStart(2, '0')}`;
      const dataMatch = formattedDate.includes(dataFilter);
      return clienteMatch && dataMatch;
    });
    setFilteredConsultas(filtered);
  }, [clienteFilter, dataFilter, consultas]);

  const handleRowClick = (consulta) => {
    navigate(`/func/consulta/${consulta.id}`, { state: consulta });
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
        <span className={styles.clearButton} onClick={clearFilters}>Clear</span>
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
                <th className={styles.trRight}>Serviço</th>
              </tr>
            </thead>
            <tbody>
              {filteredConsultas.map((consulta, index) => (
                <tr
                  key={consulta.id}
                  onClick={() => handleRowClick(consulta, consulta.id)}
                >
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
    </div>
  );
};

export default ComponenteConsultaMarcada;

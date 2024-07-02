import React, { useEffect, useState } from "react";
import styles from "../consulta/css/consultaView.module.css";
import { Table } from "react-bootstrap";
import { getClientes } from "../../../routes/Pet";

const ClienteView = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data || []);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <Table responsive="sm" hover bordered={false}>
        <thead>
          <tr>
            <th className={styles.trLeft}>#</th>
            <th className={styles.trMid}>Cliente</th>
            <th className={styles.trMid}>Telefone</th>
            <th className={styles.trMid}>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={cliente.id}>
              <td>{index + 1}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClienteView;

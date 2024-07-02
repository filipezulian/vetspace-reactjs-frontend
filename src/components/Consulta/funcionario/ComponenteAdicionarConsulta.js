import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { salvarConsulta } from "../../../routes/Consulta";
import { getClientes, getPetsByCliente } from "../../../routes/Pet";
import { getServicos } from "../../../routes/Servicos";

const ComponenteAdicionarConsulta = () => {
  const [clientes, setClientes] = useState([]);
  const [pets, setPets] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState("");
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedServico, setSelectedServico] = useState("");
  const [data, setData] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [obs, setObs] = useState("");

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await getClientes();
      setClientes(response || []);
    };
    const fetchServicos = async () => {
      const response = await getServicos();
      setServicos(response || []);
    };

    fetchClientes();
    fetchServicos();
  }, []);

  const handleClienteChange = async (event) => {
    const clienteId = event.target.value;
    setSelectedCliente(clienteId);
    const response = await getPetsByCliente(clienteId);
    setPets(response || []);
  };

  const handleSalvar = async () => {
    const formData = {
      petId: selectedPet,
      data: `${data}T${selectedTime}`, 
      obs: obs,
      servicos: selectedServico,
    };
    await salvarConsulta(formData);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <Form.Label>Cliente:</Form.Label>
            <Form.Select value={selectedCliente} onChange={handleClienteChange}>
              <option value="">Selecione um cliente</option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Form.Label>Pet:</Form.Label>
            <Form.Select value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
              <option value="">Selecione um pet</option>
              {pets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.nome}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Form.Label>Data:</Form.Label>
            <Form.Control type="date" value={data} onChange={(e) => setData(e.target.value)} />
          </div>
          <div>
            <Form.Label>Horário:</Form.Label>
            <Form.Select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Selecione um horário</option>
              {[
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
              ].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div>
          <div>
            <Form.Label>Serviço:</Form.Label>
            <Form.Select
              value={selectedServico}
              onChange={(e) => setSelectedServico(e.target.value)}
            >
              <option value="">Selecione um serviço</option>
              {servicos.map((servico) => (
                <option key={servico.id} value={servico.id}>
                  {servico.nome}
                </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Form.Label>Observação:</Form.Label>
            <Form.Control type="text" value={obs} onChange={(e) => setObs(e.target.value)} />
          </div>
        </div>
      </div>
      <div>
        <Link to="/func/consulta">Voltar</Link>
        <Button onClick={handleSalvar}>Adicionar</Button>
      </div>
    </div>
  );
};

export default ComponenteAdicionarConsulta;

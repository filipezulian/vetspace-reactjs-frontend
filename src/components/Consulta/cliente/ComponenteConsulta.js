import React, { useEffect, useState } from "react";
import styles from "./css/ComponenteConsulta.module.css";
import { Form } from "react-bootstrap";
import { getPetsPorUsuario, submitConsulta } from "../../../routes/Pet";
import { useAuthCtx } from "../../../context/AuthContext";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

const ComponenteConsulta = () => {
  const [cards, setCards] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [observation, setObservation] = useState("");
  const cntx = useAuthCtx();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPetsPorUsuario(cntx.id);
        setCards(response);
      } catch (error) {
        console.error("Error fetching Pets:", error);
      }
    };

    fetchPets();
  }, [cntx.id]);

  const createNotification = (type) => {
    switch (type) {
      case "success":
        NotificationManager.success(
          "Você solicitou uma nova consulta",
          "Sucesso!"
        );
        break;
      case "warning":
        NotificationManager.warning(
          "Parece que esqueceu de preencher o formulário! Tente de novo!",
          "Opa!",
          3000
        );
        break;
      case "error":
        NotificationManager.error(
          "Erro!",
          "Ocorreu um erro ao solicitar a consulta!",
          5000
        );
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const dateTime = `${selectedDate}T${selectedTime}:00`;

    const formData = {
      pet: {
        id: selectedPet,
      },
      data: dateTime,
      obs: observation,
    };

    try {
      const response = await submitConsulta(formData);
      if (!response) {
        createNotification("warning");
      } else if (response) {
        createNotification("success");
        clear();
      }
    } catch (error) {
      console.error("Error submitting consulta:", error);
      createNotification("error");
    }
  };

  const clear = () => {
    setSelectedPet("");
    setSelectedDate("");
    setSelectedTime("");
    setObservation("");
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className={`${styles.novaConsultaBody}`}>
      <NotificationContainer />
      <span className={styles.titulo}>NOVA CONSULTA</span>
      <div className={`${styles.formConsulta}`}>
        <div className={styles.formDiv}>
          <Form.Label>Pet:</Form.Label>
          <Form.Select
            className={styles.formInput}
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
            <option value="">Selecione um pet</option>
            {cards.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.nome}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.formDiv}>
          <Form.Label>Dia:</Form.Label>
          <Form.Control
            className={styles.formInput}
            type="date"
            min={minDate}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className={styles.formDiv}>
          <Form.Label>Horário:</Form.Label>
          <Form.Select
            className={styles.formInput}
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
        <div className={styles.formDiv}>
          <Form.Label>Observação:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className={`${styles.formInput} ${styles.resizeNone}`}
            maxLength={120}
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
          />
        </div>
        <div className={styles.formDiv}>
          <button
            onClick={handleSubmit}
            className={`${styles.botao} ${styles.boxShadow}`}
          >
            MARCAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponenteConsulta;

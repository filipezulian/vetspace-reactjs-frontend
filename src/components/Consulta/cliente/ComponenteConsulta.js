import React, { useEffect, useState } from "react";
import styles from "./css/ComponenteConsulta.module.css";
import { Form } from "react-bootstrap";
import { getPetsPorUsuario, submitConsulta } from "../../../routes/Pet";
import { useAuthCtx } from "../../../context/AuthContext";

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

  const handleSubmit = () => {
    const dateTime = `${selectedDate}T${selectedTime}:00`;

    const formData = {
      pet: {
        id: selectedPet
      },
      data: dateTime,
      obs: observation
    };

    try {
      const response = submitConsulta(formData);
      console.log("Consulta submitted successfully:", response);
      setSelectedPet("");
      setSelectedDate("");
      setSelectedTime("");
      setObservation("");
    } catch (error) {
      console.error("Error submitting consulta:", error);
      setSelectedPet("");
      setSelectedDate("");
      setSelectedTime("");
      setObservation("");
    }
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className={`${styles.novaConsultaBody}`}>
      <span className={styles.titulo}>NOVA CONSULTA</span>
      <div className={`${styles.formConsulta}`}>
        <div className={styles.formDiv}>
          <Form.Label>Pet:</Form.Label>
          <Form.Select
            className={styles.formInput}
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
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
            <option value="">Select time</option>
            {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"].map(time => (
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
          <button onClick={handleSubmit} className={`${styles.botao} ${styles.boxShadow}`}>
            MARCAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponenteConsulta;

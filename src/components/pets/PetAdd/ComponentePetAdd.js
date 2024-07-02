import React, { useState } from "react";
import styles from "./css/ComponentePetAdd.module.css";
import { Form } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link } from "react-router-dom";
import birb from "../../../assets/birb.png";
import dog from "../../../assets/dog.png";
import gato from "../../../assets/gato.png";
import snake from "../../../assets/snake.png";
import { AddPet } from "../../../routes/Pet";
import { useAuthCtx } from "../../../context/AuthContext";

const ComponentePetAdd = (petId) => {
  const idPet= petId;
  const ctx = useAuthCtx();
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [selectedNascimento, setSelectedNascimento] = useState("");

  const clear = () => {
    setSelectedType("");
    setSelectedNascimento("");
    setName("");
  };

  const getImage = () => {
    switch (selectedType) {
      case "Cachorro":
        return dog;
      case "Pássaro":
        return birb;
      case "Réptil":
        return snake;
      default:
      case "Gato":
        return gato;
    }
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const createNotification = (type) => {
    switch (type) {
      case "success":
        NotificationManager.success("Pet cadastrado com sucesso!", "Sucesso!");
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
          "Ocorreu um erro ao cadastrar seu pet, tente denovo mais tarde!",
          5000
        );
        break;
      default:
        break;
    }
  };

  const submitForm = async () => {
    var tipo = "GATO";

    switch (selectedType) {
      case "Cachorro":
        tipo = "CACHORRO";
        break;
      case "Pássaro":
        tipo = "PASSARO";
        break;
      case "Réptil":
        tipo = "REPTIL";
        break;
      default:
      case "Gato":
        tipo = "GATO";
        break;
    }

    const data = formatDate(selectedNascimento);

    const formData = {
      tipo: tipo,
      sexo: selectedGender,
      nome: name,
      nascimento: data,
    };

    if (!idPet) {
      try {
        const response = await AddPet(formData, ctx.id);
        if (!response) {
          createNotification("warning");
          clear();
        } else if (response) {
          createNotification("success");
          clear();
        }
      } catch (error) {
        console.error("Error submitting consulta:", error);
        createNotification("error");
      }
    }
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const maxDate = `${yyyy}-${mm}-${dd}`;

  return (
    <Form className={styles.formBody}>
      <NotificationContainer />
      <div className={styles.containerInForm}>
        <div className={styles.imgDiv}>
          <img src={getImage()} alt={selectedType} height="100" />
        </div>
        <div className={styles.divAlign}>
          <Form.Label>Tipo:</Form.Label>
          <Form.Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value=""></option>
            {["Gato", "Cachorro", "Pássaro", "Réptil"].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.divAlign}>
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            className="me-2"
            aria-label="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.divAlign}>
          <Form.Label>Nascimento:</Form.Label>
          <Form.Control
            type="date"
            name="nascimento"
            value={selectedNascimento}
            max={maxDate}
            onChange={(e) => setSelectedNascimento(e.target.value)}
          />
        </div>
        <div className={styles.divAlign}>
          <Form.Label>Gênero:</Form.Label>
          <Form.Select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">Feminino</option>
            <option value="">Masculino</option>
          </Form.Select>
        </div>
      </div>
      <div className={styles.containerInFormButtons}>
        <Link className={styles.button} to="/cliente/pet">
          Voltar
        </Link>
        <Link className={styles.button} to="#" onClick={submitForm}>
          Adicionar
        </Link>
      </div>
      <NotificationContainer />
    </Form>
  );
};

export default ComponentePetAdd;

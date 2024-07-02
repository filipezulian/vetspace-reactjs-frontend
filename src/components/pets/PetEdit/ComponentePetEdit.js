import React, { useEffect, useState } from "react";
import styles from "../PetAdd/css/ComponentePetAdd.module.css";
import { Form } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link, useNavigate, useParams } from "react-router-dom";
import birb from "../../../assets/birb.png";
import dog from "../../../assets/dog.png";
import gato from "../../../assets/gato.png";
import snake from "../../../assets/snake.png";
import { editPet, getPetById } from "../../../routes/Pet";

const ComponentePetEdit = () => {
  const { id } = useParams();
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [selectedNascimento, setSelectedNascimento] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await getPetById(id);
        setName(response.nome);
        setSelectedNascimento(response.nascimento);
        setSelectedGender(response.sexo ? "Masculino" : "Feminino");
        switchTipo(response.tipo);
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    };

    fetchPet();
  }, [id]);

  const switchTipo = (tipo) => {
    switch (tipo) {
      case "CACHORRO":
        setSelectedType("Cachorro");
        break;
      case "PASSARO":
        setSelectedType("Pássaro");
        break;
      case "REPTIL":
        setSelectedType("Réptil");
        break;
      default:
      case "GATO":
        setSelectedType("Gato");
        break;
    }
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

  const createNotification = (type) => {
    switch (type) {
      case "success":
        NotificationManager.success("Pet editado com sucesso!", "Sucesso!");
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
          "Ocorreu um erro ao editar seu pet, tente novamente mais tarde!",
          5000
        );
        break;
      default:
        break;
    }
  };

  const submitForm = async () => {
    let tipo = "";

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

    const data = selectedNascimento;

    let gender = false;
    if (selectedGender === "Feminino") {
      gender = false;
    } else {
      gender = true;
    }

    const formData = {
      tipo: tipo,
      sexo: gender,
      nome: name,
      nascimento: data,
    };

    try {
      const response = await editPet(formData, id);
      if (!response) {
        createNotification("warning");
      } else {
        createNotification("success");
        setTimeout(() => {
          navigate("/cliente/pet");
        }, 1500);
      }
    } catch (error) {
      console.error("Error editing pet:", error);
      createNotification("error");
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
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </Form.Select>
        </div>
      </div>
      <div className={styles.containerInFormButtons}>
        <Link className={styles.button} to="/cliente/pet">
          Voltar
        </Link>
        <Link className={styles.button} to="#" onClick={submitForm}>
          Salvar
        </Link>
      </div>
      <NotificationContainer />
    </Form>
  );
};

export default ComponentePetEdit;

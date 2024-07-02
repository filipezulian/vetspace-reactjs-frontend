import axios from "axios";

const basedUrl2 = "http://192.168.0.117:8080";
const basedUrl = "http://localhost:8080";

export const getConsultasAprovadas = async () => {
  try {
    const response = await axios.get(`${basedUrl}/consulta/confirmadas`);
    return response.data;
  } catch (error) {
    console.error("Não foi possivel buscar consultas: ", error);
  }
};

export const getConsultasNaoAprovadas = async () => {
  try {
    const response = await axios.get(`${basedUrl}/consulta/nao-confirmadas`);
    return response.data;
  } catch (error) {
    console.error("Não foi possivel buscar consultas: ", error);
  }
};

export const rejeitarConsulta = async (id) => {
  try {
    const response = await axios.delete(`${basedUrl}/consulta/rejeitar/${id}`);
    return response.data;
  } catch (error) {
    console.error("Não foi possivel buscar consultas: ", error);
  }
};

export const aceitarConsulta = async (id) => {
  try {
    const response = await axios.put(`${basedUrl}/consulta/aprovar/${id}`);
    return response.data;
  } catch (error) {
    console.error("Não foi possivel buscar consultas: ", error);
  }
};

export const salvarConsulta = async (formData) => {
  try {
    const response = await axios.post(`${basedUrl}/consulta/funcionario`, formData);
    return response.data;
  } catch (error) {
    console.error("Não foi possivel buscar consultas: ", error);
  }
};

import axios from "axios";

const basedUrl2 = "http://192.168.0.117:8080";
const basedUrl = "http://localhost:8080";

export async function getPetsPorUsuario(id) {
  try {
    const response = await axios.get(`${basedUrl}/pet/usuario/${id}/pets`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function submitConsulta(formData) {
  try {
    const response = await axios.post(`${basedUrl}/consulta/cliente`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting consulta: ", error);
  }
}

export async function AddPet(formData, id) {
  try {
    const response = await axios.post(`${basedUrl}/pet/cadastrar/${id}`, formData)
    return response.data;
  } catch (error) {
    console.log("Error submitting Pet: ", error)
  }
}

export async function getPetById(id) {
  try {
    const response = await axios.get(`${basedUrl}/pet/${id}`)
    return response.data;
  } catch (error) {
    console.log("Error getting Pet: ", error)
  }
}

export async function editPet(formData, id) {
  try {
    const response = await axios.put(`${basedUrl}/pet/editar/${id}`, formData)
    return response.data
  } catch (error) {
    console.log("Error Editing Pet: ", error)
  }
}


export async function getHistoricoMedico(id) {
  try {
    const response = await axios.get(`${basedUrl}/historico/buscar/pet/${id}`)
    return response.data
  } catch (error) {
    console.log("Error Editing Pet: ", error)
  }
}

export const getClientes = async () => {
  try {
      const response = await axios.get(`${basedUrl}/usuario/clientes`)
      return response.data;
  } catch (error) {
      console.error(error);
  }   
}

export const getPetsByCliente = async (id) => {
  try {
      const response = await axios.get(`${basedUrl}/pet/usuario/${id}/pets`)
      return response.data;
  } catch (error) {
      console.error(error);
  }   
}

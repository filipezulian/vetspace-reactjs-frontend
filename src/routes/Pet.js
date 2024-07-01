import axios from "axios";

const basedUrl = "http://192.168.0.117:8080";
const basedUrl2 = "http://localhost:8080";

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
    console.error("Error submitting consulta:", error);
  }
}

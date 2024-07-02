import axios from "axios"

const basedUrl2 = "http://192.168.0.117:8080"
const basedUrl = "http://localhost:8080"

export const getServicos = async () => {
    try {
        const response = await axios.get(`${basedUrl}/servico`)
        return response.data;
    } catch (error) {
        console.error(error);
    }   
}
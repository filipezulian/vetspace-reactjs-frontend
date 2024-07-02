import axios from "axios"

const basedUrl2 = "http://192.168.0.117:8080"
const basedUrl = "http://localhost:8080"

export async function getBlogs() {
    try {
        const response = await axios.get(`${basedUrl}/blog`)
        return response.data;
    } catch (error) {
        console.error(error);
    }   
}
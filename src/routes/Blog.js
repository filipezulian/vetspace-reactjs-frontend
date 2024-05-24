import axios from "axios"

const basedUrl = "http://192.168.0.116:8080"

export async function getBlogs() {
    try {
        const response = await axios.get(`${basedUrl}/blog`)
        return response.data;
    } catch (error) {
        console.error(error);
    }   
}
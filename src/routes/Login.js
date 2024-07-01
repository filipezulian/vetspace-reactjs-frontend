import axios from "axios"

const basedUrl = "http://192.168.0.117:8080"
const basedUrl2 = "http://localhost:8080"

export const cadastrarUsuario = async (user, pet) => {
    try {
        await axios.post(`${basedUrl}/cliente`,{
        user: user
        }).then((response) => {
            pet.user_id = response.user_id;
        });

        await axios.post(`${basedUrl}/pet`,{
            pet: pet
        })        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    }
}
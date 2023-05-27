import axios from "axios"; 

export const api = {
    getMovies: async () => {
        let response = await axios.get("https://api.b7web.com.br/cinema/")
        return response.data;
}}
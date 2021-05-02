import axios from "axios";

const API_URL = 'http://localhost:3000/api/v1'

const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-type': 'application/json',
    }
})

export const getEstates = async() => {
    const response = await api.get("/estates/");
    return response.data.estates;
}



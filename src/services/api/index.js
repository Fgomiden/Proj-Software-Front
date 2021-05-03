import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});


//Imobiliarias
export const getClients = async () => {
    const response = await api.get("/clients/");
    return response.data.estates;
};

export const submitClients = async (imobiliaria) => {    
    const { message } = await api
      .post("/clients", imobiliaria)
      .then((response) => console.log("Resposta", response))
      .catch((error) => {
        console.error("Erro!", error);
      });
    return message;
}

//Imoveis
export const getEstates = async () => {
  const response = await api.get("/estates/");
  return response.data.estates;
};

export const submitEstates = async (imoveis) => {    
    const { message } = await api
      .post("/estates", imoveis)
      .then((response) => console.log("Resposta", response))
      .catch((error) => {
        console.error("Erro!", error);
      });
    return message;
}

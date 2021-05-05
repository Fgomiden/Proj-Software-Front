import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const api2 = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

//usuarios
export const getUsers = async () => {
  const response = await api.get("/users/");
  return response.data.users;
};

//Imobiliarias
export const getClients = async () => {
  const response = await api.get("/clients/");
  return response.data.clients;
};

export const submitClients = async (imobiliaria) => {
  const { message } = await api
    .post("/clients", imobiliaria)
    .then((response) => console.log("Resposta", response))
    .catch((error) => {
      console.error("Erro!", error);
    });
  return message;
};

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
};

//Contratos
export const getContracts = async () => {
  const response = await api.get("/contracts/");
  return response.data.contracts;
};

export const submitContracts = async (contrato) => {
  const { message } = await api
    .post("/contracts", contrato)
    .then((response) => console.log("Resposta", response))
    // .catch((error) => {
    //   console.error("Erro!", error);
    // });
  return message;
};

export const getOpenContracts = async () => {
  const response = await api.get("/open_contracts");
  return response.data.contracts;
};

export const getOpenEstates = async () => {
  const response = await api.get("/open_contracts");
  return response.data.estates;
};
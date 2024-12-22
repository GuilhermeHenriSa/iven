import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:9000", // Defina a URL base
  timeout: 10000, // (Opcional) Tempo limite para requisições
  headers: {
    "Content-Type": "application/json", // (Opcional) Headers padrão
  },
});

export default api;

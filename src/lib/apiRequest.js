import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://smart-city-backend.onrender.com/api/",
  withCredentials: true,
});

export default apiRequest;

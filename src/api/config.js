import axios from "axios";

const baseURL = process.env.POKEAPI || " https://pokeapi.co/api/v2/";

const axiosInstance = axios.create({
    baseURL: baseURL,
})

export default axiosInstance;

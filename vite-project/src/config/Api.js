import axios from "axios";

export const Api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})
import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketmovies-api-7bhe.onrender.com",
})

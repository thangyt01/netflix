import axios from "axios";

const BASE_URL ='https://netflix-dxt.herokuapp.com/api/'

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

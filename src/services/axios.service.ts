import axios from "axios";
import {access, baseURL} from "../contains";


const axiosService = axios.create({baseURL});


axiosService.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${access}`
    return config
})


export {
    axiosService
}

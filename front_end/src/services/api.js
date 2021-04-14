import axios from 'axios'
import { getToken } from './auth'

// seting aixios base Url
const api = axios.create({
    baseURL : "http://localhost:8081"
})

// here we intercept the request before this are send to backend
api.interceptors.request.use(async config => {
    // you remember this function 'getToken()'
    const token = getToken()
    if(token){
        // if we have a token this token will be setted on authorization headers
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api
import axios from 'axios';

//quando a app estiver online o http seria https
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;
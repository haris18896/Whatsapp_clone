import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bknd-whatsapp.herokuapp.com'
});

export default instance;
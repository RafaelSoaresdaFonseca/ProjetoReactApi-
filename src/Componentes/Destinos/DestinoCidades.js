import axios from 'axios';

const DestinoCidades = axios.create({
    baseURL: 'https://amazon-api.sellead.com/city'
    
});

export default DestinoCidades;
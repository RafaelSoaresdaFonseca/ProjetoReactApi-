import axios from 'axios';

const DestinoPaises = axios.create({
    baseURL: 'https://amazon-api.sellead.com/country'
    
});    
       
export default DestinoPaises;
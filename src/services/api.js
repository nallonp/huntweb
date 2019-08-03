import axios from 'axios';

//const api = axios.create({ baseURL: 'http://localhost:8080/api/v1/' });
const api = axios.create({ baseURL: 'http://rocketseat-node.herokuapp.com/api/' });

export default api;
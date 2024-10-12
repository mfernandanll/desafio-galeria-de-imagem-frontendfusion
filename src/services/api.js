// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://picsum.photos/v2',
  timeout: 10000, 
});

export default api;

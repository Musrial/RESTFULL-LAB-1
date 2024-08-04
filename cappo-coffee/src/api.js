import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reimagined-fortnight-ww6qxx7vgv9f5559-3000.app.github.dev', // Ganti dengan URL backend Anda
});

export default api;

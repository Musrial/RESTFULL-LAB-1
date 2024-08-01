import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ganti dengan alamat IP komputer Anda jika menggunakan perangkat fisik
});

export default api;

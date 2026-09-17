import axios from 'axios';

// Base URL is read from the environment so it can point at whatever the
// backend ends up being served from (see .env.example). The backend
// folder is currently empty, so this endpoint doesn't exist yet.
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosClient;

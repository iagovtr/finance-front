import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('App:Token');

  config.headers!['x-access-token'] = token;
  return config;
});

export default api;
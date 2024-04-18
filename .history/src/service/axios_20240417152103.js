import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://example.com/api',
  // Cấu hình khác nếu cần
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
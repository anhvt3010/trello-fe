import axios from 'axios';
import { API_ROOT } from '~/utils/constants';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: API_ROOT
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

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Lỗi từ phía máy chủ
      console.log(error.response.data);
      toast.error(`${error.response.data.message || 'An error occurred'}`);
      if (error.response.status === 401) {
        // Xử lý lỗi token hết hạn, ví dụ: đăng xuất người dùng
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
      }
    } else if (error.request) {
      // Không có phản hồi từ máy chủ
      toast.error('No response received');
    } else {
      // Lỗi khác
      toast.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
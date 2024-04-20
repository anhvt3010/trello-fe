import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: API_ROOT
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Lỗi từ phía máy chủ
      console.log(error.response.data);
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message || 'An error occurred';

      switch (statusCode) {
        case 400:
          // Xử lý lỗi Bad Request
          toast.error(`Bad Request: ${errorMessage}`);
          break;
        case 401:
          // Xử lý lỗi Unauthorized
          localStorage.removeItem('token');
          window.location.href = '/sign-in';
          break;
        case 409:
          // Xử lý lỗi Conflict, ví dụ: email hoặc username đã tồn tại
          toast.error(`Conflict: ${errorMessage}`);
          break;
        default:
          // Xử lý các loại lỗi khác
          toast.error(errorMessage);
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

export default axiosInstance
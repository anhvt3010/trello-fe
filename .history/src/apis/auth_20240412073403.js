import axios from 'axios'
import { toast } from 'react-toastify'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  try {
    const response = await axios.post(`${API_ROOT}auth/token`, AuthRequest)
    // Xử lý phản hồi
    return response.data
  } catch (error) {
    // Lỗi đã được xử lý bởi interceptor, không cần xử lý thêm ở đây
  }

  // Thêm một interceptor response để xử lý lỗi
  axiosInstance.interceptors.response.use(
    response => {
      // Nếu request thành công, chỉ đơn giản trả về response
      return response;
    },
    error => {
      // Xử lý lỗi dựa trên status code hoặc các điều kiện khác
      if (error.response) {
        // Lỗi từ phía máy chủ
        console.error('Server Error:', error.response.data);
        toast.error(`Server Error: ${error.response.data.message}`);
      } else if (error.request) {
        // Không có phản hồi từ máy chủ
        console.error('No response received:', error.request);
        toast.error('No response received');
      } else {
        // Lỗi khác
        console.error('Error:', error.message);
        toast.error(`Error: ${error.message}`);
      }

      // Quan trọng: Phải trả về một Promise.reject để bắt lỗi ở các nơi khác
      return Promise.reject(error);
    }
  );
}
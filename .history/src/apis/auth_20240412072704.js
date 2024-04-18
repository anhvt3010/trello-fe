import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  try {
    const response = await axios.get('https://example.com/api/resource');
    // Xử lý phản hồi
  } catch (error) {
    if (error.response) {
      // Lỗi từ phía máy chủ (vd: lỗi 404)
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      // Không có phản hồi từ máy chủ
      console.error('No response received:', error.request);
    } else {
      // Lỗi khác
      console.error('Error:', error.message);
    }
  }
  
  return response.data
}
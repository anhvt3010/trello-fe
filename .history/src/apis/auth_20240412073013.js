import axios from 'axios'
import { toast } from 'react-toastify'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  try {
    const response = await axios.post(`${API_ROOT}auth/token`, AuthRequest)
    // Xử lý phản hồi
    return response.data
  } catch (error) {
    if (error.response) {
      // Lỗi từ phía máy chủ (vd: lỗi 404)
      console.error('Server Error:', error.response)
    } else if (error.request) {
      // Không có phản hồi từ máy chủ
      toast.error('No response received:', error.request)
    } else {
      // Lỗi khác
      toast.error('Error:', error.message)
    }
  }
}
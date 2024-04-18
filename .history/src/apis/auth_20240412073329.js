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
}
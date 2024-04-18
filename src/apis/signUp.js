import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'

export const signUp = async (signUpRequest) => {
  try {
    const response = await axios.post(`${API_ROOT}users`, signUpRequest)
    return response.data
  } catch (error) {
    if (error.response) {
      // Xử lý lỗi từ phía máy chủ
      toast.error(error.response.data.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau.')
    } else {
      // Hiển thị thông báo lỗi chung
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại sau.')
    }
    return null // hoặc có thể trả về thông tin lỗi cụ thể để xử lý tiếp
  }
}
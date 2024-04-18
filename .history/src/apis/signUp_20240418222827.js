import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_ROOT } from '~/utils/constants'

export const signUp = async (signUpRequest) => {
  const navigate = useNavigate()

  try {
    const response = await axios.post(`${API_ROOT}users`, signUpRequest)
    if (response.status === 200) {
      navigate.push('/sign-in')
    }
    return response?.data
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // Hiển thị thông báo lỗi từ phản hồi
      alert(error.response.data)
    } else {
      // Hiển thị thông báo lỗi chung
      alert('Đã có lỗi xảy ra, vui lòng thử lại sau.')
    }
    return null // hoặc có thể trả về thông tin lỗi cụ thể để xử lý tiếp
  }
}
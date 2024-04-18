// utils/axiosConfig.js
import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: API_ROOT,
})

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Lỗi từ phía máy chủ
      console.error('Server Error:', error.response.data)
      toast.error(`Server Error: ${error.response.data.message || 'An error occurred'}`)
    } else if (error.request) {
      // Không có phản hồi từ máy chủ
      console.error('No response received:', error.request)
      toast.error('No response received')
    } else {
      // Lỗi khác
      console.error('Error:', error.message)
      toast.error(`Error: ${error.message}`)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
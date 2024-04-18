import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { toast } from 'react-toastify'

const axiosNoAuth = axios.create({
  baseURL: API_ROOT
})

axiosInstance.interceptors.request.use(
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
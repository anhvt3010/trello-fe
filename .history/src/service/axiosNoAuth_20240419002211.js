import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

const axiosNoAuth = axios.create({
  baseURL: API_ROOT
})

axiosNoAuth.interceptors.request.use(
  error => {
    return Promise.reject(error)
  }
)

export default axiosNoAuth
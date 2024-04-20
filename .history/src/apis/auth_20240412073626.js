import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  const response = await axios.post(`${API_ROOT}auth/token`, AuthRequest)
  return response.data
}
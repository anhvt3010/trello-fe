import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  const response = await axios.post(`${API_ROOT}auth/`, AuthRequest)
  return response.data
}
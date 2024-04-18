import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const login = async(AuthRequest) => {
  const response = await axios.get(`${API_ROOT}boards`,AuthRequest)
  return response.data
}
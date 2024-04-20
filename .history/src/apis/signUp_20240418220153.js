import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const signUp = async (SignUpRequest) => {
  const response = await axios.post(`${API_ROOT}`, SignUpRequest)
  return response?.data
}
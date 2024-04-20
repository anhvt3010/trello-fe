import axios from 'axios'
import axiosInstance from '~/service/axiosConfig'

export const signUp = async (SignUpRequest) => {
  const response = await axios.post('users', SignUpRequest)
  return response?.data
}
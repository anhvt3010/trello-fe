import axios from 'axios'
import axiosInstance from '~/service/axiosConfig'
import { API_ROOT } from '~/utils/constants'

export const login = async (AuthRequest) => {
  const response = await axiosInstance.post('auth/token', AuthRequest)
  return response?.data
}

export const logout = async (LogoutRequest) => {
  const response = await axios.post(`${API_ROOT}`, LogoutRequest)
  return response?.data
}
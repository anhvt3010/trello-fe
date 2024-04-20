import axios from 'axios'
import axiosInstance from '~/service/axiosConfig'

export const login = async (AuthRequest) => {
  const response = await axiosInstance.post('auth/token', AuthRequest)
  return response?.data
}

export const logout = async (LogoutRequest) => {
  const response = await axios.post('apiauth/logout', LogoutRequest)
  return response?.data
}
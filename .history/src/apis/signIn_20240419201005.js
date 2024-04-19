import axiosInstance from '~/service/axiosConfig'

export const login = async (AuthRequest) => {
  const response = await axiosInstance.post('auth/token', AuthRequest)
  return response?.data
}

export const logout = async (LogoutRequest) => {
  const response = await axio.post('auth/logout', LogoutRequest)
  return response?.data
}
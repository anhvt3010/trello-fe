import axiosInstance from '~/service/axiosConfig'

export const login = async (AuthRequest) => {
  const response = await axiosInstance.post('auth/token', AuthRequest)
  return response?.data
}
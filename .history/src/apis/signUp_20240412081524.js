import axiosInstance from '~/utils/axiosConfig'

export const login = async (AuthRequest) => {
  const response = await axiosInstance.post('users/token', AuthRequest)
  return response?.data
}
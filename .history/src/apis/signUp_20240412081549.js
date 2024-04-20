import axiosInstance from '~/utils/axiosConfig'

export const signUp = async (SignUpRequest) => {
  const response = await axiosInstance.post('users', SignUpRequest)
  return response?.data
}
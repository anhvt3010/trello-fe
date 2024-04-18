import axiosInstance from '~/service/axiosConfig'

export const signUp = async (SignUpRequest) => {
  const response = await axiosInstance.post('users', SignUpRequest)
  return response?.data
}
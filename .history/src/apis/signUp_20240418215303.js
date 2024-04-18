import axiosInstance from '~/service/axiosConfig'

export const signUp = async (SignUpRequest) => {
  const response = await a.post('users', SignUpRequest)
  return response?.data
}
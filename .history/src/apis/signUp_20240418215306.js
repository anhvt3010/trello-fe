import axiosInstance from '~/service/axiosConfig'

export const signUp = async (SignUpRequest) => {
  const response = await axi.post('users', SignUpRequest)
  return response?.data
}
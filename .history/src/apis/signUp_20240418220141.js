import axios from 'axios'

export const signUp = async (SignUpRequest) => {
  const response = await axios.post(```, SignUpRequest)
  return response?.data
}
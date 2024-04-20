import axios from 'axios'

export const login = async(AuthRequest) => {
  const response = await axios.get(`${API_ROOT}boards/${boardId}`)
  return response.data
}
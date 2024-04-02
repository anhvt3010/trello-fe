import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const create = async (boardId) => {
  const response = await axios.get(`${API_ROOT}boards/${boardId}`)
  return response.data
}
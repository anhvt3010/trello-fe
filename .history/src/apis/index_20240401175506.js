import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}boards/${boardId}`)
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, ) => {
  const response = await axios.get(`${API_ROOT}boards/${boardId}`)
  return response.data
}
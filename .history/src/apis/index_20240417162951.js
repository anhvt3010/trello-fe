import axiosInstance from '~/service/axiosConfig'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axiosInstance.get(`boards/${boardId}`)
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axiosInstance.put(`${API_ROOT}boards/${boardId}`, updateData)
  return response.data
}
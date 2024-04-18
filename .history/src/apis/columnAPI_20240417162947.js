import { API_ROOT } from '~/utils/constants'
import axiosInstance from '~/service/axiosConfig'

export const createNewColumnAPI = async (newColumnData) => {
  const response = await axiosInstance.post(`${API_ROOT}columns`, newColumnData)
  return response.data
}

export const movingCardInColumn = async (columnId, updateData) => {
  const response = await axiosInstance.put(`${API_ROOT}columns/${columnId}`, updateData)
  return response.data
}

export const movingCardDrifferentColumns = async (updateData) => {
  const response = await axiosInstance.put(`${API_ROOT}columns/moving-different-columns`, updateData)
  return response.data
}

export const deleteColumnAPI = async (columnId) => {
  const response = await axiosInstance.delete(`${API_ROOT}columns/${columnId}`)
  return response.data
}
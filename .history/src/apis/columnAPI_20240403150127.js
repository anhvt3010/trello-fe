import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}columns/${columnId}`, updateData)
  return response.data
}

export const movingCard = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}columns/${columnId}`, updateData)
  return response.data
}
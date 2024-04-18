import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import axiosInstance from '~/service/axiosConfig'

export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}cards`, newCardData)
  return response.data
}
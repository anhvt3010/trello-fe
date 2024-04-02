import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const createNewCardAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}columns`, newColumnData)
  return response.data
}
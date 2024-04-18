import axiosInstance from '~/utils/axiosConfig'

export const login = async (AuthRequest) => {
  try {
    const response = await axiosInstance.post('auth/token', AuthRequest);
    return response.data;
  } catch (error) {
    throw error;
  }
}
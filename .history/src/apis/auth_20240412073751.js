import axiosInstance from "~/utils/axiosConfig";

export const login = async (AuthRequest) => {
  try {
    const response = await axiosInstance.post('auth/token', AuthRequest);
    return response.data;
  } catch (error) {
    // Lỗi đã được xử lý bởi interceptor, nếu cần xử lý gì thêm bạn có thể thêm vào đây
    throw error; // Ném lỗi để có thể xử lý ở nơi gọi hàm login nếu cần
  }
};
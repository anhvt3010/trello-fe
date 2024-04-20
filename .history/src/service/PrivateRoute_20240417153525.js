import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const token = localStorage.getItem('token')

  if (token) {
    // Chuyển hướng người dùng về trang đăng nhập nếu không có token
    return <Navigate to="/sign-in" />
  }

  return children
}

export default PrivateRoute
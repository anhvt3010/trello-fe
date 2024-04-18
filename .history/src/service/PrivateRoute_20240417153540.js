import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')

  return children
}

export default PrivateRoute
import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoute from './service/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <PrivateRoute path="/" element={<Board />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App

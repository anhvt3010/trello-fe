import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default App

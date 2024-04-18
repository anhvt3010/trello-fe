import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Board /> */}
        {/* <SignIn /> */}
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App

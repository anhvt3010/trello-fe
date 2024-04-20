import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import { Router } from '@mui/icons-material'

function App() {
  return (
    <Router>
      <Routes>
{/* <Board /> */}
      {/* <SignIn /> */}
      <SignUp />
      </Routes>
    </Router>
  )
}

export default App

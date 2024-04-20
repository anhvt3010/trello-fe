import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoute from './service/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <PrivateRoute path="/" component={<Board />} />
        <Route path="/sign-in" component={<SignIn />} />
        <Route path="/sign-up" component={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App

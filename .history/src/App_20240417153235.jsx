import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import SignIn from './pages/Auth/signIn'
import SignUp from './pages/Auth/signUp'
import PrivateRoute from './service/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <PrivateRoute path="/home" element={<Board />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
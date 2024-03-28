import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from '~/theme'
// Cau hinh thong bao toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Cau hinh Mui Dialog
import { ConfirmProvider } from 'material-ui-confirm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer
        position='bottom-right'
        theme='colored'
        autoClose={3000}
      />
      <ConfirmProvider />
    </CssVarsProvider>
  </React.StrictMode>
)

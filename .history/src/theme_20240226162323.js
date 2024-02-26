import { createTheme } from '@mui/material/styles'
import { Experimental_CssVarsProvider as  } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    mode: 'light' //default light mode
  }
})

export default theme
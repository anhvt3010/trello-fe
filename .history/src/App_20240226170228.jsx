import './App.css'
import useMediaQuery from '@mui/material'
import {
  Button,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const preferDarkMode = useMediaQuery('(')
  return (
    <Button onClick={() => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }}>
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
    </>
  )
}

export default App

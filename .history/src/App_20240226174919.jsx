import './App.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';

import {
  Button,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (e) => {
    const selectedMode = e.target.value
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <LightModeIcon fontSize='small' /> Light
        </MenuItem>
        <MenuItem value="dark">
          <DarkModeIcon /> Dark
        </MenuItem>
        <MenuItem value="system">
          <SettingsSystemDaydreamIcon /> System
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
    </>
  )
}

export default App

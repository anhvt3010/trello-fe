import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns() {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Column />

      <Box sx={{
        
      }}>

      </Box>
    </Box>
  )
}

export default ListColumns
import { Chip } from '@mui/material'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: 'none',
            paddingX: '5px',
            borderRadius: '4px',
            '& MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<DashboardIcon />}
          label='Anhvt Spring + ReactJS'
          clickable />

        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: 'none',
            paddingX: '5px',
            borderRadius: '4px',
            '& MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<DashboardIcon />}
          label='Public/Private Workspace'
          clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

      </Box>
    </Box>
  )
}

export default BoardBar
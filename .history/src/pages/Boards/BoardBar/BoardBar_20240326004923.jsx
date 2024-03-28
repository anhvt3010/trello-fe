import { Avatar, AvatarGroup, Button, Chip, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formater'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
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
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable />
        </Tooltip>

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label='Automnation'
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label='Filter'
          clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined" startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>

        <AvatarGroup total={24} max={4}
          sx={{
            // gap: '5px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 12,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="" />
          </Tooltip>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="" />
          </Tooltip>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
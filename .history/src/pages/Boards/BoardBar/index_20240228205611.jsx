import { Avatar, AvatarGroup, Chip, Tooltip } from '@mui/material'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'

const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

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
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label='Anhvt Spring + ReactJS'
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
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
        <AvatarGroup total={24} max={4}
          sx={{
            '& .MuiAvatar-root'
          }}>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="anhvt">
            <Avatar alt="anhvt" src="/static/images/avatar/3.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
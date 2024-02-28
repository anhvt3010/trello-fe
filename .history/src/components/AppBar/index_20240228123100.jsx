import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import { Typography } from '@mui/material'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex'}}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box >
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant='span'>Trello</Typography>
        </Box>
      </Box>

      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
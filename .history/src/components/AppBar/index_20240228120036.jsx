import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg'
import { SvgIcon } from '@mui/material'

function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <img src={TrelloIcon} in/>
        {/* <SvgIcon component={TrelloIcon} inheritViewBox /> */}
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg'
// import SvgIcon from '@mui/material/SvgIcon'

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
        <img src={TrelloIcon} viewBox="0 0 24 24" />
        {/* <SvgIcon component={TrelloIcon} viewBox="0 0 24 24" /> */}
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
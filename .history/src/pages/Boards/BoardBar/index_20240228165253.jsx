import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      gap:2,
      overflowX: 
    }}>
      Board Bar
    </Box>
  )
}

export default BoardBar
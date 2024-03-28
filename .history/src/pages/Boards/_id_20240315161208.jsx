import { Box, CircularProgress, Container, Typography } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

function Board() {

  if (!board) {
    return (
      <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:2,
        width:'100vh',
        height:'1'
      }}>
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }


  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  )
}

export default Board
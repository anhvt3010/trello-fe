import { Box, CircularProgress, Container, Typography } from '@mui/material'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'

function Board() {
  // sử dụng react
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '1'
  }, [])

  // Xử lý xóa column và card trong nó
  const deleteColumnDetails = (columnId) => {
    console.log(columnId)

  }

  // if (!board) {
  //   return (
  //     <Box sx={{
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       gap: 2,
  //       width: '100vh',
  //       height: '100vh'
  //     }}>
  //       <CircularProgress />
  //       <Typography>Loading Board...</Typography>
  //     </Box>
  //   )
  // }


  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent
        board={mockData?.board}

        deleteColumnDetails={deleteColumnDetails}
      />
    </Container>
  )
}

export default Board
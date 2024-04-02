import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'
import { mockData } from '~/apis/mock-data'
import { createNewColumnAPI } from '~/apis/columnAPI'

function Board() {
  const [board, setBoard] = useState(null)

  // sử dụng react-router-dom để lấy boardId từ URL về
  useEffect(() => {
    const boardId = 'board-id-01'
    fetchBoardDetailsAPI(boardId).then((res) => {
      setBoard(res.data)
    })
  }, [])

  // Gọi API tạo mới Column và cập nhật lại State Board
  const creatNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI(newColumnData)
    console.log(creatNewColumn)


  }

  // Xử lý xóa column và card trong nó
  const deleteColumnDetails = (columnId) => {
    // console.log(columnId)

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
      <BoardBar board={board} />
      {/* <BoardBar board={mockData?.board} /> */}
      <BoardContent
        // board={mockData?.board}
        board={board}
        createNewColumn={createNewColumn}
        deleteColumnDetails={deleteColumnDetails}
      />
    </Container>
  )
}

export default Board
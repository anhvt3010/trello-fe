import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'
import { mockData } from '~/apis/mock-data'
import { createNewColumnAPI } from '~/apis/columnAPI'
import { createNewCardAPI } from '~/apis/cardAPI'

function Board() {
  const [board, setBoard] = useState(null)

  // sử dụng react-router-dom để lấy boardId từ URL về
  useEffect(() => {
    const boardId = 'board-id-02'
    fetchBoardDetailsAPI(boardId).then((res) => {
      setBoard(res.data)
    })
  }, [])

  // Gọi API tạo mới Column và cập nhật lại State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    //cập nhật lại State Board
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columns.columnOrderIds.push(createdColumn._id)\
  }

  // Gọi API tạo mới Card và cập nhật lại State Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData
    })

    //cập nhật lại State Board

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
        createNewCard={createNewCard}
        deleteColumnDetails={deleteColumnDetails}
      />
    </Container>
  )
}

export default Board
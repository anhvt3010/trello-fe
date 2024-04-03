import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI, updateBoardDetailsAPI } from '~/apis'
import { createNewColumnAPI, deleteColumnAPI, movingCardDrifferentColumns, movingCardInColumn } from '~/apis/columnAPI'
import { createNewCardAPI } from '~/apis/cardAPI'
import { isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formater'
import { mapOrder } from '~/utils/sorts'
import { Box, CircularProgress, Typography } from '@mui/material'

function Board() {
  const [board, setBoard] = useState(null)

  // sử dụng react-router-dom để lấy boardId từ URL về
  useEffect(() => {
    const boardId = 'board-id-01'
    fetchBoardDetailsAPI(boardId).then((res) => {

      res.data.columns = mapOrder(res.data.columns, res.data.columnOrderIds, '_id')

      // Xu ly keo tha khi column rong
      res.data.columns.forEach(column => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        } else {
          column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        }
      })
      setBoard(res.data)
    })
  }, [])

  // Gọi API tạo mới Column và cập nhật lại State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    createdColumn.data.cards = [generatePlaceholderCard(createdColumn.data)]
    createdColumn.data.cardOrderIds = [generatePlaceholderCard(createdColumn.data)._id]

    //cập nhật lại State Board
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn.data)
    newBoard.columnOrderIds.push(createdColumn.data._id)
    setBoard(newBoard)
  }

  // Gọi API tạo mới Card và cập nhật lại State Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData
    })

    //cập nhật lại State Board
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.data.columnId)
    if (columnToUpdate) {
      if (columnToUpdate.cards.some(card => card.FE_Placeholder)) {
        columnToUpdate.cards = [createdCard.data]
        columnToUpdate.cardOrderIds = [createdCard.data._id]
      } else {
        columnToUpdate.cards.push(createdCard.data)
        columnToUpdate.cardOrderIds.push(createdCard.data._id)
      }
    }
    setBoard(newBoard)
  }


  const moveColumns = async (dndOrderedColumns) => {
    // Update du lieu cho Board
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    // Goi API update board
    updateBoardDetailsAPI(newBoard._id, newBoard.columnOrderIds)
  }

  const moveCardsInColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    // Update du lieu cho Board
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    setBoard(newBoard)
    // Goi API update card
    movingCardInColumn(columnId, dndOrderedCardIds)
  }

  const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
    // Update du lieu cho Board
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    // Goi API
    let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
    if (prevCardOrderIds[0].includes('placeholder-card')) prevCardOrderIds = []

    movingCardDrifferentColumns({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
    })
  }

  // Xử lý xóa column và card trong nó
  const deleteColumnDetails = (columnId) => {
    // Update du lieu cho Board
    const newBoard = { ...board }
    newBoard.columns = newBoard.columns.fil
    columnToUpdate.cardOrderIds = dndOrderedCardIds

    setBoard(newBoard)
    // Goi API
    deleteColumnAPI(columnId).then(res => {
      console.log('🚀 ~ deleteColumnAPI ~ res:', res)

    })
  }

  if (!board) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100vh',
        height: '100vh'
      }}>
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }


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
        moveColumns={moveColumns}
        moveCardsInColumn={moveCardsInColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
        deleteColumnDetails={deleteColumnDetails}
      />
    </Container>
  )
}

export default Board
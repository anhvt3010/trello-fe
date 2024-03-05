import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { useEffect, useState } from 'react'

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event

    if(active.id !== over.id){
      
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumn} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
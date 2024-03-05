import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  return (
    <DndContext
  )
}

export default BoardContent
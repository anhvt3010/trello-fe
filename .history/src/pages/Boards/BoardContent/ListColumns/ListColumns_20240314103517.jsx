import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import { NoteAdd } from '@mui/icons-material'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'

function ListColumns({ columns }) {

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toogleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>

        {columns?.map(column => <Column key={column._id} column={column} />)}

        {/* Box Add new column CTA */}
        {!openNewColumnForm
          ?
          :
        }
        
      </Box>
    </SortableContext>
  )
}

export default ListColumns
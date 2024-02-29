import { Attachment, Comment, Group } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'

function ListCards() {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} - 
      ${COLUMN_FOOTER_HEIGHT} - 
      ${COLUMN_HEADER_HEIGHT}
    )`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
    }}>

    </Box>
  )
}

export default ListCards
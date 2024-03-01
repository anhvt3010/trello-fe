import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'

function Card({ card }) {
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.cover}</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<Group />}>20</Button>
        <Button size="small" startIcon={<Comment />}>15</Button>
        <Button size="small" startIcon={<Attachment />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
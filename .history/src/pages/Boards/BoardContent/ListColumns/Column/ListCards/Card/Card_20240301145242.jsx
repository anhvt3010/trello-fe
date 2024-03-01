import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'

function Card({ card }) {
  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>

      {shouldShowCardAction() && 
      
      }
      
    </MuiCard>
  )
}

export default Card
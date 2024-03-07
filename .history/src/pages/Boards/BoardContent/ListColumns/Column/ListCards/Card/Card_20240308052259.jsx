import { useSortable } from '@dnd-kit/sortable'
import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import { CSS } from '@dnd-kit/utilities'

function Card({ card }) {
  // drag and drop
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })
  const dndKitCardStyles = {
    // touchAction: 'none',
    // sử dụng CSS.Transform như trong doc sẽ bị lỗi stretch
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px dashed #2ecc71' : undefined
  }

  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <MuiCard
      ref={setNodeRef} style={dndKitCardStyles} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
        display: 
      }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>

      {shouldShowCardAction() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
            <Button size="small" startIcon={<Group />}>{card.memberIds.length}</Button>
          }

          {!!card?.comments?.length &&
            <Button size="small" startIcon={<Comment />}>{card.comments.length}</Button>
          }

          {!!card?.attachments?.length &&
            <Button size="small" startIcon={<Attachment />}>{card.attachments.length}</Button>
          }
        </CardActions>
      }

    </MuiCard>
  )
}

export default Card
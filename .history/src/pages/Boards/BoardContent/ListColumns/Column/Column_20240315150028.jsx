import { AddCard, Cloud, ContentCopy, ContentCut, ContentPaste, DeleteForever, DragHandle } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import CloseIcon from '@mui/icons-material/Close'
import { CSS } from '@dnd-kit/utilities'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'

function Column({ column }) {
  // drag and drop
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column }
  })
  const dndKitColumnStyles = {
    // touchAction: 'none',
    // sử dụng CSS.Transform như trong doc sẽ bị lỗi stretch
    transform: CSS.Translate.toString(transform),
    transition,
    // tránh lỗi kéo column ngắn => column dài gây ra bug
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  // Add new card
  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const [newCardTitle, setNewCardTitle] = useState('')

  const addNewCard = () => {
    if (!newCardTitle) {
      toast.error('Please enter card title', {
        position: 'bottom-right'
      })
      return
    }
    // goi api
    toggleOpenNewCardForm()
    setNewCardTitle('')
  }

  const confirmDeleteColumn = useConfirm()
  const handleDeleteColumn = () => {
    confirmDeleteColumn({
      title: 'Delete Column?',
      description: 'This action will permanently delete your Column & its Cards! Are you sure?'
    })
      .then(() => {
        console.log(column._id)
      })
      .catch(() => { })
  }

  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)}))`
        }}>
        {/* Header Column */}
        <Box sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title='More option'>
              <ExpandMoreIcon
                sx={{ color: 'text.primary', cursor: 'pointer' }}
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem
                onClick={toggleOpenNewCardForm}
                sx={{
                  '&:hover': {
                    color: 'success.light',
                    '& .add-new-card': { color: 'success.light' }
                  }
                }}
              >
                <ListItemIcon><AddCard className='add-new-card' fontSize="small" /></ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem>
                <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={handleDeleteColumn}
                sx={{
                  '&:hover': {
                    color: 'warning.dark',
                    '& .delete-icon': { color: 'warning.dark' }
                  }
                }}
              >
                <ListItemIcon><DeleteForever className='delete-icon' fontSize="small" /></ListItemIcon>
                <ListItemText>Delete this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* ListCard Column */}
        <ListCards cards={orderedCards} />

        {/* Footer Column */}
        <Box sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2
        }}>
          {!openNewCardForm
            ? <Box sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Button startIcon={<AddCard />} onClick={toggleOpenNewCardForm}>Add new card</Button>
              <Tooltip title="Drag to move">
                <DragHandle sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Box>
            : <Box sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <TextField
                label="Enter card title..."
                variant="outlined"
                type='text'
                size='small'
                autoFocus
                data-no-dnd="true"
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
                sx={{
                  '& label': { color: 'text.primary' },
                  '& input': {
                    color: (theme) => theme.palette.primary.main,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white')
                  },
                  '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: (theme) => theme.palette.primary.main },
                    '&:hover fieldset': { borderColor: (theme) => theme.palette.primary.main },
                    '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.primary.main }
                  },
                  '& .MuiOutlinedInput-input': {
                    borderRadius: 1
                  }
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  onClick={addNewCard}
                  variant='contained' color='success' size='small'
                  data-no-dnd="true"
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                  }}
                >Add</Button>
                <CloseIcon
                  fontSize='small'
                  data-no-dnd="true"
                  sx={{
                    color: { color: (theme) => theme.palette.warning.light },
                    cursor: 'pointer'
                  }}
                  onClick={toggleOpenNewCardForm}
                />
              </Box>
            </Box>
          }
        </Box>
      </Box >
    </div >
  )
}

export default Column
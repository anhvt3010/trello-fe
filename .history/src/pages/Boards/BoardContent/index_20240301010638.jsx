import { AddCard, Attachment, Cloud, Comment, ContentCopy, ContentCut, ContentPaste, DeleteForever, DragHandle, Group, ModeComment } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => (theme.trello.boardContentHeight),
      display: 'flex'
    }}>
      {/* Box Column */}
      <Box sx={{
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
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h6' sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Column Title</Typography>
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
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon><AddCard fontSize="small" /></ListItemIcon>
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
              <MenuItem>
                <ListItemIcon><DeleteForever fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* ListCard Column */}
        <Box sx={{
          p: 1,
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
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
            borderRadius: '8px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#c'
          }
        }}>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'unset'
          }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-9/49797537_583893002023859_4398128579339091968_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGih4tyl68m4M1dHIJSPKDPfS9sW8V3rb99L2xbxXetv-yculOy-LU8uw0wKkj8cDAYL9WEsDDG1NyV5keMhNA2&_nc_ohc=3mnllbnNzuoAX_8Qy98&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDgvsymBzN5h_K-c_VlWZBAgxvKQUlUV-S9aXjt3a_vtw&oe=66081F62"
              title="green iguana"
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Anhvt Spring React</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon={<Group />}>20</Button>
              <Button size="small" startIcon={<Comment />}>15</Button>
              <Button size="small" startIcon={<Attachment />}>10</Button>
            </CardActions>
          </Card>

          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'unset'
          }}>
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Anhvt Spring React</Typography>
            </CardContent>
          </Card>

        </Box>

        {/* Footer Column */}
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddCard />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandle sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
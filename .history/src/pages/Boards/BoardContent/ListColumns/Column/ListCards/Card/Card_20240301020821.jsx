import React from 'react'

function Card() {
  return (
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
  )
}

export default Card
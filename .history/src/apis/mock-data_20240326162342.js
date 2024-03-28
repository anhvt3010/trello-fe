export const mockData = {
  board: {
    id: 1,
    title: 'Anhvt Spring ReactJS',
    description: 'Project Personal',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: [2, 1, 3], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        id: 1,
        boardId: 1,
        title: 'To Do Column 01',
        cardOrderIds: [1, 3, 2, 4, 5, 6, 7],
        cards: [
          {
            id: 1,
            boardId: 1,
            columnId: 1,
            title: 'Title of card 01',
            description: 'Dscription description description',
            cover: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/49797537_583893002023859_4398128579339091968_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGih4tyl68m4M1dHIJSPKDPfS9sW8V3rb99L2xbxXetv-yculOy-LU8uw0wKkj8cDAYL9WEsDDG1NyV5keMhNA2&_nc_ohc=j3ADhkODqf0AX9YPVmT&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDT37YJxJTowt7yJMJqYxinq8CZdviaMaSKMM_BwW_0fw&oe=66100862',
            memberIds: [1],
            comments: [1, 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { id: 2, boardId: 1, columnId: 1, title: 'Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 3, boardId: 1, columnId: 1, title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 4, boardId: 1, columnId: 1, title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 5, boardId: 1, columnId: 1, title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 6, boardId: 1, columnId: 1, title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 7, boardId: 1, columnId: 1, title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        id: 2,
        boardId: 1,
        title: 'Inprogress Column 02',
        cardOrderIds: [8, 9, 10],
        cards: [
          { id: 8, boardId: 1, columnId: 2, title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 9, boardId: 1, columnId: 2, title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 10, boardId: 1, columnId: 2, title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  }
}
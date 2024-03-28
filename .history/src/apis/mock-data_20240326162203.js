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
        cardOrderIds: [1, 3, 'card-id-02', 'card-id-04', 'card-id-05', 'card-id-06', 'card-id-07'],
        cards: [
          {
            id: 1,
            boardId: 1,
            columnId: 1,
            title: 'Title of card 01',
            description: 'Dscription description description',
            cover: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/49797537_583893002023859_4398128579339091968_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGih4tyl68m4M1dHIJSPKDPfS9sW8V3rb99L2xbxXetv-yculOy-LU8uw0wKkj8cDAYL9WEsDDG1NyV5keMhNA2&_nc_ohc=j3ADhkODqf0AX9YPVmT&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDT37YJxJTowt7yJMJqYxinq8CZdviaMaSKMM_BwW_0fw&oe=66100862',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { id: 'card-id-02', boardId: 1, columnId: 1, title: 'Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 3, boardId: 1, columnId: 1, title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-04', boardId: 1, columnId: 1, title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-05', boardId: 1, columnId: 1, title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-06', boardId: 1, columnId: 1, title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-07', boardId: 1, columnId: 1, title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        id: 2,
        boardId: 1,
        title: 'Inprogress Column 02',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { id: 'card-id-08', boardId: 1, columnId: 2, title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-09', boardId: 1, columnId: 2, title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { id: 'card-id-10', boardId: 1, columnId: 2, title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  }
}
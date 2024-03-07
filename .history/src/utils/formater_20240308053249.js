/**
 * Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

export const generatePlaceholderCard = (column => {
  return {
    _id: `${'column-id-04-placeholder-card'`,
    boardId: 'board-id-01',
    columnId: 'column-id-03',
    FE_Placeholder: true
  }
})
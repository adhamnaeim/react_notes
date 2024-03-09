import React from 'react'
//props passes immutable object()
const ListItem = ({note}) => {
  return (
    <li className='ListItem'>
      <h3>{note.body}</h3>
    </li>
  )
}

export default ListItem

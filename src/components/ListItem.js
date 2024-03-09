import React from 'react'
//props passes immutable object()
const ListItem = (props) => {
  return (
    <li className='ListItem'>
      <h3>{props.note.body}</h3>
    </li>
  )
}

export default ListItem

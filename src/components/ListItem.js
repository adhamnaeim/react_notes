import React from 'react'
import {Link} from 'react-router-dom'

//props passes immutable object()
const ListItem = ({note}) => {
  return (
    <li className='ListItem'>
      <Link to={`/note/${note.id}`}><h3>{note.body}</h3></Link>
    </li>
  )
}

export default ListItem

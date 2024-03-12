import React from 'react'
import {Link} from 'react-router-dom'

//props passes immutable object()
const ListItem = ({note}) => {
  return (
    <li className='ListItem'>
      <div className='notes-list-item'>
        <Link to={`/note/${note.id}`}>
          <h3>{note.body}</h3>
        </Link>
      </div>
    </li>
  )
}

export default ListItem
